<p align="center">
  <img src="./normalize-logo.jpg" alt="Normalize Words from String" title="Normalize Words"/>
</p>

<h1 align="center">normalize-words</h1>

## Features

* Automatic removal of spaces and tabs.
* Normalization of words with options: `"toUpper" = UPPERCASE`, `"toLower" = lowercase`, `"toFirst" = Uppercase the first letter of the string`, `"toFirstAll" = First letter of all capitalized words`.
* Set the minimum string length to normalization.
* Set the maximum string size to normalization.
* Do not normalize words with specific length.
* Remove words from the string through a list (array).
* Remove characters from the string through a list (array).
* Enables user customized functions to complement normalization.
* Full Typescript compatibility.

#### Examples:

* [Basic Usage](#basic-usage)
* [ With "Word" Removal](#with-word-removal)
* [With "Character" Removal](#with-character-removal)
* [With Minimum and Maximum Character Length](#with-minimum-andor-maximum-character-length-required-to-normalize)
* [Do not normalize words with specific length](#do-not-normalize-words-with-specific-length)
* [Optional Function to string treatment](#optional-function-to-string-treatment)
* [Complete example of normalization](#complete-example-of-normalization)
* [Example of normalization with option reuse](#example-of-normalization-with-options-reuse)

## How to use

#### Basic Usage: 
``` { transformType: 'toUpper' | 'toLower' | 'toFirst' | 'toFirstAll' } ```
``` js
const { normalizeWords } = require('normalize-words');

const normalizeStr = normalizeWords({
    str: '  my    cRazY String  ',
    transformType: 'toUpper' // is required
});

console.log(normalizeStr); 
// Returns: "MY CRAZY STRING"

```

* Basic Typescript example:
``` ts
import { normalizeWords } from 'normalize-words';

const normalizeStr: string = normalizeWords({
    str: '  my    cRazY String  ',
    transformType: 'toFirstAll' // is required
});

console.log(normalizeStr); 
// Returns: "My Crazy String"

```


#### With "Word" Removal: 
``` removeWords: string[] ```
``` js
const { normalizeWords } = require('normalize-words');

const normalizeStr = normalizeWords({
    str: '  my    cRazY String  ',
    transformType: 'toUpper',
    removeWords: ['My'] // words list is not case sensitive
});

console.log(normalizeStr); 
// Returns: "CRAZY STRING"

```

#### With "Character" Removal: 
``` { removeCharacters: string[] } ```
``` js
const { normalizeWords } = require('normalize-words');

const normalizeStr = normalizeWords({
    str: '  my    cRazY String  ',
    transformType: 'toUpper',
    removeCharacters: ['m', 'Y'] // character list is not case sensitive
});

console.log(normalizeStr); // Returns: "CRAZ STRING"

```

#### With "Minimum and/or Maximum Character Length" required to normalize: 
``` { minLength: number , maxLength: number }```
``` js
const { normalizeWords } = require('normalize-words');

const normalizeStr = normalizeWords({
    str: 'john pallozo',
    transformType: 'toFirstAll',
    minLength: 5,
    maxLength: 20
});

console.log(normalizeStr); 
// Returns: "John Pallozo"

// Note: String less than 5 characters, will return an error
//       String longer than 20 characters, will return an error

```

#### Do not normalize words with specific length:
``` { ignoreByLength: number } ```
``` js
const { normalizeWords } = require('normalize-words');

const normalizeStr = normalizeWords({
    str: 'city of venice is located in italy',
    transformType: 'toFirstAll',
    ignoreByLength: 2
});

console.log(normalizeStr); 
// Returns: "City of Venice is Located in Italy"

// Note: The words "from", "is" and "in" have not been normalized

```

#### Optional Function to string treatment:
``` { applyMethod: Function } ```
``` js
const { normalizeWords } = require('normalize-words');

const normalizeStr = normalizeWords({
    str: 'john pallozo',
    transformType: 'toFirstAll',
    applyMethod: (normalizedString) => {
        return normalizedString + ' - Full Stack Developer.';
    }
});

console.log(normalizeStr); 
// Returns: "John Pallozo - Full Stack Developer."

// Note: The parameter in the fuction is mandatory because 
//       it contains the "Normalized String" previously.

```

- Another example with Typescript:
``` ts
import { normalizeWords } from 'normalize-words';

const normalizeStr: string = normalizeWords({
    str: 'divide string',
    transformType: 'toUpper',
    applyMethod: (normalizedString: string): string[] => {
        return normalizedString.split('');
    }
});

console.log(normalizeStr); 
// Returns: [ 'D', 'I', 'V', 'I', 'D', 'E', ' ', 'S', 'T', 'R', 'I', 'N']
```

#### Complete example of normalization:
``` js
const { normalizeWords } = require('normalize-words');

const normalizeStr = normalizeWords({
    str: '@joHN   paLLozO!    any word!!',
    transformType: 'toFirstAll',
    removeWords: ['any', 'word'],
    removeCharacters: ['@', '!'],
    minLength: 5,
    maxLength: 30,
    ignoreByLength: 2,
    applyMethod: (normalizedString) => {
        return normalizedString + ' - Full Stack Developer.';
    }
});

console.log(normalizeStr); 
// Returns: "John Pallozo - Full Stack Developer."

```

#### Example of normalization with options reuse:

``` js
const { normalizeWords } = require('normalize-words');

const baseOptions = {
    transformType: 'toFirst',
    minLength: 5,
    maxLength: 30
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

const resultNorm1 = normalizeWords( options1 );
// Returns: "My crazy string"

const resultNorm2 = normalizeWords( options2 );
// Returns: "John F Pallozo"

const resultMerged = normalizeWords( mergedOptions );
// Returns: "I'm John F Pallozo, a Full Stack Developer."

```

## Autor

| [<img src="https://avatars2.githubusercontent.com/u/14978874?v=3&s=115"><br><sub>@anselmodev</sub>](https://github.com/anselmodev) |
| :---: |