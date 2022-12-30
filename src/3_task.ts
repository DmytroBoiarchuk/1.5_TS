interface BigObject {
  [key: string]: { cvalue: undefined | BigObject | String | Number } | undefined;
}

function summ(a: BigObject): number {
  const x: number[] = Object.keys(a).map((k) => {
    const elem = a[k];
    if (elem === undefined) return 2021;
    if (elem.cvalue === undefined) return 2021;
    if (typeof elem.cvalue === 'string') return +elem.cvalue || 2021;
    if (typeof elem.cvalue !== 'number') return summ(elem.cvalue as BigObject);
    return elem.cvalue as unknown as number;
  });
  let sum = 0;
  for (let i: number = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum;
}

let A: BigObject = {
  hello: { cvalue: 1 },
  world: { cvalue: { yay: { cvalue: '2' } } },
};

let B: BigObject = {
  mobo: undefined,
  hello: { cvalue: 1 },
  world: {
    cvalue: {
      yay: { cvalue: '2' },
      grgr: { cvalue: undefined },
      grr: { cvalue: '1' },
      qq: undefined,
    },
  },
  grgr: { cvalue: undefined },
};
console.log(summ(A));
console.log(summ(B));
