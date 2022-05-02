/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, ThemeVariables } from 'jimu-core';
import { JimuPointSymbol, JimuPolylineSymbol, JimuPolygonSymbol, JimuSymbol, JimuSymbolType, DrawingElevationMode3D } from 'jimu-ui/advanced/map';
import { JimuMapView } from 'jimu-arcgis';
import { CreatToolActions, JimuDrawCompleteDescriptor, JimuDrawGraphicsEditedTypes } from '../constraints';
import { JimuDrawCreationMode, JimuSymbolsGroup } from '../';
import { Arrangement } from '../../layouts';
import { MeasurementsRuntimeInfo } from '../../measurements/constraints';
export interface SketchAPIProps {
    jimuMapView: JimuMapView;
    isDisplayCanvasLayer: boolean;
    theme: ThemeVariables;
    creationMode?: JimuDrawCreationMode;
    visibleElements?: __esri.SketchVisibleElements;
    updateOnGraphicClick?: boolean;
    defaultCreateOptions?: __esri.SketchViewModelDefaultCreateOptions;
    defaultUpdateOptions?: __esri.SketchViewModelDefaultUpdateOptions;
    snappingOptions?: __esri.SnappingOptionsProperties;
    elevationInfo?: DrawingElevationMode3D;
    disableSymbolSelector?: boolean;
    defaultSymbols?: JimuSymbolsGroup;
    pointSymbol?: JimuPointSymbol;
    polylineSymbol?: JimuPolylineSymbol;
    polygonSymbol?: JimuPolygonSymbol;
    onDrawCreated?: (drawTool: JimuDrawCompleteDescriptor) => void;
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
    currentSymbolChanged: (symbol: JimuSymbol) => void;
    currentSymbolTypeChanged: (jimuSymbolType: JimuSymbolType) => void;
    currentActiveToolChanged: (type: CreatToolActions) => void;
    arrangement: Arrangement;
    currentActiveBtnChanged: (ref: Element) => void;
    isExpandSymbolList: boolean;
    setIsExpandSymbolList: (isExpand: boolean) => void;
    measurementsRuntimeInfo: MeasurementsRuntimeInfo;
}
export declare const SketchAPI: React.MemoExoticComponent<(props: SketchAPIProps) => jsx.JSX.Element>;
