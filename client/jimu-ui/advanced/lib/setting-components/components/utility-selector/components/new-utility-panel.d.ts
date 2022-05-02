/** @jsx jsx */
import { jsx, ImmutableObject, UtilitiesJson } from 'jimu-core';
interface Props {
    utilities: ImmutableObject<UtilitiesJson>;
    onDoneClick: () => void;
}
export declare function NewUtilityPanel(props: Props): jsx.JSX.Element;
export {};
