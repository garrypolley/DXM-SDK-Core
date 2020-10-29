import { ICmsDataProvider } from './ICmsDataProvider';
export default class CmsNullDataProvider implements ICmsDataProvider {
    getSingleAsset(assetId: number): void;
}
