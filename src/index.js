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

MORSE_TABLE['**********'] = ' ';

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

    function ConvertObject(obj) {
        for (key in obj){
            this[digitizer(key)] = obj[key];
        }
    }

    const MORSE_TABLE_DECODER = new ConvertObject(MORSE_TABLE);
    //console.log(MORSE_TABLE_DECODER['0000001111']);

    let  final = '';
    for (let i = 0; i < expr.length; i = i + 10) {
        let slice = expr.slice(i, i + 10);
        console.log(slice);
        final += MORSE_TABLE_DECODER[slice];
    }

    return final;
}
console.log( decode('00000011110000000010') );

//console.log( decode('me') );

// module.exports = {
//     decode
// }
