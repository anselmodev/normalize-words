import {NormalizeTypeValidator} from '../types/NormalizeType';

const stringValidator = (
    {str, transformType, minLength, maxLength, removeCharacters}: NormalizeTypeValidator
) => {
    if (!str || !str.length) {
        throw new Error('[str]: A string is required to apply normalization!');
    }

    if (!transformType || !transformType.length) {
        throw new Error('[transformType]: The normalization type of the string is required!');
    }

    if (
        transformType !== 'toUpper' && transformType !== 'toLower' && transformType !== 'toFirst' && transformType !== 'toFirstAll'
    ) {
        throw new Error('[transformType]: Invalid normalization type!');
    }

    if (minLength && str.length < minLength) {
        throw new Error(`[minLength]: A minimum of ${minLength} characters is required!`);
    }

    if (maxLength && str.length > maxLength) {
        throw new Error(`[maxLength]: A maximum of ${maxLength} characters is required!`);
    }

    if(removeCharacters && removeCharacters.length < 1) {

        throw new Error(`[removeCharacters]: The characters list cannot be empty!`);

    } else if(removeCharacters && removeCharacters.length >= 1) {

        removeCharacters.map((char, index) => {
            if(!char.length) {
                throw new Error(`[removeCharacters]: One character is missing from the index [${index}]!`);
            }

            else if(char.length > 1) {
                throw new Error(`[removeCharacters]: It is mandatory to define only 1 character to remove from the string!`);
            }
        });

    }
}

export default stringValidator;