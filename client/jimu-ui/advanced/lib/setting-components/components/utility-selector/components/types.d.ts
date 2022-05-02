export interface UtilityTreeItem {
    id: string;
    label: string;
    type: string;
    name?: string;
    index?: number;
    url?: string;
    rootId?: string;
    task?: string;
    children?: UtilityTreeItem[];
}
export declare const predefinedOrgUtilities: ({
    name: string;
    label: string;
    children?: undefined;
    dynamic?: undefined;
} | {
    label: string;
    children: {
        name: string;
        label: string;
    }[];
    name?: undefined;
    dynamic?: undefined;
} | {
    name: string;
    label: string;
    dynamic: boolean;
    children?: undefined;
})[];
