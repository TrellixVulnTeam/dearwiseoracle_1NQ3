/** @jsx jsx */
import { jsx, IMUtilitiesJson } from 'jimu-core';
interface Props {
    utilities: IMUtilitiesJson;
    onChange: (utilities: IMUtilitiesJson) => void;
    isMultiple?: boolean;
}
export declare function AddUtilityTabs(props: Props): jsx.JSX.Element;
export {};
