import {NormalizeTypeValidator} from '../types/normalizeType';

const stringValidator = (
    {str, transformType, minLength, maxLength}: NormalizeTypeValidator
) => {
    if (!str || !str.length) {
        throw new Error('A string is required to apply normalization!');
    }

    if (!transformType || !transformType.length) {
        throw new Error('The normalization type of the string is required!');
    }

    if (
        transformType !== 'toUpper' && transformType !== 'toLower' && transformType !== 'toFirst' && transformType !== 'toFirstAll'
    ) {
        throw new Error('Invalid normalization type!');
    }

    if (minLength && str.length < minLength) {
        throw new Error(`A minimum of ${minLength} characters is required!`);
    }

    if (maxLength && str.length > maxLength) {
        throw new Error(`A maximum of ${maxLength} characters is required!`);
    }
}

export default stringValidator;