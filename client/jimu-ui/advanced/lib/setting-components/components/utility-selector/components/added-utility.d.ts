/** @jsx jsx */
import { jsx, UtilitiesJson, UseUtility, ImmutableObject, ImmutableArray } from 'jimu-core';
interface Props {
    keyword: string;
    serviceType: string;
    isMultiple: boolean;
    utilities: ImmutableObject<UtilitiesJson>;
    useUtilities?: ImmutableArray<UseUtility>;
    onChange?: (utilities: ImmutableArray<UseUtility>) => void;
}
export declare function AddedUtilityTree(props: Props): jsx.JSX.Element;
export {};
