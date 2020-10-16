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

#### Examples:

* [Basic Usage](#basic-usage--toupper--tolower--tofirst--tofirstall-)
* [ With "Word" Removal](#with-word-removal)
* [With "Character" Removal](#with-character-removal)
* [With Minimum and Maximum Character Length](#with-minimum-andor-maximum-character-length-required-to-normalize)
* [Do not normalize words with specific length](#do-not-normalize-words-with-specific-length)
* [Optional Function to string treatment](#optional-function-to-string-treatment)
* [Complete example of normalization](#complete-example-of-normalization)

## How to use

#### Basic Usage ( 'toUpper' | 'toLower' | 'toFirst' | 'toFirstAll' ):
``` js
const { normalizeWords } = require('normalize-words');

const normalizeStr = normalizeWords({
    str: '  my    cRazY String  ',
    transformType: 'toUpper' // is required
});

console.log(normalizeStr); 
// Returns: "MY CRAZY STRING"

```

#### With "Word" Removal:
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
``` js
const { normalizeWords } = require('normalize-words');

const normalizeStr = normalizeWords({
    str: 'john pallozo',
    transformType: 'toFirstAll',
    applyMethod: (normalizedString) => {
        return normalizedString + ' - Full-stack Developer.';
    }
});

console.log(normalizeStr); 
// Returns: "John Pallozo - Full-stack Developer."

// Note: The parameter in the fuction is mandatory because 
//       it contains the "Normalized String" previously.

```

- Another example:
``` js
const { normalizeWords } = require('normalize-words');

const normalizeStr = normalizeWords({
    str: 'divide string',
    transformType: 'toUpper',
    applyMethod: (normalizedString) => {
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

## Autor

| [<img src="https://avatars2.githubusercontent.com/u/14978874?v=3&s=115"><br><sub>@anselmodev</sub>](https://github.com/anselmodev) |
| :---: |