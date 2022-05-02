/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, IntlShape, ThemeVariables } from 'jimu-core';
import { JimuMapView } from 'jimu-arcgis';
import { /*JimuSymbolType, JimuSymbol,*/ JimuPointSymbol, JimuPolylineSymbol, JimuPolygonSymbol } from 'jimu-ui/advanced/map';
import { Arrangement } from './components/layouts';
import { JimuDrawingOptions, JimuDrawCompleteDescriptor, JimuDrawGraphicsEditedTypes, JimuSymbolsGroup } from './components/sketch';
import { MeasurementsPropsInfo, MeasurementsUnitsInfo } from './components/measurements/constraints';
export interface JimuDrawProps {
    jimuMapView: JimuMapView;
    theme: ThemeVariables;
    intl: IntlShape;
    isDisplayCanvasLayer?: boolean;
    arrangement?: Arrangement;
    drawingOptions: JimuDrawingOptions;
    measurementsInfo?: MeasurementsPropsInfo;
    measurementsUnitsInfos?: MeasurementsUnitsInfo[];
    disableSymbolSelector?: boolean;
    defaultSymbols?: JimuSymbolsGroup;
    onPointSymbolChanged?: (symbol: JimuPointSymbol) => void;
    onPolylineSymbolChanged?: (symbol: JimuPolylineSymbol) => void;
    onPolygonSymbolChanged?: (symbol: JimuPolygonSymbol) => void;
    onDrawCreated?: (jimuDraw: JimuDrawCompleteDescriptor) => void;
    onDrawActived?: (drawingMode: string) => void;
    onDrawCleared?: () => void;
    onDrawStart?: () => void;
    onDrawCancel?: () => void;
    onDrawEnd?: (graphic: __esri.Graphic) => void;
    onGraphicsEdited?: (result: {
        type: JimuDrawGraphicsEditedTypes;
        graphics: __esri.Graphic[];
        layer: __esri.GraphicsLayer;
    }) => void;
}
export declare const ContextsBridge: React.MemoExoticComponent<(props: JimuDrawProps) => jsx.JSX.Element>;
