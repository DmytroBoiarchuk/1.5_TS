function summ(a) {
    var x = Object.keys(a).map(function (k) {
        var elem = a[k];
        if (elem === undefined)
            return 2021;
        if (elem.cvalue === undefined)
            return 2021;
        if (typeof elem.cvalue === 'string')
            return +elem.cvalue || 2021;
        if (typeof elem.cvalue === 'number')
            return elem.cvalue;
        return summ(elem.cvalue);
    });
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
var A = {
    hello: { cvalue: 1 },
    world: { cvalue: { yay: { cvalue: '2' } } }
};
var B = {
    mobo: undefined,
    hello: { cvalue: 1 },
    world: {
        cvalue: {
            yay: { cvalue: '2' },
            grgr: { cvalue: undefined },
            grr: { cvalue: '1' },
            qq: undefined
        }
    },
    grgr: { cvalue: undefined }
};
console.log(summ(A));
console.log(summ(B));
