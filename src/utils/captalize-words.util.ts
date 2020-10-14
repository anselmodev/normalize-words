/** Capitalize words*/
export default class CapitalizeWords {

    /**
     * Set first word capitalize
     * @param {string} value
     * @return {string} First word capitalized.
     */
    static set(value: string): string {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}

