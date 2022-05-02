/** @jsx jsx */
import { jsx, UseUtility, ImmutableArray } from 'jimu-core';
interface Props {
    isMultiple?: boolean;
    useUtilities?: ImmutableArray<UseUtility>;
    onChange?: (utilities: ImmutableArray<UseUtility>) => void;
}
export declare function UtilitySelector(props: Props): jsx.JSX.Element;
export {};
