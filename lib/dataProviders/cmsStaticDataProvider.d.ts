import { ICmsDataProvider } from './ICmsDataProvider';
export default class CmsStaticDataProvider implements ICmsDataProvider {
    private _getData;
    getSingleAsset(assetId: number): Promise<void>;
    getCustomData(filename: string): Promise<any>;
}
