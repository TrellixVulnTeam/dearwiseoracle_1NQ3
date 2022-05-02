/// <reference types="react" />
import { React } from 'jimu-core';
import { CollapseProps } from 'jimu-ui';
/**
 * The `SettingCollapse` component props.
 */
export interface SettingCollapseProps extends Omit<CollapseProps, 'ref'> {
    /**
     * The type of this component.
     * @default default
     */
    type?: 'default' | 'primary';
    /**
     * Defines the class name of the component.
     */
    className?: string;
    /**
     * Defines the label size of the component.
     * @default 0
     * @ignore
     */
    level?: 0 | 1;
    /**
     * The left icon displayed before the label.
     */
    leftIcon?: any;
    /**
     * The label displayed in the header of the component.
     */
    label: React.ReactNode;
    /**
     * Whether to show the bottom line.
     * @default false
     */
    bottomLine?: boolean;
    /**
     * Invoked when opening the component.
     */
    onRequestOpen?: () => void;
    /**
     * Invoked when closing the component.
     */
    onRequestClose?: () => void;
    /**
     * The right icon displayed after the label.
     */
    rightIcon?: any;
    /**
     * The actived icon displayed after the label.
     */
    rightActiveIcon?: any;
}
/**
 * The `SettingCollapse` component allows users to show the collapsible panel.
 *
 * ```ts
 * import { SettingCollapse } from 'jimu-ui/advanced/setting-components'
 * ```
 */
export declare const _SettingCollapse: (props: SettingCollapseProps) => JSX.Element;
/**
 * The `SettingCollapse` component allows users to show the collapsible panel.
 *
 * ```ts
 * import { SettingCollapse } from 'jimu-ui/advanced/setting-components'
 * ```
 */
export declare const SettingCollapse: import("@emotion/styled").StyledComponent<SettingCollapseProps, {}, {}>;
/**
 * The `UnControlledSettingCollapse` component props.
 */
export interface UnControlledSettingCollapseProps extends Omit<SettingCollapseProps, 'isOpen' | 'onRequestOpen' | 'onRequestClose'> {
    /**
     * The default open state of the component.
     */
    defaultIsOpen?: boolean;
}
/**
 * The `UnControlledSettingCollapse` is an uncontrolled component which allows users to show the collapsible panel.
 *
 * ```ts
 * import { UnControlledSettingCollapse } from 'jimu-ui/advanced/setting-components'
 * ```
 */
export declare const UnControlledSettingCollapse: (props: UnControlledSettingCollapseProps) => JSX.Element;
