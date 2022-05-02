/** @jsx jsx */
import { jsx, UseUtility, ImmutableArray } from 'jimu-core';
interface Props {
    keyword: string;
    serviceType: string;
    isMultiple: boolean;
    useUtilities?: ImmutableArray<UseUtility>;
    onChange?: (utilities: ImmutableArray<UseUtility>) => void;
}
export declare function OrgUtilityTree(props: Props): jsx.JSX.Element;
export {};
