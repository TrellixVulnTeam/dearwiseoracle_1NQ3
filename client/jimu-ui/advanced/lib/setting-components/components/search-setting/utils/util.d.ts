import { SceneLayerDataSource, FeatureLayerDataSource, UseDataSource, IMWidgetJson, JimuFieldType, ImmutableArray, DataSourceSchema, DataSourceJson } from 'jimu-core';
import { SearchDataConfig, SearchGeocodeDataConfig } from '../type/type';
export declare const ObjectIdSchema: {
    jimuName: string;
    alias: string;
    type: JimuFieldType;
    name: string;
};
export declare const AddressSchema: {
    jimuName: string;
    alias: string;
    type: JimuFieldType;
    name: string;
};
export interface GetDefaultGeocodeConfigOption {
    configId: string;
    id: string;
    hint: string;
    label: string;
    geocodeServiceUrl: string;
    singleLineFieldName: string;
}
/**
 * Get outputDs default schema
*/
export declare const getInitSchema: (label?: string) => DataSourceSchema;
/**
 * Get outputDs json
*/
export declare const getInitOutDataSource: (widgetId: string, configId: string, geocodeUrl: string, label?: string) => DataSourceJson;
/**
 * Get geocode service default config
*/
export declare const getDefaultGeocodeConfig: (option: GetDefaultGeocodeConfigOption) => SearchGeocodeDataConfig;
export declare const getOutputJsonOriginDs: (ds: SceneLayerDataSource | FeatureLayerDataSource) => FeatureLayerDataSource;
export declare const getWhetherDsInUseDataSources: (ds: UseDataSource, useDataSources: ImmutableArray<UseDataSource>) => boolean;
export declare const isDsInDatasources: (datasource: UseDataSource, datasources: UseDataSource[]) => boolean;
/**
 * Check is useDatasource or outputDatasource chenged in widgeJson
*/
export declare const checkIsWidgetJsonDsChanged: (widgetJson: IMWidgetJson, useDataSource: UseDataSource[], outputDatasource: string[]) => boolean;
/**
 * Get congfig id list
*/
export declare const getConfigIdList: (datasourceConfig: SearchDataConfig[]) => string[];
/**
 * Get new datasource config id
*/
export declare const getNewConfigId: (configIdList: string[]) => string;
export declare const getOutputDataSourceId: (configId: string, widgetId: string) => string;
