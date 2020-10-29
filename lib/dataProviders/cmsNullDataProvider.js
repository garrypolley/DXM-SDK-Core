"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cmsDataCache_1 = __importDefault(require("../common/cmsDataCache"));
var CmsNullDataProvider = /** @class */ (function () {
    function CmsNullDataProvider() {
    }
    CmsNullDataProvider.prototype.getSingleAsset = function (assetId) {
        cmsDataCache_1.default.set(assetId, {});
    };
    return CmsNullDataProvider;
}());
exports.default = CmsNullDataProvider;
