import {NormalizeType} from './types/NormalizeType';
import stringValidator from './validators/string.validator';
import removeWordsFromArray from './utils/removeWords.util';
import removeChar from "./utils/removeCharacters.util";
import transformWords from "./utils/transform-words.util";

/**
 * Normalize Words from the String
 * @param {object} options - Normalize String
 * @param {string} options.str - Original String to normalize.
 * @param {TransformType} options.transformType - String normalization type: 'toUpper' | 'toLower' | 'toFirst' | 'toFirstAll'
 * @param {number} options.minLength -Optional  Minimum characters for normalization.
 * @param {number} options.maxLength - Optional Maximum characters for normalization.
 * @param {number} options.ignoreByLength - Optional Do not normalize words with size from...
 * @param {string[]} options.removeWords - Optional Remove specific words from the string.
 * @param {string[]} options.removeCharacters - Optional Remove specific character from the string.
 * @param {function} options.applyMethod - Optional Function to string treatment.
 * @return {string} - Returns Normalized String Result.
 */
export const normalizeWords = (
    {str, transformType, minLength, maxLength, ignoreByLength, removeWords, removeCharacters, applyMethod}: NormalizeType
): string => {

    stringValidator({str, minLength, maxLength, transformType, removeCharacters});

    const ignoreByLen = ignoreByLength || 0;
    let resultNormalization: string[] = [];
    let getWords: string[] = str.split(' ');


    if (removeWords && removeWords.length >= 1) {
        getWords = removeWordsFromArray(removeWords, getWords);
    }

    if (removeCharacters && removeCharacters.length >= 1) {
        getWords = removeChar(removeCharacters, getWords);
    }

    const filterResults: string[] = getWords.filter((el) => el !== null && el !== '' && el !== undefined);

    filterResults.map((word, indx) => {
        if (transformType === 'toFirst') {
            resultNormalization.push(
                indx !== 0 ? transformWords(word, 'toLower') : transformWords(word, transformType)
            );
        }
        // @ts-ignore
        else if (transformType === 'toFirstAll') {
            resultNormalization.push(
                word.length > ignoreByLen ? transformWords(word, 'toFirst') : word
            );
        } else {
            resultNormalization.push(
                transformWords(word, transformType)
            );
        }
    });

    if(applyMethod) {
        return applyMethod(resultNormalization.join(' '));
    } else {
        return resultNormalization.join(' ');
    }
}
