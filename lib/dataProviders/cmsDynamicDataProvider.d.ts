import { ICmsDataProvider } from './ICmsDataProvider';
export default class CmsDynamicDataProvider implements ICmsDataProvider {
    private _getData;
    getSingleAsset(assetId: number): Promise<void>;
    getDynamicQuery(query: string): Promise<any>;
}
