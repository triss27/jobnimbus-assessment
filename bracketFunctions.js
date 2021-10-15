function hasMatchingBrackets(someString) {
    if (typeof someString !== "string") {
        return false;
    }

    let foundBrackets = [];

    for (let i = 0; i < someString.length; i++) {

        if (someString[i] === '{') {
            // Push it like you mean it
            foundBrackets.push('{');

        } else if (someString[i] === '}') {
            // Off you pop
            let checkPoppedValue = foundBrackets.pop();
            if (!checkPoppedValue) {
                // Nothing to pop
                return false;
            }
        }
    }

    if (foundBrackets.length) {
        return false;
    }

    return true;
}

module.exports = hasMatchingBrackets