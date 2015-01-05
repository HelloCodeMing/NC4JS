NC4JS
=====

named capture regex for javascript.

## example
```javascript
require('nc4js');

var str = '1994-11-29';
var regex = new RegExp('(?<year>\\d+)-(?<month>\\d+)-(?<day>\\d+)');
var res = regex.exec(str);

console.log(res);
/*[ '1994-11-29',
  index: 0,
  input: '1994-11-29',
  year: '1994',
  month: '11',
  day: '29' ]
*/
```

## why?
There's no named capture in javascript regex, but which is necessary.
