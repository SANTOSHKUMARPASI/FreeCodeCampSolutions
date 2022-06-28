function convertToRoman(num) {
    var ones = Math.floor(num % 10);
    var tens = Math.floor(num / 10 % 10);
    var hundreds = Math.floor(num / 100 % 10);
    var thousands = Math.floor(num / 1000 % 10);
    console.log(`ones:${ones}`);
    console.log(`tens:${tens}`);
    console.log(`hundreds:${hundreds}`);
    console.log(`thousands:${thousands}`);

    function oneGen(ones) {
        var RomanNumeralOne = 'I';
        var RomanNumeralFive = 'V';
        var RomanNumeralNine = 'IX';

        var romArray = [];

        if (ones == 0) {
            return '';
        }
        else if (ones == 0 && thousands == 0 && tens == 0 && hundreds == 0) {
            console.log(`Zero is not a Roman Number`)
            return '';
        }
        else if (ones > 0 && ones < 4) {
            for (let i = 0; i < ones; i++) {
                romArray.push(RomanNumeralOne)
            }
        }
        else if (ones == 4) {

            romArray.push(RomanNumeralOne + RomanNumeralFive);
        }
        else if (ones >= 5 && ones < 9) {
            romArray.push(RomanNumeralFive);
            for (let i = 0; i < (ones - 5); i++) {
                romArray.push(RomanNumeralOne)

            }
        }

        else if (ones == 9) {
            romArray.push(RomanNumeralNine);
        }

        var onestr = romArray.join('')
        console.log(`Roman One: ${onestr}`)

        return onestr;
    }
    // ..................................................................
    function tensGen(tens) {
        var RomanNumeralTen = 'X';
        var RomanNumeralFifty = 'L';
        var RomanNumeralNinty = 'XC';

        var romArray = [];

        if (tens == 0) {
            return '';
        }
        else if (tens > 0 && tens < 4) {
            for (let i = 0; i < tens; i++) {
                romArray.push(RomanNumeralTen)
            }
        }
        else if (tens == 4) {

            romArray.push(RomanNumeralTen + RomanNumeralFifty);
        }
        else if (tens >= 5 && tens < 9) {
            romArray.push(RomanNumeralFifty);
            for (let i = 0; i < (tens - 5); i++) {
                romArray.push(RomanNumeralTen)
            }
        }

        else if (tens == 9) {
            romArray.push(RomanNumeralNinty);
        }

        var tensstr = romArray.join('')
        console.log(`Roman ten: ${tensstr}`);
        return tensstr;
    }
    // ..................................................................
    function hundredsGen(hundreds) {
        var RomanNumeralOne = 'C';
        var RomanNumeralFive = 'D';
        var RomanNumeralNine = 'CM';

        var romArray = [];

        if (hundreds == 0) {
            return '';
        }
        else if (hundreds > 0 && hundreds < 4) {
            for (let i = 0; i < hundreds; i++) {
                romArray.push(RomanNumeralOne)
            }
        }
        else if (hundreds == 4) {

            romArray.push(RomanNumeralOne + RomanNumeralFive);
        }
        else if (hundreds >= 5 && hundreds < 9) {
            romArray.push(RomanNumeralFive);
            for (let i = 0; i < (hundreds - 5); i++) {
                romArray.push(RomanNumeralOne)
            }

        }

        else if (hundreds == 9) {
            romArray.push(RomanNumeralNine);
        }

        var hundredsstr = romArray.join('')
        console.log(`Roman Hundred: ${hundredsstr}`);
        return hundredsstr;
    }
    // ..................................................................
    function thousandsGen(thousands) {
        var RomanNumeralOne = 'M';
        var RomanNumeralFive = 'V^';
        var RomanNumeralNine = 'MX^';

        var romArray = [];

        if (thousands == 0) {
            return '';
        }
        else if (thousands > 0 && thousands < 4) {
            for (let i = 0; i < thousands; i++) {
                romArray.push(RomanNumeralOne)
            }
        }
        else if (thousands == 4) {

            romArray.push(RomanNumeralOne + RomanNumeralFive);
        }
        else if (thousands >= 5 && thousands < 9) {
            romArray.push(RomanNumeralFive);
            for (let i = 0; i < (thousands - 5); i++) {
                romArray.push(RomanNumeralOne)
            }
        }

        else if (thousands == 9) {
            romArray.push(RomanNumeralNine);
        }

        var thousandsstr = romArray.join('')
        console.log(`Roman thousand: ${thousandsstr}`);
        return thousandsstr;
    }



    var oneplace = oneGen(ones);
    var tensplace = tensGen(tens);
    var hundredplace = hundredsGen(hundreds);
    var thousandplace = thousandsGen(thousands);

    var roman = thousandplace + hundredplace + tensplace + oneplace;
    console.log(`This is the output: ${roman}`);
    return roman;
};

// convertToRoman(0); success
// convertToRoman(1); //success
// convertToRoman(4); //success
// convertToRoman(5); //success
// convertToRoman(8); //success
// convertToRoman(9); //success
// convertToRoman(10); //success
// convertToRoman(14); //success
// convertToRoman(19); //success

// convertToRoman(49); //success

// convertToRoman(50); //success

// convertToRoman(550); //success
// convertToRoman(1350); //success
// convertToRoman(649); //success
