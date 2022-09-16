'use strict';

// let res = "";
// for (let i = 1; i < 7; i++) {
    // console.log(res += '*');
// }

first: for (let i = 0; i < 3; i++) {
    console.log(`Firt level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`Third level: ${k}`);
        }
    }
}