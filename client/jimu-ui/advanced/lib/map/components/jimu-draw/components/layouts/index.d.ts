/// <reference types="react" />
/** @jsx jsx */
import { React, jsx } from 'jimu-core';
import { JimuMapView } from 'jimu-arcgis';
export declare enum Arrangement {
    Panel = "Panel",
    Toolbar = "Toolbar",
    Hidden = "Hidden"
}
export interface LayoutProps {
    jimuMapView: JimuMapView;
    arrangement: Arrangement;
}
export declare const Layout: React.MemoExoticComponent<(props: LayoutProps) => jsx.JSX.Element>;
