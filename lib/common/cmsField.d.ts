import { CmsFieldTypes } from './cmsFieldTypes';
import { CmsIndexedField } from './cmsIndexedField';
export default class CmsField extends String {
    cmsFieldName: string;
    cmsFieldType: string;
    value: any;
    cmsIndexedField: string;
    constructor(cmsFieldName: string, cmsFieldType: string | CmsFieldTypes, value: any, cmsIndexedField?: CmsIndexedField);
    [Symbol.toPrimitive](_hint: string): any;
    data(): any;
}
