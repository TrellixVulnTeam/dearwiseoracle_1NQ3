/// <reference types="react" />
import { React } from 'jimu-core';
import { JimuDrawCompleteDescriptor, CreatToolActions, SelectToolActions } from '../sketch-adapter';
import { JimuDrawCreationMode, JimuDrawGraphicsEditedTypes, DrawingElevationMode3D } from '..';
export interface JimuDrawingOptions {
    creationMode?: JimuDrawCreationMode;
    drawingElevationMode3D?: DrawingElevationMode3D;
    visibleElements?: __esri.SketchVisibleElements;
    snappingOptions?: __esri.SnappingOptionsProperties;
    updateOnGraphicClick?: boolean;
    defaultCreateOptions?: __esri.SketchViewModelDefaultCreateOptions;
    defaultUpdateOptions?: __esri.SketchViewModelDefaultUpdateOptions;
}
export interface SketchCallBacks {
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
export interface SketchContextStates {
    sketchRef: __esri.Sketch;
    graphicsLayerRef: __esri.GraphicsLayer;
    completeDrawFunRef: () => Promise<void>;
    isDisplayCanvasLayer: boolean;
    activeTool: CreatToolActions | SelectToolActions;
    drawingOptions: JimuDrawingOptions;
    callBacks: SketchCallBacks;
}
interface SketchContexAction {
    type: string;
    payload: any;
}
export declare const actionType: {
    SketchChanged: string;
    IsDisplayCanvasLayerChanged: string;
    ActiveToolChanged: string;
    DrawingOptionsChanged: string;
    CallBacksChanged: string;
};
export declare const SketchChangedAction: (jimuDrawCompleteDescriptor: JimuDrawCompleteDescriptor) => {
    type: string;
    payload: JimuDrawCompleteDescriptor;
};
export declare const IsDisplayCanvasLayerChangedAction: (isDisplayCanvasLayer: boolean) => {
    type: string;
    payload: boolean;
};
export declare const ActiveToolChangedAction: (mode: CreatToolActions) => {
    type: string;
    payload: CreatToolActions;
};
export declare const DrawingOptionsChangedAction: (drawingOptions: JimuDrawingOptions) => {
    type: string;
    payload: JimuDrawingOptions;
};
export declare const CallBacksChangedAction: (callBacks: SketchCallBacks) => {
    type: string;
    payload: SketchCallBacks;
};
export declare const init: (initStates: any) => SketchContextStates;
export declare const reducer: (state: SketchContextStates, action: SketchContexAction) => {
    isDisplayCanvasLayer: any;
    sketchRef: __esri.Sketch;
    graphicsLayerRef: __esri.GraphicsLayer;
    completeDrawFunRef: () => Promise<void>;
    activeTool: CreatToolActions | SelectToolActions;
    drawingOptions: JimuDrawingOptions;
    callBacks: SketchCallBacks;
} | {
    activeTool: any;
    sketchRef: __esri.Sketch;
    graphicsLayerRef: __esri.GraphicsLayer;
    completeDrawFunRef: () => Promise<void>;
    isDisplayCanvasLayer: boolean;
    drawingOptions: JimuDrawingOptions;
    callBacks: SketchCallBacks;
} | {
    drawingOptions: any;
    sketchRef: __esri.Sketch;
    graphicsLayerRef: __esri.GraphicsLayer;
    completeDrawFunRef: () => Promise<void>;
    isDisplayCanvasLayer: boolean;
    activeTool: CreatToolActions | SelectToolActions;
    callBacks: SketchCallBacks;
} | {
    callBacks: any;
    sketchRef: __esri.Sketch;
    graphicsLayerRef: __esri.GraphicsLayer;
    completeDrawFunRef: () => Promise<void>;
    isDisplayCanvasLayer: boolean;
    activeTool: CreatToolActions | SelectToolActions;
    drawingOptions: JimuDrawingOptions;
};
export declare const SketchContext: React.Context<{
    sketchContextStates: SketchContextStates;
    dispatchSketchActions: React.Dispatch<SketchContexAction>;
}>;
export declare const SketchContextProvider: (props: any) => JSX.Element;
export {};
