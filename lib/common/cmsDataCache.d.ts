import CmsDataSource from './cmsDataSource';
export default class CmsDataCache {
    static dataSource: CmsDataSource;
    static cmsDynamicDataLocation: string;
    static cmsStaticDataLocation: string;
    static cmsComponentName: string;
    static cmsAssetId: number;
    private static data;
    static get(assetId: number): any;
    static set(assetId: number, data: any): void;
    static init(staticDataLocation?: string, dynamicDataLocation?: string): void;
}
