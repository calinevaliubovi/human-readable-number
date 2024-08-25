module.exports = function toReadable(number) {
    const ones = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
    ];
    const teens = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tens = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundreds = "hundred";

    if (number === 0) return ones[0]; // специальный случай для нуля

    let result = "";

    if (number >= 100) {
        result += ones[Math.floor(number / 100)] + " " + hundreds;
        number %= 100;
        if (number > 0) result += " ";
    }

    if (number >= 20) {
        result += tens[Math.floor(number / 10) - 1];
        number %= 10;
        if (number > 0) result += " ";
    }

    if (number > 10 && number < 20) {
        result += teens[number - 11];
    } else if (number <= 10 && number > 0) {
        result += ones[number];
    }

    return result.trim();
};
