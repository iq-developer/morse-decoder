const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    function digitizer(dotsAndDashes) {
        let  result = '';
        for (let char of dotsAndDashes) {
                if (char == '.') {
                    result += '10';
                } else if (char == '-') {
                    result += '11';
                }
        }
        for (let i = result.length; i < 10; i++) {
            result = '0' + result;
        }
        return result;
    }

    function InvertObject(obj) {
        for (key in obj){
            this[obj[key]] = digitizer(key);
        }
    }

    const MORSE_TABLE_DECODER = new InvertObject(MORSE_TABLE);

    let  final = '';
    for (char of expr){
        final += MORSE_TABLE_DECODER[char];
    }


    //console.log(MORSE_TABLE_DECODER['m']);

    //console.log(digitizer('--'));

return final;

}

console.log( decode('me') );

// module.exports = {
//     decode
// }
