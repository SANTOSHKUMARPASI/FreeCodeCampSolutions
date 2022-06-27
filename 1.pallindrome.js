function palindrome(str) {


    var lowerString = str.toLowerCase();
    console.log(`Lowercap:${lowerString}`);
    var regexWord = /\s+/;
    var regexWord2 = /[^a-z0-9]/ig;
    var lowerStringNoSpace = lowerString.replace(regexWord, '');
    console.log(`This is the lowercase:${lowerString}`);

    var lowerStringNoSpaceW = lowerString.replace(regexWord2, '');
    console.log(`This is the noNonAlphabet:${lowerStringNoSpaceW}`);
    let num = lowerStringNoSpaceW.length;
    console.log(`Characters in String:${num}`);




    if (num % 2 == 0) {
        console.log(`Even Numbers in Array`)
        for (let i = 0; i < (num / 2); i++) {
            console.log(`Loop Start`)
            if (lowerStringNoSpaceW[i] == lowerStringNoSpaceW[(num - 1) - i]) {
                console.log(`The ${lowerStringNoSpaceW[i]} is equal to ${lowerStringNoSpaceW[(num - 1) - i]}`)
            }
            else {
                console.log(`The String: '${str}' is NOT Pallindrome`);
                return false;
            }
        }
    }

    else {

        console.log(`Odd Numbers in Array`)
        for (let i = 0; i < ((num - 1) / 2); i++) {
            console.log(`Loop Start`)
            if (lowerStringNoSpaceW[i] == lowerStringNoSpaceW[(num - 1) - i]) {
                console.log(`The ${lowerStringNoSpaceW[i]} is equal to ${lowerStringNoSpaceW[(num - 1) - i]}`)

            }
            else {
                console.log(`The String: '${str}' is NOT Pallindrome`);

                return false;
            }


        }
    }


    console.log(`The String: '${str}' is Pallindrome`);

    return true;
}
