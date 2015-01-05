require('../lib');

var str = '1994-11-29';
var regex = new RegExp('(?<year>\\d+)-(?<month>\\d+)-(?<day>\\d+)');
var res = regex.exec(str);

console.log(res);
