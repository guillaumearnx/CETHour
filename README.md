# CETHour
NPM Package to get Central European Time

Instructions :

Boolean parameter (timestampMode)

```js
const {getTime} = require('cethour');

const time = getTime(true|false);
```
If param is true : 
```js
//Date('August 19, 1975 23:15:30');
time.day => Mardi
time.date => 19
time.month => Août
time.year => 1975
time.hours => 23
time.minutes => 15
time.seconds => 30
```
else
```js
//Date('August 19, 1975 23:15:30');
time => 177722130000
```
