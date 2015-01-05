NC4JS
=====

named capture regex for javascript.

## example
```javascript
require('nc4js');

var str = '1994-11-29';
var res = str.match(/(?<year>\d+)(?<month>\d+)(?<day>\d+)/g);
console.log(res.year);
// '1994'
console.log(res.month):
// '11'
console.log(res.day);
// '29'
```

## why?
There's no named capture in javascript regex, but which is necessary.
