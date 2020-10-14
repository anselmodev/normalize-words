import TransformType from './TransformType';

type NormalizeType = {
    str: string;
    transformType: TransformType["type"];
    minLength?: number;
    maxLength?: number;
    ignoreByLength?: number;
    removeWords?: string[];
    applyMethod?: Function;
};

type NormalizeTypeValidator = {
    str: string;
    transformType: TransformType["type"];
    minLength?: number;
    maxLength?: number;
};

export { NormalizeType, NormalizeTypeValidator };