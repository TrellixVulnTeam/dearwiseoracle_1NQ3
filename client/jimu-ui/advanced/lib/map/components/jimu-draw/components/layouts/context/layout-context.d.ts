/// <reference types="react" />
import { React, IntlShape, ThemeVariables } from 'jimu-core';
import { Arrangement } from '..';
export interface LayoutContextStates {
    theme: ThemeVariables;
    intl: IntlShape;
    arrangement: Arrangement;
    disableSymbolSelector: boolean;
    isExpandSymbolList: boolean;
    symbolsWapperPositionRef: Element;
}
interface LayoutContexAction {
    type: string;
    payload: any;
}
export declare const actionType: {
    ThemeChanged: string;
    ArrangementChanged: string;
    DisableSymbolSelectorChanged: string;
    IsExpandSymbolListChanged: string;
    SymbolsWapperPositionRefChanged: string;
};
export declare const ThemeChangedAction: ({ theme, intl }: {
    theme: ThemeVariables;
    intl: IntlShape;
}) => {
    type: string;
    payload: {
        theme: ThemeVariables;
        intl: IntlShape;
    };
};
export declare const ArrangementChangedAction: (arrangement: Arrangement) => {
    type: string;
    payload: Arrangement;
};
export declare const DisableSymbolSelectorChangedAction: (disableSymbolSelector: boolean) => {
    type: string;
    payload: boolean;
};
export declare const IsExpandSymbolListChangedAction: (isExpand: boolean) => {
    type: string;
    payload: boolean;
};
export declare const SymbolsWapperPositionRefChangedAction: (ref: Element) => {
    type: string;
    payload: Element;
};
export declare const init: (initStates: any) => LayoutContextStates;
export declare const reducer: (state: LayoutContextStates, action: LayoutContexAction) => {
    theme: any;
    intl: any;
    arrangement: Arrangement;
    disableSymbolSelector: boolean;
    isExpandSymbolList: boolean;
    symbolsWapperPositionRef: Element;
} | {
    isExpandSymbolList: boolean;
    arrangement: any;
    theme: ThemeVariables;
    intl: IntlShape;
    disableSymbolSelector: boolean;
    symbolsWapperPositionRef: Element;
} | {
    disableSymbolSelector: any;
    theme: ThemeVariables;
    intl: IntlShape;
    arrangement: Arrangement;
    isExpandSymbolList: boolean;
    symbolsWapperPositionRef: Element;
} | {
    isExpandSymbolList: any;
    theme: ThemeVariables;
    intl: IntlShape;
    arrangement: Arrangement;
    disableSymbolSelector: boolean;
    symbolsWapperPositionRef: Element;
} | {
    symbolsWapperPositionRef: any;
    theme: ThemeVariables;
    intl: IntlShape;
    arrangement: Arrangement;
    disableSymbolSelector: boolean;
    isExpandSymbolList: boolean;
};
export declare const LayoutContext: React.Context<{
    layoutContextStates: LayoutContextStates;
    dispatchLayoutActions: React.Dispatch<LayoutContexAction>;
}>;
export declare const LayoutContextProvider: (props: any) => JSX.Element;
export {};
