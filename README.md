<p align="center">
  <img src="./normalize-logo.jpg" alt="Normalize Words from String" title="Normalize Words"/>
</p>

<h1 align="center">normalize-words</h1>

## Features

* Automatic removal of spaces and tabs.
* Normalization of words with options: `UPPERCASE`, `lowercase`, `Uppercase the first letter of the string`, `First letter of all capitalized words`.
* Set the minimum string length to normalization.
* Set the maximum string size to normalization.
* Do not normalize words with specific length.
* Remove words from the string through a list (array).
* Remove characters from the string through a list (array).
* Enables user customized functions to complement normalization.
* Full Typescript compatibility.

<br>

## API
#### Install with NPM or YARN:
```shell script
$ npm i normalize-words
```
or
```shell script
$ yarn add normalize-words
```

#### Function
* [`normalizeWords()`](#function-normalization)
<br><br>

#### Options {object}
* [`str`](#str-string)
* [`transformType`](#transformtype-toupper--tolower--tofirst--tofirstall)
* [`minLength`](#minlength-number)
* [`maxLength`](#maxlength-number)
* [`ignoreByLength`](#ignorebylength-number)
* [`removeWords`](#removewords-string)
* [`removeCharacters`](#removecharacters-string)
* [`applyMethod`](#applymethod-function)

## Function Normalization
### `normalizeWords(): string`
*Returns the normalized string.*

String normalization with removal spaces and/or words. <br>
This function requires an object with the properties for normalizing the string. <br>

```js
normalizeWords({
  str: 'my cRazY String',
  transformType: 'toFirst'
});
```

## Options
### `str: string`
Original String to normalize. <br>
This property is mandatory for normalization. <br><br>

### `transformType: 'toUpper' | 'toLower' | 'toFirst' | 'toFirstAll'`
This property is mandatory for type of normalization. <br><br>

### `minLength: number`
*(Optional)* <br>

Minimum of characters required for normalization. <br><br>

### `maxLength: number`
*(Optional)* <br>

Maximum character limit accepted for normalization. <br><br>

### `ignoreByLength: number`
*(Optional)* <br>

Do not normalize words with a specific length. <br><br>

### `removeWords: string[]`
*(Optional)* <br>

Removes specific words from the string based on the array list. <br>
> **_NOTE:_**   Words list is not case sensitive.

<br>

### `removeCharacters: string[]`
*(Optional)* <br>

Remove specific characters from the string based on the array list. <br>
> **_NOTE:_**   Words list is not case sensitive. Only one letter per index is allowed.

<br>

### `applyMethod: Function`
*(Optional)* <br>

Any function to perform after normalizing the string. <br>

<br>

## How to use
#### Examples:

* [Basic Usage](#basic-usage)
* [ With "Word" Removal](#with-word-removal)
* [With "Character" Removal](#with-character-removal)
* [With Minimum and Maximum Character Length](#with-minimum-and-maximum-character-length-to-normalize)
* [Do not normalize words with specific length](#do-not-normalize-words-with-specific-length)
* [Optional Function to string treatment](#optional-function-to-string-treatment)
* [Complete example of normalization](#complete-example-of-normalization)
* [Example of normalization with option reuse](#example-of-normalization-with-options-reuse)

<br>

#### Basic Usage: 
[`{ transformType: 'toUpper' | 'toLower' | 'toFirst' | 'toFirstAll' }`](#transformtype-toupper--tolower--tofirst--tofirstall)
``` js
const { normalizeWords } = require('normalize-words');

normalizeWords({
    str: '  my    cRazY String  ',
    transformType: 'toUpper'
});

// Returns: "MY CRAZY STRING"

```

* Basic Typescript example:
``` ts
import { normalizeWords } from 'normalize-words';

normalizeWords({
    str: '  my    cRazY String  ',
    transformType: 'toFirstAll'
});

// Returns: "My Crazy String"

```


#### With "Word" Removal: 
[`{ removeWords: string[] }`](#removecharacters-string)
``` js
const { normalizeWords } = require('normalize-words');

normalizeWords({
    str: '  my    cRazY String  ',
    transformType: 'toUpper',
    removeWords: ['My']
});

// Returns: "CRAZY STRING"

```

#### With "Character" Removal: 
[`{ removeCharacters: string[] }`](#removecharacters-string)
``` js
const { normalizeWords } = require('normalize-words');

normalizeWords({
    str: '  my    cRazY String  !!',
    transformType: 'toUpper',
    removeCharacters: ['m', 'Y', '!']
});

// Returns: "CRAZ STRING"

```

#### With "Minimum and Maximum Character Length" to normalize: 
[`{ minLength: number , maxLength: number }`](#minlength-number)
``` js
const { normalizeWords } = require('normalize-words');

normalizeWords({
    str: 'john pallozo',
    transformType: 'toFirstAll',
    minLength: 5, // String less than 5 characters, will return an error.
    maxLength: 20 // String longer than 20 characters, will return an error.
});

// Returns: "John Pallozo"

```

#### Do not normalize words with specific length:
[`{ ignoreByLength: number }`](#ignorebylength-number)
``` js
const { normalizeWords } = require('normalize-words');

normalizeWords({
    str: 'city of venice is located in italy',
    transformType: 'toFirstAll',
    ignoreByLength: 2
});

// Returns: "City of Venice is Located in Italy"

// Note: The words: "is" and "in" have not been normalized.

```

#### Optional Function to string treatment:
[`{ applyMethod: Function }`](#applymethod-function)
``` js
const { normalizeWords } = require('normalize-words');

normalizeWords({
    str: 'john pallozo',
    transformType: 'toFirstAll',
    applyMethod: (normalizedString) => {
        return normalizedString + ' - Full Stack Developer.';
    }
});

// Returns: "John Pallozo - Full Stack Developer."

// Note: The parameter "normalizedString" in the fuction is mandatory because 
//       it contains the "Normalized String" previously.

```

- Another example with Typescript:
``` ts
import { normalizeWords } from 'normalize-words';

normalizeWords({
    str: 'divide string',
    transformType: 'toUpper',
    applyMethod: (normalizedString: string): string[] => {
        return normalizedString.split('');
    }
});

// Returns: [ 'D', 'I', 'V', 'I', 'D', 'E', ' ', 'S', 'T', 'R', 'I', 'N', 'G']
```

#### Complete example of normalization:
``` js
const { normalizeWords } = require('normalize-words');

normalizeWords({
    str: '@joHN   paLLozO!    any word!!',
    transformType: 'toFirstAll',
    removeWords: ['any', 'word'],
    removeCharacters: ['@', '!'],
    minLength: 5,
    maxLength: 30,
    ignoreByLength: 2,
    applyMethod: (normalizedString: string): string => {
        return normalizedString + ' - Full Stack Developer.';
    }
});

// Returns: "John Pallozo - Full Stack Developer."

```

#### Example of normalization with options reuse:

``` js
const { normalizeWords } = require('normalize-words');

const baseOptions = {
    transformType: 'toFirst',
    minLength: 5,
    maxLength: 30,
    ignoreByLength: 2
};

const options1 = {
    ...baseOptions,
    str: 'my CrasY striNG',
};

const options2 = {
    ...baseOptions,
    str: 'john f pallozo!',
    transformType: 'toFirstAll',
    removeCharacters: ['!'],
};

const mergedOptions = {
    ...options2, 
    applyMethod: (normalizedString) => {
        return `I'm ${normalizedString}, Full Stack Developer.`;
    }
};

// RESULTS:

normalizeWords( options1 );
// Returns: "My crazy string"

normalizeWords( options2 );
// Returns: "John F Pallozo"

normalizeWords( mergedOptions );
// Returns: "I'm John F Pallozo, Full Stack Developer."

```

## Autor

| [<img src="https://avatars2.githubusercontent.com/u/14978874?v=3&s=115"><br><sub>@anselmodev</sub>](https://github.com/anselmodev) |
| :---: |