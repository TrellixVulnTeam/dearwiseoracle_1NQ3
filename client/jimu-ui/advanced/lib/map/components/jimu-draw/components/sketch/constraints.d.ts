export declare enum CreatToolActions {
    Point = "point",
    Polyline = "polyline",
    Polygon = "polygon",
    Rectangle = "rectangle",
    Circle = "circle"
}
export declare enum SelectToolActions {
    RectangleSelection = "rectangle-selection",
    LassoSelection = "lasso-selection"
}
export declare enum DrawingElevationMode3D {
    RelativeToGround = "relative-to-ground",
    OnTheGround = "on-the-ground"
}
export declare enum JimuDrawCreationMode {
    Single = "single",
    Continuous = "continuous",
    Update = "update"
}
export declare type JimuDrawGraphicsEditedTypes = 'deleted' | 'modified' | 'complete' | 'aborted';
export interface JimuDrawCompleteDescriptor {
    sketch: __esri.Sketch;
    graphicsLayer: __esri.GraphicsLayer;
    complete: () => Promise<void>;
}
