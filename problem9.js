// Given an integer x, return true if x is a 
// palindrome, and false otherwise.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }

    let strX = x.toString();
    // return strX === strX.split("").reverse("").join("");
    let leftIndex = 0;
    let rightIndex = strX.length - 1;

    while (rightIndex > leftIndex) {
        if (strX[rightIndex] !== strX[leftIndex]) {
            return false;
        }

        leftIndex++;
        rightIndex--;
    }
    return true;

};