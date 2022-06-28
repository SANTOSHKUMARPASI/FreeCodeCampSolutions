
function rot13(str) {

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var decodedArray = [];

    for (let i = 0; i < str.length; i++) {

        var codeCharacter = str[i];
        var regExp = /[a-z]/ig;
        if (!regExp.test(codeCharacter)) {

            decodedArray.push(codeCharacter);
        }

        else {
            for (let j = 0; j < alphabet.length / 2; j++) {
                if (codeCharacter == alphabet[j]) {

                    var originalCharacter = alphabet[j + 13];
                    decodedArray.push(originalCharacter);
                }

            }
        }


    }
    console.log(decodedArray);
    var decodedString = decodedArray.join('');
    console.log(decodedString);
    return decodedString
}

rot13("SERR PBQR PNZC");
