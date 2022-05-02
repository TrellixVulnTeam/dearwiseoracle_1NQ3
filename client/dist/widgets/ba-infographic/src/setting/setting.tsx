/** @jsx jsx */
import { React, jsx, css } from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { SettingSection, SettingRow, MapWidgetSelector } from 'jimu-ui/advanced/setting-components'
import { TextInput, Select, Switch, Label, Radio } from 'jimu-ui'
import defaultMessages from './translations/default'
import { getStyle } from './lib/style'
import { ReportListAccordion } from '../business-analyst-components/components.js'
import { ColorPicker } from 'jimu-ui/basic/color-picker'
import '../business-analyst-components/stencil-components/dist/assets/css/calcite.css'

export default class Setting extends React.PureComponent<AllWidgetSettingProps<any>, any> {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      countries: null,
      error: null,
      showHeaderSettings: typeof this.props.config.displayHeader !== 'undefined' ? this.props.config.displayHeader : true
    }
  }

  presetColors = [
    { label: '#525659', value: '#525659', color: '#525659' },
    { label: '#0079C1', value: '#0079C1', color: '#0079C1' },
    { label: '#FFFFFF', value: '#FFFFFF', color: '#FFFFFF' }
  ]

  componentDidMount () {
    this.updatePlaceholders()

    window.addEventListener('reportSelected', (e: any) => {
      if (this.props.id && (this.props.id === e.detail.id)) {
        this.onChangeReport(e.detail.value)
      }
    })

    const loadScript = function (src) {
      const tag = document.createElement('script')
      tag.async = false
      tag.src = src
      tag.type = 'module'
      const body = document.getElementsByTagName('body')[0]
      body.appendChild(tag)
    }

    loadScript('https://js.arcgis.com/calcite-components/1.0.0-beta.69/calcite.esm.js')

    fetch('https://geoenrich.arcgis.com/arcgis/rest/services/World/GeoEnrichmentServer/Geoenrichment/countries?f=pjson')
      .then((response) => response.json()) //2
      .then(
        (data: any) => {
          this.setState((prevState) => ({
            ...prevState,
            isLoaded: true,
            countries: data.countries
          }))
        },
        (error) => {
          this.setState((prevState) => ({
            ...prevState,
            isLoaded: true,
            error
          }))
        }
      )
  }

  onLatLongChanged = (e: any) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(name, value)
    })
  }

  onBufferSizeChange = (e: any) => {
    const name = e.currentTarget.name
    const value = e.currentTarget.value
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(name, value)
    })
    this.updatePlaceholders()
  }

  updatePlaceholders = () => {
    const bufferSizes = document.querySelectorAll('.bufferInput')
    let showPlaceholders = true
    for (let i = 0; i < bufferSizes.length; i++) {
      const bufferInput = bufferSizes[i].firstChild.firstChild
      // @ts-expect-error
      bufferInput.placeholder = ''
      // @ts-expect-error
      if (bufferInput.value !== '') { showPlaceholders = false }
    }
    if (showPlaceholders) {
      const defaultBuffers = '1,3,5'
      for (let i = 0; i < bufferSizes.length; i++) {
        const bufferInput = bufferSizes[i].firstChild.firstChild
        // @ts-expect-error
        bufferInput.placeholder = defaultBuffers.split(',')[i]
      }
    }
  }

  onToggleChanged = (checked: any, name: any): void => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set(name, checked)
    })
    if (name === 'displayHeader') {
      this.setState((prevState) => ({
        ...prevState,
        showHeaderSettings: !this.state.showHeaderSettings
      }))
    }
  }

  handleBufferTypeChange = (e: any): void => {
    const selectedValue = e.target.id
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('bufferType', selectedValue)
    })
    const self = this
    function _wait () {
      self.changeBufferUnit('miles')
    }
    if (selectedValue === 'ring') {
      setTimeout(_wait, 0)
    }
  }

  changeBufferUnit = (unit) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('bufferUnits', unit)
    })
  }

  onBufferUnitSelectChanged = (e: any) => {
    const selectedValue = e.currentTarget.value
    this.changeBufferUnit(selectedValue)
  }

  onCountrySelectChanged = (e: any) => {
    const selectedValue = e.currentTarget.value
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('langCode', selectedValue)
    })
  }

  onViewModeChange = (e: any) => {
    const selectedValue = e.currentTarget.value
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('viewMode', selectedValue)
    })
  }

  updateBackgroundColor = (color: string) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('backgroundColor', color)
    })
  }

  updateHeaderColor = (color: string) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('headerColor', color)
    })
  }

  updateHeaderTextColor = (color: string) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('headerTextColor', color)
    })
  }

  onMapWidgetSelected = (useMapWidgetIds: string[]) => {
    this.props.onSettingChange({
      id: this.props.id,
      useMapWidgetIds: useMapWidgetIds
    })
  }

  onChangeReport = (selectedValue: string) => {
    this.props.onSettingChange({
      id: this.props.id,
      config: this.props.config.set('selectedReport', selectedValue)
    })
  }

  stringifyTheme = () => {
    // Theme colors should match ExB
    const themeString = {
      brand: 'rgba(0, 170, 187,1)',
      foreground: 'rgba(24, 24, 24, 1)',
      text1: 'rgba(0, 170, 187,1)',
      text2: 'rgba(168,168,168,1)',
      text3: 'rgba(255,255,255,1)',
      border: 'rgba(106, 106, 106, 1)'
    }
    return JSON.stringify(themeString)
  }

  render () {
    const style = css`
      .widget-setting-get-map-coordinates {
        .checkbox-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 8px;
        }
      }
    `
    return (

      <div css={getStyle(this.props.theme)}>
        <div className='widget-setting-bao'>
          <SettingSection
            className='map-selector-section'
            title={this.props.intl.formatMessage({
              id: 'selectMapWidget',
              defaultMessage: defaultMessages.selectMapWidget
            })}
          >
            <div css={style}>
              <div className='widget-setting-get-map-coordinates'>
                <SettingRow>
                  <MapWidgetSelector
                    onSelect={this.onMapWidgetSelected}
                    useMapWidgetIds={this.props.useMapWidgetIds}
                  />
                </SettingRow>
              </div>
            </div>
          </SettingSection>
          <SettingSection title={<div className='w-100 d-flex' style={{ height: '23px', flexFlow: 'column wrap', alignContent: 'space-between' }}>
            <div className='text-truncate py-1'>
              {this.props.intl.formatMessage({ id: 'locationSettings', defaultMessage: defaultMessages.locationSettings })}
            </div>
          </div>}>
            {/* Default Lat/Long is Esri Headquarters */}
            <SettingRow flow='no-wrap' label={this.props.intl.formatMessage({ id: 'latitude', defaultMessage: defaultMessages.latitude })}>
              <TextInput name='infographicLatitude' data-key='infographicLatitude' style={{ width: '50%' }} className='cursor-pointer inline' size='sm' value={this.props.config.infographicLatitude} placeholder={'34.057170'} onChange={this.onLatLongChanged} />
            </SettingRow>
            <SettingRow flow='no-wrap' label={this.props.intl.formatMessage({ id: 'longitude', defaultMessage: defaultMessages.longitude })}>
              <TextInput name='infographicLongitude' data-key='infographicLongitude' style={{ width: '50%' }} className='cursor-pointer inline' size='sm' value={this.props.config.infographicLongitude} placeholder={'-117.194150'} onChange={this.onLatLongChanged} />
            </SettingRow>
            <SettingRow flow='wrap'>
              <Label for='defaultCountry' className='mx-1 ui-mode-label'>{this.props.intl.formatMessage({ id: 'selectCountry', defaultMessage: defaultMessages.selectCountry })}</Label>
              <Select name='defaultCountry' size='sm' value={this.props.config?.langCode || 'US'} onChange={this.onCountrySelectChanged}>
                {this.state.countries && this.state.countries.map((country) => {
                  return (
                    <option key={country.id} value={country.id}>{country.name}</option>
                  )
                })}
              </Select>
            </SettingRow>
          </SettingSection>
          <SettingSection title={<div className='w-100 d-flex' style={{ height: '23px', flexFlow: 'column wrap', alignContent: 'space-between' }}>
            <div className='text-truncate py-1'>
              {this.props.intl.formatMessage({ id: 'bufferType', defaultMessage: defaultMessages.bufferType })}
            </div>
          </div>}>
            <SettingRow className='mt-2'>
              <Radio checked={!this.props.config.bufferType || this.props.config.bufferType === 'ring'} id='ring' style={{ cursor: 'pointer' }} onChange={this.handleBufferTypeChange} />
              <Label style={{ cursor: 'pointer' }} for='ring' className='ml-1 text-break'>{this.props.intl.formatMessage({ id: 'rings', defaultMessage: defaultMessages.rings })}</Label>
            </SettingRow>
            <SettingRow className='mt-2'>
              <Radio checked={this.props.config.bufferType === 'drivetime'} id='drivetime' style={{ cursor: 'pointer' }} onChange={this.handleBufferTypeChange} />
              <Label style={{ cursor: 'pointer' }} for='drivetime' className='ml-1 text-break'>{this.props.intl.formatMessage({ id: 'driveTime', defaultMessage: defaultMessages.driveTime })}</Label>
            </SettingRow>
            <SettingRow className='mt-2'>
              <Radio checked={this.props.config.bufferType === 'walktime'} id='walktime' style={{ cursor: 'pointer' }} onChange={this.handleBufferTypeChange} />
              <Label style={{ cursor: 'pointer' }} for='walktime' className='ml-1 text-break'>{this.props.intl.formatMessage({ id: 'walkTime', defaultMessage: defaultMessages.walkTime })}</Label>
            </SettingRow>
            <SettingRow flow='no-wrap' className='w-100 d-flex'>
              <TextInput name='bufferSize1' data-key='bufferSize1' className='bufferInput' size='sm' value={this.props.config.bufferSize1} placeholder={'1'} onChange={this.onBufferSizeChange} />
              <TextInput name='bufferSize2' data-key='bufferSize2' className='bufferInput mx-1' size='sm' value={this.props.config.bufferSize2} placeholder={'3'} onChange={this.onBufferSizeChange} />
              <TextInput name='bufferSize3' data-key='bufferSize3' className='bufferInput' size='sm' value={this.props.config.bufferSize3} placeholder={'5'} onChange={this.onBufferSizeChange} />
              <Select name='bufferUnits' className='bufferUnits ml-1' size='sm' value={this.props.config?.bufferUnits || 'miles'} onChange={this.onBufferUnitSelectChanged}>
              {this.props.config?.bufferType !== 'ring' && (
                <option value='minutes'>{this.props.intl.formatMessage({ id: 'minuteLow', defaultMessage: defaultMessages.minuteLow })}</option>
              )}
              <option value='miles'>{this.props.intl.formatMessage({ id: 'miles', defaultMessage: defaultMessages.milesLow })}</option>
                <option value='kilometers'>{this.props.intl.formatMessage({ id: 'kilometerLow', defaultMessage: defaultMessages.kilometerLow })}</option>
              </Select>
            </SettingRow>
          </SettingSection>
          <SettingSection title={<div className='w-100 d-flex' style={{ height: '23px', flexFlow: 'column wrap', alignContent: 'space-between' }}>
            <div className='text-truncate py-1'>
              {this.props.intl.formatMessage({ id: 'selectInfographic', defaultMessage: defaultMessages.selectInfographic })}
            </div>
          </div>}>
            <SettingRow flow='wrap'>
              <ReportListAccordion
                env={window.jimuConfig.hostEnv}
                listInstanceId={this.props.id}
                username={this.props.user.username}
                token={this.props.token}
                theme={this.stringifyTheme()}
                selectedReportId={this.props.config.selectedReport}
                langCode={this.props.config?.langCode || 'US'}
                style={{ width: '100%' }}>
              </ReportListAccordion>
            </SettingRow>
            <div className='pt-2 text-sm-right'>
              <a href='https://doc.arcgis.com/en/arcgis-online/administer/credits.htm' target='_blank'>{this.props.intl.formatMessage({ id: 'creditUsage', defaultMessage: defaultMessages.creditUsage })}</a>
            </div>
          </SettingSection>
          <SettingSection title={<div className='w-100 d-flex' style={{ height: '23px', flexFlow: 'column wrap', alignContent: 'space-between' }}>
            <div className='text-truncate py-1'>
              {this.props.intl.formatMessage({ id: 'infographicSettings', defaultMessage: defaultMessages.infographicSettings })}
            </div>
          </div>}>
            <SettingRow flow='no-wrap' label={this.props.intl.formatMessage({ id: 'viewMode', defaultMessage: defaultMessages.viewMode })}>
              <Select className='w-50' name='viewMode' size='sm' value={this.props.config?.viewMode || 'full'} onChange={this.onViewModeChange}>
                <option value='full'>{this.props.intl.formatMessage({ id: 'fullPages', defaultMessage: defaultMessages.fullPages })}</option>
                <option value='stack'>{this.props.intl.formatMessage({ id: 'panelsInStack', defaultMessage: defaultMessages.panelsInStack })}</option>
                <option value='slides'>{this.props.intl.formatMessage({ id: 'panelsInSlides', defaultMessage: defaultMessages.panelsInSlides })}</option>
                <option value='stack-all'>{this.props.intl.formatMessage({ id: 'panelsInStackAll', defaultMessage: defaultMessages.panelsInStackAll })}</option>
              </Select>
            </SettingRow>
            <SettingRow label={this.props.intl.formatMessage({ id: 'backgroundColor', defaultMessage: defaultMessages.backgroundColor })}>
              <ColorPicker
                style={{ padding: '0' }} width={26} height={14} disableAlpha
                color={this.props.config.backgroundColor ? this.props.config.backgroundColor : '#525659'}
                onChange={this.updateBackgroundColor}
                presetColors={this.presetColors}
              />
            </SettingRow>

            {/* <SettingRow label={this.props.intl.formatMessage({ id: 'runReportOnClick', defaultMessage: defaultMessages.runReportOnClick })}>
              <Switch className='can-x-switch' data-key='runReportOnClick' checked={typeof this.props.config.runReportOnClick !== 'undefined' ? this.props.config.runReportOnClick : true} onChange={e => { this.onToggleChanged(e.target.checked, 'runReportOnClick') }} />
            </SettingRow> */}
            {/* <SettingRow label={this.props.intl.formatMessage({ id: 'showSearch', defaultMessage: defaultMessages.showSearch })}>
              <Switch className='can-x-switch' data-key='showSearch' checked={typeof this.props.config.showSearch !== 'undefined' ? this.props.config.showSearch : true} onChange={e => { this.onToggleChanged(e.target.checked, 'showSearch') }} />
            </SettingRow> */}
            <SettingRow label={this.props.intl.formatMessage({ id: 'displayHeader', defaultMessage: defaultMessages.displayHeader })}>
              <Switch className='can-x-switch' data-key='displayHeader' checked={typeof this.props.config.displayHeader !== 'undefined' ? this.props.config.displayHeader : true} onChange={e => { this.onToggleChanged(e.target.checked, 'displayHeader') }} />
            </SettingRow>
            {this.state.showHeaderSettings && (
              <React.Fragment>
                <SettingRow label={this.props.intl.formatMessage({ id: 'headerColor', defaultMessage: defaultMessages.headerColor })}>
                  <ColorPicker
                    style={{ padding: '0' }} width={26} height={14} disableAlpha
                    color={this.props.config.headerColor ? this.props.config.headerColor : '#0079C1'}
                    onChange={this.updateHeaderColor}
                    presetColors={this.presetColors}
                  />
                </SettingRow>
                <SettingRow label={this.props.intl.formatMessage({ id: 'headerTextColor', defaultMessage: defaultMessages.headerTextColor })}>
                  <ColorPicker
                    style={{ padding: '0' }} width={26} height={14} disableAlpha
                    color={this.props.config.headerTextColor ? this.props.config.headerTextColor : '#FFFFFF'}
                    onChange={this.updateHeaderTextColor}
                    presetColors={this.presetColors}
                  />
                </SettingRow>
                <SettingRow label={this.props.intl.formatMessage({ id: 'imageExport', defaultMessage: defaultMessages.imageExport })}>
                  <Switch className='can-x-switch' data-key='imageExport' checked={typeof this.props.config.imageExport !== 'undefined' ? this.props.config.imageExport : true} onChange={e => { this.onToggleChanged(e.target.checked, 'imageExport') }} />
                </SettingRow>
                {/* <SettingRow label={this.props.intl.formatMessage({ id: 'pdf', defaultMessage: defaultMessages.pdf })}>
                  <Switch className='can-x-switch' data-key='pdf' checked={typeof this.props.config.pdf !== 'undefined' ? this.props.config.pdf : true} onChange={e => { this.onToggleChanged(e.target.checked, 'pdf') }} />
                </SettingRow>
                <SettingRow label={this.props.intl.formatMessage({ id: 'dynamicHtml', defaultMessage: defaultMessages.dynamicHtml })}>
                  <Switch className='can-x-switch' data-key='dynamicHtml' checked={typeof this.props.config.dynamicHtml !== 'undefined' ? this.props.config.dynamicHtml : true} onChange={e => { this.onToggleChanged(e.target.checked, 'dynamicHtml') }} />
                </SettingRow>
                <SettingRow label={this.props.intl.formatMessage({ id: 'print', defaultMessage: defaultMessages.print })}>
                  <Switch className='can-x-switch' data-key='print' checked={typeof this.props.config.print !== 'undefined' ? this.props.config.print : true} onChange={e => { this.onToggleChanged(e.target.checked, 'print') }} />
                </SettingRow> */}
              </React.Fragment>
            )}
          </SettingSection>
        </div>
      </div>
    )
  }
}
