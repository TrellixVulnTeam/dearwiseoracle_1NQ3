/// <reference types="react" />
import { React } from 'jimu-core';
import { WebChart, ChartInstance, ChartEvents, ChartOptions, WebChartDataSources } from 'arcgis-charts';
import { GlobalOptions } from './type';
export interface ChartCoreEvents {
    [ChartEvents.DataProcessComplete]?: (event: CustomEventInit) => void;
    [ChartEvents.LegendItemVisibilityChange]?: (event: CustomEventInit) => void;
    [ChartEvents.UpdateComplete]?: (event: CustomEventInit) => void;
    [ChartEvents.RenderingComplete]?: (event: CustomEventInit) => void;
    [ChartEvents.SelectionChange]?: (event: CustomEventInit) => void;
    [ChartEvents.SeriesColorsChange]?: (event: CustomEventInit) => void;
    [ChartEvents.AxesMinMaxChange]?: (event: CustomEventInit) => void;
    [ChartEvents.SelectionComplete]?: (event: CustomEventInit) => void;
    [ChartEvents.TooManySelectedElements]?: (event: CustomEventInit) => void;
    [ChartEvents.BadDataWarningRaise]?: (event: CustomEventInit) => void;
}
export declare type ChartCoreProps = React.HtmlHTMLAttributes<HTMLDivElement> & ChartCoreEvents & {
    config: WebChart;
    dataVersion: number;
    options?: ChartOptions;
    globalOptions?: GlobalOptions;
};
/**
 * Checks whether the information necessary to use the inline data is provided
 * @param inlineData
 * @param dataSource
 */
export declare function isInlineDataDefined(dataSource?: WebChartDataSources): boolean;
declare const ChartCore: React.ForwardRefExoticComponent<React.HtmlHTMLAttributes<HTMLDivElement> & ChartCoreEvents & {
    config: WebChart;
    dataVersion: number;
    options?: ChartOptions;
    globalOptions?: GlobalOptions;
} & React.RefAttributes<ChartInstance>>;
export { ChartCore };
