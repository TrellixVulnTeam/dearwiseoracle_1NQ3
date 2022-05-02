/** @jsx jsx */
import { jsx, React, css, polished, lodash, ImmutableArray, Immutable, DataSourceTypes, DataSourceJson, classNames } from 'jimu-core'
import { hooks, TextArea, defaultMessages as jimuUIMessages } from 'jimu-ui'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { MapWidgetSelector, SettingRow, SettingSection, SearchGeneralSetting, SearchDataSetting, SearchSuggestionSetting, SearchDataType, IMSearchSuggestionConfig, SearchDataConfig, SearchSuggestionConfig } from 'jimu-ui/advanced/setting-components'
import { WarningOutlined } from 'jimu-icons/outlined/suggested/warning'
import { ClickOutlined } from 'jimu-icons/outlined/application/click'

import defaultMessages from './translations/default'
import { IMConfig } from '../config'
import { DEFAULT_ROUTE_URL, DirectionPointFieldsSchema, DirectionLineFieldsSchema, MAX_SUGGESTIONS, OBJECTID_FIELD_NAME, RouteFieldsSchema, StopFieldsSchema } from '../constants'
import { getDirectionPointOutputDsId, getDirectionLineOutputDsId, getRouteOutputDsId, getStopOutputDsId } from '../utils'

const { useEffect, useCallback, useState, useRef, useMemo } = React
const DEFAULT_SEARCH_SUGGESTION_SETTINGS = {
  maxSuggestions: MAX_SUGGESTIONS
} as SearchSuggestionConfig

const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
  const { onSettingChange, id, config, useMapWidgetIds, portalUrl } = props
  const translate = hooks.useTranslate(defaultMessages, jimuUIMessages)
  // used in textarea, update whenever user input characters
  const [routeUrl, setRouteUrl] = useState<string>(config.routeConfig?.routeServiceUrl || DEFAULT_ROUTE_URL)
  // used in the check function, debounce update, see `debounceSetDeferredRoutUrlRef`
  const [deferredRouteUrl, setDeferredRouteUrl] = useState<string>(config.routeConfig?.routeServiceUrl)
  const [routeUrlValidation, setRoutUrlValidation] = useState<RouteUrlValidation>('valid')
  const debounceSetDeferredRoutUrlRef = useRef(null)
  const searchDataConfig = config.searchConfig?.dataConfig
  const searchGeneralConfig = config.searchConfig?.generalConfig
  const searchSuggestionConfig = useMemo(() => (Immutable(DEFAULT_SEARCH_SUGGESTION_SETTINGS).merge(config.searchConfig?.suggestionConfig || {})), [config.searchConfig?.suggestionConfig]) as IMSearchSuggestionConfig

  useEffect(() => {
    debounceSetDeferredRoutUrlRef.current = lodash.debounce(setDeferredRouteUrl, 500)

    return () => {
      debounceSetDeferredRoutUrlRef.current.cancel()
    }
  }, [])

  useEffect(() => {
    checkRouteUrl(deferredRouteUrl).then(validation => {
      setRoutUrlValidation(validation)
    })
  }, [deferredRouteUrl])

  const onMapWidgetSelected = (ids: string[]) => {
    onSettingChange({
      id: id,
      useMapWidgetIds: ids
    }, getOutputDataSourceJsons(id, ids, translate))
  }

  const onRouteUrlChange = useCallback(e => {
    setRouteUrl(e.target.value)
    debounceSetDeferredRoutUrlRef.current?.(e.target.value)
  }, [])

  const onRouteUrlAccept = async (value: string) => {
    if (!value || value === routeUrl) {
      return
    }
    const validation = value === deferredRouteUrl ? routeUrlValidation : await checkRouteUrl(value)
    setRoutUrlValidation(validation)
    if (validation === 'valid') {
      onSettingChange({
        id: id,
        config: config.setIn(['routeConfig', 'routeServiceUrl'], value)
      })
    }
  }

  const onSearchDataSettingsChange = (settings: ImmutableArray<SearchDataConfig>) => {
    if (!lodash.isDeepEqual(settings, searchDataConfig)) {
      onSettingChange({
        id: id,
        config: config.setIn(['searchConfig', 'dataConfig'], settings)
      })
    }
  }

  const onSearchGeneralSettingsChange = (hint: string) => {
    if (hint && hint !== searchGeneralConfig?.hint) {
      onSettingChange({
        id: id,
        config: config.setIn(['searchConfig', 'generalConfig'], { hint })
      })
    }
  }

  const onSearchSuggestionSettingsChange = (settings: IMSearchSuggestionConfig) => {
    if (!lodash.isDeepEqual(settings, searchSuggestionConfig)) {
      onSettingChange({
        id: id,
        config: config.setIn(['searchConfig', 'suggestionConfig'], settings)
      })
    }
  }

  const hasMap = useMemo(() => useMapWidgetIds?.length > 0, [useMapWidgetIds])

  return (
    <div className='widget-setting-directions jimu-widget-setting' css={style}>
      <SettingSection title={translate('selectMapWidget')} className={classNames({ 'border-0': !hasMap })}>
        <SettingRow>
          <MapWidgetSelector onSelect={onMapWidgetSelected} useMapWidgetIds={useMapWidgetIds} />
        </SettingRow>
      </SettingSection>
      {
        hasMap
          ? <div>
            <SettingSection title={translate('routeSettings')}>
              <SettingRow flow='wrap' label={translate('routeUrl')}>
                <TextArea className='w-100 route-url-input' placeholder={translate('enterUrl')} onChange={onRouteUrlChange} value={routeUrl}
                  onAcceptValue={onRouteUrlAccept}
                />
              </SettingRow>
              <SettingRow className='mt-1'>
                <i className='text-break example-url'>
                  {translate('exampleUrl', { url: `${DEFAULT_ROUTE_URL}` })}
                </i>
              </SettingRow>
            {
                routeUrlValidation !== 'valid' &&
                <SettingRow>
                  <WarningOutlined size={16} className='warning-icon' />
                  <p className='warning-hint'>
                    {routeUrlValidation === 'https_only' ? translate('onlySupportedHTTPS') : translate('invalidUrlMessage')}
                  </p>
                </SettingRow>
            }
            </SettingSection>
            <SettingSection title={translate('searchSettings')} className='search-settings'>
              <SearchDataSetting id={id} datasourceConfig={searchDataConfig as unknown as ImmutableArray<SearchDataConfig>}
                isCreateOutputDs={false} isNewWidget={!searchDataConfig} portalUrl={portalUrl} hideIconSetting={true}
                searchDataSettingType={SearchDataType.GeocodeService} onSettingChange={onSearchDataSettingsChange}
              />
              <SearchGeneralSetting id={id} hint={searchGeneralConfig?.hint} onSettingChange={onSearchGeneralSettingsChange} />
              <SearchSuggestionSetting id={id} settingConfig={searchSuggestionConfig} onSettingChange={onSearchSuggestionSettingsChange} hideRecentSearchSetting={true} />
            </SettingSection>
          </div>
          : <div className='d-flex justify-content-center align-items-center placeholder-container'>
              <div className='text-center'>
                <ClickOutlined size={48} className='d-inline-block placeholder-icon mb-2' />
                <p className='placeholder-hint'>{translate('selectMapHint')}</p>
              </div>
            </div>
      }
    </div>
  )
}

export default Setting

const style = css`
.route-url-input{
  min-height: ${polished.rem(100)}
}
.example-url{
  font-size: ${polished.rem(12)};
  color: var(--dark-500);
}
.warning-icon{
  color: var(--danger-500);
}
.warning-hint{
  width: calc(100% - 20px);
  margin: 0 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--danger-500);
}
.placeholder-container{
  height: calc(100% - 100px);
  .placeholder-hint{
    font-size: ${polished.rem(14)};
    font-weight: 500;
    color: var(--dark-500);
    max-width: ${polished.rem(160)};
  }
  .placeholder-icon{
    color: var(--dark-200);
  }
}
.search-settings{
  >div{
    padding-left: 0 !important;
    padding-right: 0 !important;
    padding-top: 0 !important;
    border: 0 !important;
  }
}
`

type RouteUrlValidation = 'https_only' | 'invalid_route_url' | 'valid'

async function checkRouteUrl (url: string): Promise<RouteUrlValidation> {
  try {
    if (!url) { // allow not to set route url
      return 'valid'
    }
    const isHttps = /^https:\/\//.test(url)
    if (!isHttps) {
      return 'https_only'
    }
    const hasDomain = url.includes('.') && url.charAt(url.length - 1) !== '.'
    if (!hasDomain) {
      return 'invalid_route_url'
    }
    // TODO: how to check whether is route service url
    return 'valid'
  } catch (err) {
    return 'invalid_route_url'
  }
}

function getOutputDataSourceJsons (widgetId: string, mapWidgetIds: string[], translate: (id: string) => string): DataSourceJson[] {
  // If do not have used map widget, won't generate any output data sources.
  if (!mapWidgetIds || mapWidgetIds.length === 0) {
    return []
  }
  return [
    {
      id: getStopOutputDsId(widgetId),
      label: translate('outputStops'),
      type: DataSourceTypes.FeatureLayer,
      isOutputFromWidget: true,
      geometryType: 'esriGeometryPoint',
      schema: {
        idField: OBJECTID_FIELD_NAME,
        fields: { ...StopFieldsSchema }
      }
    },
    {
      id: getDirectionPointOutputDsId(widgetId),
      label: translate('outputDirectionPoints'),
      type: DataSourceTypes.FeatureLayer,
      isOutputFromWidget: true,
      geometryType: 'esriGeometryPoint',
      schema: {
        idField: OBJECTID_FIELD_NAME,
        fields: { ...DirectionPointFieldsSchema }
      }
    },
    {
      id: getDirectionLineOutputDsId(widgetId),
      label: translate('outputDirectionLines'),
      type: DataSourceTypes.FeatureLayer,
      isOutputFromWidget: true,
      geometryType: 'esriGeometryPolyline',
      schema: {
        idField: OBJECTID_FIELD_NAME,
        fields: { ...DirectionLineFieldsSchema }
      }
    },
    {
      id: getRouteOutputDsId(widgetId),
      label: translate('outputRoute'),
      type: DataSourceTypes.FeatureLayer,
      isOutputFromWidget: true,
      geometryType: 'esriGeometryPolyline',
      schema: {
        idField: OBJECTID_FIELD_NAME,
        fields: { ...RouteFieldsSchema }
      }
    }
  ]
}
