function convertToRoman(num) {

    if (num == 0) {
        console.log('There is no Zero in Roman Numeral');
    }
    // ....................................................
    else if (num < 4) {
        var RomanNumeral = 'I';
        var arrayString = [];
        for (let i = 0; i < num; i++) {

            arrayString.push(RomanNumeral)

        }
        var convertedRoman = arrayString.join('')
        console.log(convertedRoman);
        return convertedRoman;
    }
    // ....................................................

    else if (num == 4) {
        console.log('IV');
        return 'IV';
    }
    // ....................................................
    else if (num == 5) {
        console.log('V');
        return 'V';
    }
    // ....................................................
    else if (num > 5 && num < 9) {
        var RomanNumeralM = 'I';
        var RomanNumeral = 'V'
        var arrayString = [];
        arrayString.push(RomanNumeral)
        for (let i = 0; i < (num - 5); i++) {
            arrayString.push(RomanNumeralM);

        }
        var convertedRoman = arrayString.join('')
        console.log(convertedRoman);
        return convertedRoman;
    }
    // ....................................................
    else if (num > 8 && num <) {
        var RomanNumeralM = 'I';
        var RomanNumeral = 'V'
        var arrayString = [];
        arrayString.push(RomanNumeral)
        for (let i = 0; i < (num - 5); i++) {
            arrayString.push(RomanNumeralM);

        }
        var convertedRoman = arrayString.join('')
        console.log(convertedRoman);
        return convertedRoman;
    }
    // ....................................................

};

convertToRoman(8);