const a = 17;
const b = 5;
a > b;
a <= b;
a == b;
a != b;
console.log(a > b);
console.log(a <= b);
console.log(a == b);
console.log(a != b);


const c = 'a';
const d = 'b';
const e = 'ab';
'a' < 'b';
'ab' > 'a';
console.log( c < d );
console.log( e > c );

const f = '17';
const g = 1;
'17' > 1;
console.log('17' > 1);


const h = 17;
17 === 1;
console.log( h === g);

17 === 17;
console.log( h === h );

17 === '17';
console.log( h === f);

const i = true;
17 === true;
console.log( h === i );

const j = '0';
const k = '';
'0' === '';
console.log( j === k );

const l = false;
true === false;
console.log( i === l);

true === true;
console.log( i === i );

const m = null;
const n = undefined;
null === undefined;
console.log( m === n);

const o = 0;
false === 0;
console.log( l === o);



17 == '17';
'0' == '';
0 == '';
null == undefined;
false == 0;

console.log( h == f);
console.log( j == k);
console.log( o == k);
console.log( m == n);
console.log( l == o);

undefined == null;
undefined == 0;
null == 0;
undefined < 0;
undefined > 0;

console.log( n == m);
console.log( n == o);
console.log( m == o);
console.log( n < o);
console.log( n > o);