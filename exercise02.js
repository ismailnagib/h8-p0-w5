function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    var output = [];
    for (var i = 0; i < arrPenumpang.length; i++) {
        var startIndex = 0;
        var stopIndex = 0;
        output.push({});
        output[i].penumpang = arrPenumpang[i][0];
        output[i].naikDari = arrPenumpang[i][1];
        output[i].tujuan = arrPenumpang[i][2];
        for (var j = 0; j < rute.length; j++) {
            if (rute[j] === arrPenumpang[i][1]) {
                startIndex = j;
            } else if (rute[j] === arrPenumpang[i][2]) {
                stopIndex = j;
            }
        }
        output[i].bayar = (Math.abs(stopIndex - startIndex)) * 2000;
    }
    return output;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]