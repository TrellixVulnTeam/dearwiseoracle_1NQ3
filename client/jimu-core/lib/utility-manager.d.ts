import { UseUtility, UtilityJson } from './types/app-config';
import { Utility } from './types/utility';
export declare class UtilityManager {
    private static instance;
    static getInstance(): UtilityManager;
    constructor();
    private utilities;
    private portalUtilitiesPromise;
    private onStoreChange;
    getLabelOfUseUtility(useUtility: UseUtility): string;
    /**
     * Return null if org utility is not in appConfig
     * @param name
     * @param url
     * @param index
     * @returns
     */
    getIdOfOrgUtility(name: string, url: string, index?: number, taskName?: string): string;
    isUtilityUsed(utilityId: string): boolean;
    getUtilityJson(utilityId: string): UtilityJson;
    getUtilityFromJson(uJson: UtilityJson): Promise<Utility>;
    getUtility(utilityId: string): Promise<Utility>;
    private createUtilityOfItem;
}
/**
 * @ignore
 */
export default UtilityManager;
