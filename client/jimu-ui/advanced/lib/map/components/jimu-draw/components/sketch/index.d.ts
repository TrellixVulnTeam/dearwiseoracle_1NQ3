/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, ThemeVariables } from 'jimu-core';
import { JimuMapView } from 'jimu-arcgis';
import { JimuDrawingOptions } from './context/sketch-context';
import { JimuSymbolsGroup } from '../symbols/context/symbol-context';
import { JimuDrawCompleteDescriptor, JimuDrawGraphicsEditedTypes } from './sketch-adapter';
import { JimuDrawCreationMode, DrawingElevationMode3D } from './constraints';
export type { JimuDrawCompleteDescriptor, JimuDrawingOptions, JimuDrawGraphicsEditedTypes, JimuSymbolsGroup };
export { JimuDrawCreationMode, DrawingElevationMode3D };
export interface JimuSketchProps {
    className?: string;
    jimuMapView: JimuMapView;
    theme?: ThemeVariables;
    onDrawCreated?: (drawTool: JimuDrawCompleteDescriptor) => void;
    onDrawActived?: (drawingMode: string) => void;
    onDrawCleared?: () => void;
    onDrawStart?: () => void;
    onDrawCancel?: () => void;
    onDrawEnd?: (graphic: __esri.Graphic) => void;
    onGraphicsEdited?: (result: {
        type: JimuDrawGraphicsEditedTypes;
        graphic: __esri.Graphic;
        layer: __esri.GraphicsLayer;
    }) => void;
}
export declare const Sketch: React.MemoExoticComponent<(props: JimuSketchProps) => jsx.JSX.Element>;
