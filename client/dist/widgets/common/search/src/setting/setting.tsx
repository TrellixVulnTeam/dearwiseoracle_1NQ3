/** @jsx jsx */
import { jsx, DataSourceJson, css, ImmutableArray } from 'jimu-core'
import { AllWidgetSettingProps } from 'jimu-for-builder'
import { SearchDataConfig, SearchDataSetting, SearchDataType } from 'jimu-ui/advanced/setting-components'
import { IMConfig } from '../config'
import SearchResultSetting from './component/search-setting-option'
// import ArrangementStyleSetting from './component/arrangement-style'
interface ExtraProps {
  id: string
}

type SettingProps = AllWidgetSettingProps<IMConfig> & ExtraProps

const Setting = (props: SettingProps) => {
  const { config, id, portalUrl, onSettingChange, useDataSources } = props

  const SYLE = css`
    .suggestion-setting-con  {
      padding-bottom: 0;
    }
  `

  const onDataSettingChange = (datasourceConfig: ImmutableArray<SearchDataConfig>) => {
    if (!datasourceConfig) return false
    const newConfig = config?.setIn(['datasourceConfig'], datasourceConfig)
    onSettingChange({ id, config: newConfig })
  }

  const createOutputDs = (outputDsJsonList: DataSourceJson[], datasourceConfig: ImmutableArray<SearchDataConfig>) => {
    if (!datasourceConfig) return false
    const newConfig = config?.setIn(['datasourceConfig'], datasourceConfig)
    onSettingChange({ id, config: newConfig }, outputDsJsonList)
  }

  return (
    <div className='widget-setting-search jimu-widget-search' css={SYLE}>
      <SearchDataSetting
        id={id}
        portalUrl={portalUrl}
        useDataSources={useDataSources}
        isCreateOutputDs={true}
        onSettingChange={onDataSettingChange}
        createOutputDs={createOutputDs}
        datasourceConfig={config?.datasourceConfig}
        isNewWidget={!config?.datasourceConfig}
        searchDataSettingType={SearchDataType.Both}
      />
      <SearchResultSetting
        id={id}
        config={config}
        onSettingChange={onSettingChange}
        useDataSources={useDataSources}
      />
      {/* <ArrangementStyleSetting
        id={id}
        config={config}
        onSettingChange={onSettingChange}
      /> */}
    </div>
  )
}

export default Setting
