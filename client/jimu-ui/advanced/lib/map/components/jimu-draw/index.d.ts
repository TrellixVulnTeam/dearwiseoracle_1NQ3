/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, IntlShape, ThemeVariables } from 'jimu-core';
import type { JimuDrawProps } from './contexts-bridge';
import { Arrangement } from './components/layouts';
import { JimuDrawCreationMode, DrawingElevationMode3D } from './components/sketch';
import type { JimuDrawingOptions } from './components/sketch';
import { useMeasurementsUnitsInfos } from './components/measurements';
import type { MeasurementsUnitsInfo, MeasurementsPropsInfo } from './components/measurements';
export { JimuDrawProps, JimuDrawingOptions, JimuDrawCreationMode, Arrangement, DrawingElevationMode3D, useMeasurementsUnitsInfos };
export type { MeasurementsPropsInfo, MeasurementsUnitsInfo };
interface ExtraProps {
    theme: ThemeVariables;
    intl: IntlShape;
}
export declare const _JimuDraw: React.MemoExoticComponent<(props: JimuDrawProps & ExtraProps) => jsx.JSX.Element>;
export declare const JimuDraw: React.FC<import("react-intl").WithIntlProps<Pick<JimuDrawProps & ExtraProps, "arrangement" | "intl" | "onPointSymbolChanged" | "onPolylineSymbolChanged" | "onPolygonSymbolChanged" | "jimuMapView" | "disableSymbolSelector" | "onDrawStart" | "onDrawCancel" | "onDrawEnd" | "isDisplayCanvasLayer" | "drawingOptions" | "measurementsInfo" | "measurementsUnitsInfos" | "defaultSymbols" | "onDrawCreated" | "onDrawActived" | "onDrawCleared" | "onGraphicsEdited"> & {
    theme?: import("jimu-core").IMThemeVariables;
}>> & {
    WrappedComponent: React.ComponentType<Pick<JimuDrawProps & ExtraProps, "arrangement" | "intl" | "onPointSymbolChanged" | "onPolylineSymbolChanged" | "onPolygonSymbolChanged" | "jimuMapView" | "disableSymbolSelector" | "onDrawStart" | "onDrawCancel" | "onDrawEnd" | "isDisplayCanvasLayer" | "drawingOptions" | "measurementsInfo" | "measurementsUnitsInfos" | "defaultSymbols" | "onDrawCreated" | "onDrawActived" | "onDrawCleared" | "onGraphicsEdited"> & {
        theme?: import("jimu-core").IMThemeVariables;
    }>;
};
