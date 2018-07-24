/*
Title Givers
==============
Name : Muhammad Ismail Yusuf

[INSTRUCTIONS]
Title givers akan menerima dua parameter dimana parameter pertama merupakan array yang berisi nama.
Dan pada bagian kedua, adalah title yang akan di berikan kepada pemilik nama di array yang di berikan.
Jika title yang di berikan di mulai dengan koma `,` maka title akan di tuliskan.
Jika tidak, maka title akan di tuliskan di depan dan dipisahkan dengan spasi ` `.
Contoh ada pada test case.

[RULE]
- Wajib menyertakan pseudocode atau algorithma!
- Dilarang menggunakan sintaks .map()! 
*/

// PSEUDOCODE

// STORE 'targetArr' with array with any value
// STORE 'title' with any value
// IF INDEX 0 of 'title' IS ',' THEN
//   STORE 'i' with value = 0    
//   WHILE 'i' < LENGTH of targetArr
//     CHANGE 'targetArr' with INDEX = i to 'targetArr' with INDEX = i + 'title'
//     CHANGE 'i' to 'i' PLUS 1
//   END LOOP
// ELSE THEN
//   STORE 'i' with value = 0    
//   WHILE 'i' < LENGTH of targetArr
//     CHANGE 'targetArr' with INDEX = i to 'title' + " " + 'targetArr' with INDEX = i
//     CHANGE 'i' to 'i' PLUS 1
//   END LOOP
// END IF
// DISPLAY 'targetArr'


// CODE

function titleGivers (targetArr, title) {
  if (title[0] === ",") {
    for (var i = 0; i < targetArr.length; i++) {
      targetArr[i] = targetArr[i] + title;
    }
  } else {
    for (var i = 0; i < targetArr.length; i++) {
      targetArr[i] = title + " " + targetArr[i];
    }
  }
  return targetArr;
}

console.log(titleGivers (['Awtian Akbar', 'Kobayakawa Sena', 'Yoichi Hiruma'], 'Mr.')); 
// Output
// [ 'Mr. Awtian Akbar',
//   'Mr. Kobayakawa Sena',
//   'Mr. Yoichi Hiruma' ]
console.log(titleGivers (['Dre', 'Brock', 'Leorio'], 'Dr.'));
// Output
// [ 'Dr. Dre', 'Dr. Brock', 'Dr. Leorio' ]
console.log(titleGivers (['Boush', 'Squee', 'Spleen' , 'Spoon'], ', ST'));
// Output
// [ 'Boush, ST', 'Squee, ST', 'Spleen, ST', 'Spoon, ST' ]