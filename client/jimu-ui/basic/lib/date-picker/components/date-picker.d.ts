/// <reference types="react" />
/** @jsx jsx */
import { React, IntlShape, dateUtils, EsriDateFormats } from 'jimu-core';
import { PositioningStrategy } from 'jimu-ui';
import 'react-datepicker/dist/react-datepicker.css';
/**
* DatePicker properties
*/
export interface DatePickerProps {
    /**
     * To provide a label for interactive components for accessibility purposes.
     */
    'aria-label'?: string;
    /**
     * `aria-describedby` is used to indicate the IDs of the elements that describe the component.
     * It is for accessibility purposes.
     */
    'aria-describedby'?: string;
    /**
     * Selected date by default
     */
    selectedDate: Date | dateUtils.VirtualDateType;
    /**
     * whether a UTC date.
     */
    isUTCDate?: boolean;
    /**
     * @ignore
     */
    format?: EsriDateFormats | string;
    /**
     * Different design for setting and runtime.
     * true: two months shown, has today button,
     * false: one month shown, no today button.
     */
    runtime: boolean;
    /**
     * Displayed virtual dates at runtime.
     * Renamed to virtualDateListForRuntime
     * @deprecated
     */
    dateRangeList?: dateUtils.VirtualDateType[];
    /**
     * Displayed virtual date list at runtime.
     * Only support today by now.
     * @default VIRTUAL_DATE_FOR_RUNTIME
     * @ignore
     */
    virtualDateListForRuntime?: dateUtils.VirtualDateType[];
    /**
     * Displayed virtual date list shown for setting.
     * @default VIRTUAL_DATE_FOR_SETTING
     */
    virtualDateListForSetting?: dateUtils.VirtualDateType[];
    /**
     * Hide empty button for setting.
     * @default false
     */
    hideEmpty?: boolean;
    onChange: (value: number | dateUtils.VirtualDateType, label: string) => void;
    /**
    * Whether display time input on datepicker component
    */
    showTimeInput?: boolean;
    /**
    * Whether display a long time format.
    */
    isTimeLong?: boolean;
    /**
    * @ignore
    */
    isClearable?: boolean;
    /**
     * Whether to support virtual date list for setting.
     * See virtualDateListForSetting instead.
     * @deprecated
     */
    supportVirtualDateList?: boolean;
    /**
    * Whether keep calendar when select one date.
    */
    keepCalendarOnSelect?: boolean;
    /**
    * Whether display a Done button.
    */
    hasDoneButton?: boolean;
    /**
     * Disable the portal behavior. The children stay within it's parent DOM hierarchy
     * if `false`, The children will be put to document.body
     * @default false
     */
    disablePortal: boolean;
    /**
     * Describes the positioning strategy to use. By default, it is absolute,
     * which in the simplest cases does not require repositioning of the popper
     * If your reference element is in a fixed container, use the fixed strategy
     * @default 'absolute'
     */
    strategy?: PositioningStrategy;
    className?: string;
    style?: React.CSSProperties;
}
interface IntlProps {
    intl: IntlShape;
}
/**
* A date time picker component that allow user to pick or type a date/time.
*/
export declare const DatePicker: import("@emotion/styled").StyledComponent<Omit<DatePickerProps & IntlProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}, {}, {}>;
export {};
