'use strict';

const a = 50;

// if (a < 49) {
    // console.log('Gooood maboyyy!!!');
// } else if (a > 70) {
    // console.log('Nooo maboyyy!!!');
// } else {
    // console.log('Yeeees maboyyyy!!');
// }

(a == 50) ? console.log('OK') : console.log('Not OK');

const b = 51;

switch (b) {
    case 49:
        console.log('no');
        break;
    case 100:
        console.log('no');
        break;
    case 50:
        console.log('yes');
        break;
    default:
        console.log('still no');
        break;
}