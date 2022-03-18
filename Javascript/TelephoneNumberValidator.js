const REGEX = /^\d{3}[-\s]\d{3}[-\s]\d{4}$/;
const REGEX2 = /^\(\d{3}\)\s?\d{3}-\d{4}$/;
const REGEX3 = /^\d{10}$/;
const REGEX4 = /^1\s\d{3}-?\s?\d{3}-?\s?\d{4}$/;
const REGEX5 = /^1\s?\(\d{3}\)\s?\d{3}-\d{4}$/;

function telephoneCheck(str) {
    if (REGEX.test(str) || REGEX2.test(str) || REGEX3.test(str) || REGEX4.test(str) || REGEX5.test(str)) {
        return true;
    }
    return false;
}

console.log(telephoneCheck("11 555-555-5555"));
