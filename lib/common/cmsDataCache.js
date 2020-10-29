"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cmsDataSource_1 = __importDefault(require("./cmsDataSource"));
var cmsData_1 = __importDefault(require("./cmsData"));
var CmsDataCache = /** @class */ (function () {
    function CmsDataCache() {
    }
    CmsDataCache.get = function (assetId) {
        var result = CmsDataCache.data[assetId];
        return result !== null && result !== void 0 ? result : {};
    };
    CmsDataCache.set = function (assetId, data) {
        CmsDataCache.data[assetId] = data;
    };
    CmsDataCache.init = function (staticDataLocation, dynamicDataLocation) {
        if (staticDataLocation === void 0) { staticDataLocation = ""; }
        if (dynamicDataLocation === void 0) { dynamicDataLocation = ""; }
        CmsDataCache.cmsStaticDataLocation = staticDataLocation;
        CmsDataCache.cmsDynamicDataLocation = dynamicDataLocation;
    };
    CmsDataCache.dataSource = new cmsDataSource_1.default();
    CmsDataCache.cmsDynamicDataLocation = '';
    CmsDataCache.cmsStaticDataLocation = '';
    CmsDataCache.cmsComponentName = '';
    CmsDataCache.cmsAssetId = -1;
    CmsDataCache.data = new cmsData_1.default();
    return CmsDataCache;
}());
exports.default = CmsDataCache;
