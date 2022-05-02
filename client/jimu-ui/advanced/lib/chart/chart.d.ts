/// <reference types="react" />
import { React, ImmutableObject } from 'jimu-core';
import { ChartCoreProps } from './core';
import { ChartInstance, WebChart, WebChartDataItem } from 'arcgis-charts';
export interface ChartInlineData {
    items: WebChartDataItem[];
    version: number;
}
export interface ChartProps extends Omit<ChartCoreProps, 'config' | 'dataVersion'> {
    config: WebChart | ImmutableObject<WebChart>;
    /**
     * Selected data points needed to be selecting the chart elements.
     */
    selectedDataItems?: WebChartDataItem[];
    /**
     * Inline Data Source of the chart
     */
    data?: ChartInlineData;
}
declare const Chart: React.MemoExoticComponent<React.ForwardRefExoticComponent<ChartProps & React.RefAttributes<ChartInstance>>>;
export { Chart };
