"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cmsDataCache_1 = __importDefault(require("../common/cmsDataCache"));
var cmsIndexedField_1 = require("./cmsIndexedField");
var CmsField = /** @class */ (function (_super) {
    __extends(CmsField, _super);
    function CmsField(cmsFieldName, cmsFieldType, value, cmsIndexedField) {
        if (cmsIndexedField === void 0) { cmsIndexedField = cmsIndexedField_1.CmsIndexedField.NONE; }
        var _this = _super.call(this) || this;
        _this.cmsFieldName = cmsFieldName;
        _this.cmsFieldType = cmsFieldType;
        _this.value = value;
        _this.cmsIndexedField = cmsIndexedField;
        var handler = {
            get: function (target, prop) {
                if (typeof prop !== "string")
                    return target[prop];
                if (prop in target)
                    return target[prop];
                if (prop === "$$typeof")
                    return undefined; // React uses this to determine if this is a React component or not
                if (prop === "_isVue")
                    return undefined; // Vue.js uses this to determine if this is a Vue.js component or not
                return target.data()[prop];
            }
        };
        if (typeof Proxy !== "undefined")
            return new Proxy(_this, handler);
        return _this;
    }
    CmsField.prototype[Symbol.toPrimitive] = function (_hint) {
        return this.data();
    };
    CmsField.prototype.data = function () {
        if (typeof (this.value) !== "undefined"
            && this.value !== null
            && !(typeof (this.value) === "number" && isNaN(this.value)))
            return this.value;
        var dataSource = cmsDataCache_1.default.dataSource;
        if (dataSource) {
            if (Array.isArray(dataSource)) {
                var index = dataSource.index;
                if (dataSource[index])
                    return dataSource[index][this.cmsFieldName];
            }
            if (dataSource)
                return dataSource[this.cmsFieldName];
        }
        return this.cmsFieldName;
    };
    return CmsField;
}(String));
exports.default = CmsField;
