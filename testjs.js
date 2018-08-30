var today = new Date();
var dd = today.getDate();
var mm = today.getMonth(); //January is 0!
var yyyy = today.getFullYear();

console.log(typeof (mm));

var x =22;

var obs ={
    w:x
}


function getMonth(month) {
    
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    for (var index = 0; index < months.length; index++) {
        if (month == months.indexOf(months[index])) {
            return months[index];
        }
    }
}


var testObj={

java:["core java","JDBC","jsp"],

java2:["core java","JDBC","jsp"]
}




function objpas(taking) {
 
    console.log('approching in function = ',taking[1]);


}

objpas(testObj.java);

console.log('testobj lendth',testObj.java.length);


var approching= testObj.java[2];

console.log('approching = ',approching);
console.log('approching type of = ',typeof(approching));




var day=dd.toString();
var year=yyyy.toString();
var x1 = getMonth(mm);
var t=day+" " + year+ " " + x1;
console.log(typeof (x1));
console.log(t);
