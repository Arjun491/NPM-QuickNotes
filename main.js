var moment = require("moment");
var unique = require("uniq");

var myDate = new Date();
var coolDate = moment(myDate).format("LL");


console.log(coolDate);



var data = [1, 2, 2, 3, 4, 5, 5, 5, 6,7,8,88,9.12];
var myUniqueList = unique(data);
console.log(myUniqueList);