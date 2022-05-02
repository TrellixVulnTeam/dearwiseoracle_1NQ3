/** @jsx jsx */
import { React, jsx, css, AllWidgetProps, DataSourceManager, DataSourceStatus, FeatureLayerDataSource, dataSourceUtils, polished } from 'jimu-core'
import { JimuMapView, JimuMapViewComponent } from 'jimu-arcgis'
import { hooks, SVG, defaultMessages as jimuUIMessages } from 'jimu-ui'
import Directions from 'esri/widgets/Directions'
import FeatureLayer from 'esri/layers/FeatureLayer'
import Graphic from 'esri/Graphic'

import { IMConfig, IMSearchConfig } from '../config'
import { DefaultJSAPISearchProperties, DEFAULT_ROUTE_URL } from '../constants'
import { getDirectionPointOutputDsId, getDirectionLineOutputDsId, getRouteOutputDsId, getStopOutputDsId } from '../utils'
import defaultMessages from './translations/default'
import iconSrc from '../../icon.svg'

const { useEffect, useState, useRef, useCallback, useMemo } = React

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const { config, id, portalSelf } = props
  const { searchConfig, routeConfig } = config
  const useMapWidgetId = props.useMapWidgetIds?.[0]
  const [jimuMapView, setJimuMapView] = useState<JimuMapView>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const directionsRef = useRef<__esri.Directions>(null)
  const watchLastRouteRef = useRef<__esri.WatchHandle>(null)
  const translate = hooks.useTranslate(defaultMessages, jimuUIMessages)
  const defaultSearchHint = useMemo(() => translate('findAddressOrPlace'), [translate])
  const orgRouteUrl = portalSelf?.helperServices?.route?.url

  const onActiveMapViewChange = useCallback(activeView => {
    setJimuMapView(activeView)
  }, [])

  useEffect(() => {
    /**
     * If have used map widget and the jimu map view is created, will update directions widget.
     */
    if (useMapWidgetId && jimuMapView?.view && containerRef.current) {
      updateDirectionsWidget()
    }

    /**
     * If do not have used map widget, will try to destroy the current directions widget.
     */
    if (!useMapWidgetId) {
      destoryDirectionsWidget()
    }

    function updateDirectionsWidget () {
      destoryDirectionsWidget()
      const c = document.createElement('div')
      c.className = 'directions-container'
      containerRef.current.innerHTML = ''
      containerRef.current.appendChild(c)
      directionsRef.current = new Directions({
        id,
        container: c,
        view: jimuMapView?.view,
        routeServiceUrl: routeConfig?.routeServiceUrl || orgRouteUrl || DEFAULT_ROUTE_URL,
        searchProperties: convertSearchConfigToJSAPISearchProperties(searchConfig, defaultSearchHint)
      })
      // Set route parameters to get needed data from route service.
      directionsRef.current.viewModel.routeParameters.returnRoutes = true
      directionsRef.current.viewModel.routeParameters.returnDirections = true
      directionsRef.current.viewModel.routeParameters.returnStops = true

      setOutputDssNotReady(id)
      watchLastRoute()
    }

    function watchLastRoute () {
      watchLastRouteRef.current = directionsRef.current.watch('lastRoute', () => {
        if (directionsRef.current.lastRoute) { // If there is route result, change status of output data sources to unloaded.
          setOutputDssUnloadedAndSetLayer(id, directionsRef.current.lastRoute)
        } else { // If there isn't route result, change status of output data sources to not_ready.
          setOutputDssNotReady(id)
        }
      })
    }

    function destoryDirectionsWidget () {
      // If do not have map, destroy will throw error.
      if (directionsRef.current?.view?.map) {
        directionsRef.current.destroy()
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }

    return () => {
      watchLastRouteRef.current?.remove()
      destoryDirectionsWidget()
    }
  }, [id, jimuMapView?.view, useMapWidgetId, searchConfig, routeConfig?.routeServiceUrl, orgRouteUrl, defaultSearchHint])

  return (
    <div className='widget-directions jimu-widget'>
      {
        useMapWidgetId
          ? <JimuMapViewComponent useMapWidgetId={useMapWidgetId} onActiveViewChange={onActiveMapViewChange} />
          : <div className='w-100 h-100 bg-light-200 d-flex justify-content-center align-items-center'>
              <div className='text-center'>
                <SVG size={20} src={iconSrc} className='d-inline-block' color='var(--black)' />
                <p className='widget-label mt-2'>{translate('_widgetLabel')}</p>
              </div>
            </div>
      }
      <div ref={containerRef} css={style}></div>
    </div>
  )
}

export default Widget

const style = css`
  width: 100% !important;
  height: 100% !important;
  .widget-label{
    font-size: ${polished.rem(14)};
    font-weight: 400;
  }
  .directions-container{
    width: 100% !important;
    height: 100% !important;
    .esri-search{
      .esri-search__container{
        .esri-search__sources-button{
          z-index: 0;
          border-top: none;
          border-right: solid 1px var(--light-300);
          border-bottom: none;
          border-left: none;
          margin-right: 1px;
        }
        .esri-search__input-container{
          margin: auto;
          .esri-search__clear-button{
            z-index: 0;
            right: 4px;
          }
        }
      }
    }
    .esri-directions__panel-content{
      padding: 0 0 20px 0;
    }
  }
`

function convertSearchConfigToJSAPISearchProperties (searchConfig: IMSearchConfig, defaultHint: string): __esri.DirectionsSearchProperties & { locationEnabled?: boolean } {
  const properties: __esri.DirectionsSearchProperties & { locationEnabled?: boolean } = { ...DefaultJSAPISearchProperties }

  const hint = searchConfig?.generalConfig?.hint || defaultHint
  if (hint) {
    properties.allPlaceholder = hint
  }
  if (typeof searchConfig?.suggestionConfig?.maxSuggestions === 'number') {
    properties.maxSuggestions = searchConfig.suggestionConfig.maxSuggestions
  }
  if (typeof searchConfig?.suggestionConfig?.isUseCurrentLoation === 'boolean') {
    properties.locationEnabled = searchConfig.suggestionConfig.isUseCurrentLoation
  }
  if (Array.isArray(searchConfig?.dataConfig)) {
    properties.sources = searchConfig.dataConfig.map(c => {
      return {
        url: c.geocodeURL,
        name: c.label,
        placeholder: c.hint || defaultHint
      } as __esri.LocatorSearchSource
    }) as any
  }

  return properties
}

function setOutputDssNotReady (widgetId: string) {
  const stopOutputDs = DataSourceManager.getInstance().getDataSource(getStopOutputDsId(widgetId)) as FeatureLayerDataSource
  const routeOutputDs = DataSourceManager.getInstance().getDataSource(getRouteOutputDsId(widgetId)) as FeatureLayerDataSource
  const directionPointOutputDs = DataSourceManager.getInstance().getDataSource(getDirectionPointOutputDsId(widgetId)) as FeatureLayerDataSource
  const directionLineOutputDs = DataSourceManager.getInstance().getDataSource(getDirectionLineOutputDsId(widgetId)) as FeatureLayerDataSource

  setDsNotReady(stopOutputDs)
  setDsNotReady(routeOutputDs)
  setDsNotReady(directionPointOutputDs)
  setDsNotReady(directionLineOutputDs)
}

function setOutputDssUnloadedAndSetLayer (widgetId: string, result: __esri.RouteLayerSolveResult) {
  const stopOutputDs = DataSourceManager.getInstance().getDataSource(getStopOutputDsId(widgetId)) as FeatureLayerDataSource
  const routeOutputDs = DataSourceManager.getInstance().getDataSource(getRouteOutputDsId(widgetId)) as FeatureLayerDataSource
  const directionPointOutputDs = DataSourceManager.getInstance().getDataSource(getDirectionPointOutputDsId(widgetId)) as FeatureLayerDataSource
  const directionLineOutputDs = DataSourceManager.getInstance().getDataSource(getDirectionLineOutputDsId(widgetId)) as FeatureLayerDataSource

  createJSAPILayerForDs(stopOutputDs, 'point', convertToJSAPIGraphic(result.stops?.toArray()))
  createJSAPILayerForDs(routeOutputDs, 'polyline', convertToJSAPIGraphic(result.routeInfo ? [result.routeInfo] : []))
  createJSAPILayerForDs(directionPointOutputDs, 'point', convertToJSAPIGraphic(result.directionPoints?.toArray()))
  createJSAPILayerForDs(directionLineOutputDs, 'polyline', convertToJSAPIGraphic(result.directionLines?.toArray()))

  setDsUnloaded(stopOutputDs)
  setDsUnloaded(routeOutputDs)
  setDsUnloaded(directionPointOutputDs)
  setDsUnloaded(directionLineOutputDs)
}

function setDsNotReady (ds: FeatureLayerDataSource) {
  if (ds) {
    ds.setStatus(DataSourceStatus.NotReady)
    ds.setCountStatus(DataSourceStatus.NotReady)
  }
}

function setDsUnloaded (ds: FeatureLayerDataSource) {
  if (ds) {
    ds.setStatus(DataSourceStatus.Unloaded)
    ds.setCountStatus(DataSourceStatus.Unloaded)
  }
}

function createJSAPILayerForDs (ds: FeatureLayerDataSource, geoType: 'point' | 'polyline', source: __esri.Graphic[]) {
  if (!ds) {
    return
  }
  const idField = ds.getSchema().fields[ds.getIdField()]
  ds.layer = new FeatureLayer({
    id: ds.id,
    fields: dataSourceUtils.changeJimuFieldsToJSAPIFields(ds.getSchema().fields, idField),
    objectIdField: idField?.name,
    geometryType: geoType,
    source: source
  })
  ds.addSourceVersion()
}

function convertToJSAPIGraphic (res: __esri.Stop[] | __esri.RouteInfo[] | __esri.DirectionLine[] | __esri.DirectionPoint[]): __esri.Graphic[] {
  if (!res) {
    return []
  }
  return res.map(r => {
    if (!r) {
      return new Graphic()
    }
    const json = r.toPortalJSON() as unknown as any
    return Graphic.fromJSON({ attributes: json.attributes, geometry: json.geometry, symbol: json.symbol, popupTemplate: json.popupTemplate })
  })
}
