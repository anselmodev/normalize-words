import TransformType from '../types/TransformType';
import CapitalizeWords from './captalize-words.util';

const transformWords = (word: string, type: TransformType["type"] ): any => {
    switch (type) {
        case 'toUpper':
            return word.toUpperCase();

        case 'toLower':
            return word.toLowerCase();

        case 'toFirst':
            return CapitalizeWords.set(word.toLowerCase());

        default:
    }
}

export default transformWords;