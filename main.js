// alert('hello!')
// console.log('hello')

// setInterval(function() {
//     console.log('hello');
// },1000)

var a = 1;
var b = 2;

var ketQua = 'A' || 'B' || 0;
console.log(ketQua);


var firstName = 'Nguyen \'Hoang\' Vu';
console.log(firstName);


var firstName = 'Vu';
var lastName = 'Nguyen';
console.log(`Toi la: ${firstName} ${lastName}`);


var myString = "Hoang Vu Hoang Vu Vu";
console.log(myString.lastIndexOf('Vu'));

var myString = 'Hoang Vu Hoang Vu';
console.log(myString.slice(6,8))

var myString = 'Hoang Vu Hoang Vu';
console.log(myString.slice(6))

var myString = 'Hoang Vu Hoang Vu';
console.log(myString.slice(0))

var myString = 'Hoang Vu Hoang Vu!';
console.log(myString.slice(-3,-1))

var myString = 'Hoang Vu';
console.log(myString.replace('Vu', 'Viet'))

var myString = 'Hoang Vu Hoang Vu';
console.log(myString.replace(/Vu/g, 'Viet'))

var myString = 'Hoang Vu';
console.log(myString.toUpperCase())

var myString = 'Hoang Vu';
console.log(myString.toLowerCase())

var myString = 'Hoang Vu';
console.log(myString.charAt(0))

var age = 18;
var PI = 3.14;
console.log(age.toString())

// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby'
// ];
// console.log(languages.pop())
// console.log(languages)

var languages = [
    'Javascript',
    'PHP',
    'Ruby'
];
// console.log(languages.push('Dart', 'Java'))
// console.log(languages)

// console.log(languages.splice(1,1))
// console.log(languages)

console.log(languages.slice(1,2))

// Ham
// function showDislog() {
//     alert('Hello!')
//}
//showDislog();

/*function writeLog(message1, message2) {
    if(message1)
    {
        console.log(message1);
    }
    if(message2)
    {
        console.log(message2);
    }
}
writeLog('Hoang', 'Vu');*/

/*function writeLog() {
    
        console.log(arguments);
    
}
writeLog('Hoang', 'Vu');*/

function writeLog() {
    var myString = '';
    for(var param of arguments)
    {
        myString += `${param} - `;
    }
    console.log(myString)
}
writeLog('Hoang', 'Vu');

// Object
var myInfo = {
    name: 'Hoang Vu',
    age: 20,
    address: 'Da Nang',

    getName: function() {   // c?? th??? l??u tr??? value l?? q function
        return this.name;
    }
};
//myInfo.email = 'hoangvu22062001@gmail.com'; //Th??m v??o 1 key m???i
myInfo['my-email'] = 'hoangvu22062001@gmail.com'; //Th??m v??o 1 key m???i

//console.log(myInfo.name); // l??y value ra ngoai
//console.log(myInfo['name']); // l??y value ra ngoai

//delete myInfo.age; //x??a key

console.log(myInfo.getName()); // c?? th??? l??u tr??? value l?? q function
console.log(myInfo);


// Object constructor
function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

var author = new User('Ho??ng', 'V??', 'Avatar');
var user = new User('Ho??ng', 'Vi???t', 'Avatar');

author.title = 'Chia s??? t???i ????y';
user.comment = 'd???y th??m ??i ???';

console.log(author);
console.log(user);

//?????i t?????ng Date
var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1; //month ch???y t??? 0->11
var year = date.getFullYear();

console.log(`${day}/${month}/${year}`);

//if else
var date = 3;

if(date === 2)
{
    console.log('H??m nay l?? th??? 2');
}else if(date === 3){
    console.log('H??m nay l?? th??? 3');
}else {
    console.log('Kh??ng c??');
}

//Switch
var date = 9;

switch(date) {
    case 2: console.log('H??m nay l?? th??? 2'); break;
    case 3: console.log('H??m nay l?? th??? 3'); break;
    case 4: console.log('H??m nay l?? th??? 4'); break;
    default: console.log('Kh??ng c?? !!!');
}   

// To??n t??? 3 ng??i
var course = {
    name: 'Javascirpt',
    coin: 250
}

/*if(course.coin > 0) {
    console.log(`${course.coin} Coins`);
} else {
    console.log('Mi???n Ph??!')
}*/

var result = course.coin > 0 ? `${course.coin} Coins` : 'Mi???n Ph??!';
console.log(result);

// for loop
var myArray = [
    'Java',
    'Ryby',
    'Python'
];
var arrayLength = myArray.length;
for(var i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}

//for/in
var myInfo = {
    name: 'Hoang Vu',
    age: 20,
    address: 'Da Nang'
};
for(var key in myInfo) {  // ch??? key l?? t??? ?????t t??n
    console.log(myInfo[key]);
}

//while
var i = 0;
while (i < 5) {
    i++;
    console.log(i);
}

//do/while
var i = 0;
do {
    i++;
    console.log(i);
} while (i < 5);

//Break in loop
for (var i = 0; i<= 10; i++) {
    console.log(i);

    if(i>=5) {
        break;
    }
}
//continue in loop
for (var i = 0; i<= 10; i++) {
    if(i%2 === 0) {
        continue;
    }
    console.log(i);
}

//V??ng l???p l???ng nhau
var myArray = [
    [1,2],
    [3,4],
    [5,6]
];
for (var i=0; i<myArray.length; i++) {
    for(var j=0; j<myArray[i].length; j++) {
        console.log(myArray[i][j]); 
    }
}
//
for (var i=100; i>0; i-=5) {
    console.log(i);
}


// Array method
var courses = [
    {
        id: 1,
        name: 'JavaScript',
        coin: 500
    },
    {
        id: 2,
        name: 'HTML',
        coin: 0
    },
    {
        id: 3,
        name: 'CSS',
        coin: 0
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 500
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 200
    }
]; 
//  forEach() : duy???t qua t???ng ph???n t??? c???a m???ng
courses.forEach(function(course, index) {
    console.log(index, course);
});

//  every() : ki???m tra t???t c??? c??c ph???n t??? ph???i th???a m??n 1 ??i???u ki???n g?? ????
// VD: ki???m tra xem t???t c??? c??c kh??a h???c c?? mi???n ph?? hay k, coin = 0 l?? free. --> tr??? v??? ki???u boolean
var isFree = courses.every(function(course, index) {
    return course.coin === 0;
});
console.log(isFree);

//  some() : ch??? ki???m tra 1 ph???n t??? th???a m??n ???????c ??i???u ki???n g?? ???? th?? tr??? v??? true
var isFree = courses.some(function(course, index) {
    return course.coin === 0;
});
console.log(isFree);

//  find() : T??m ki???m ( tr??? v??? ph???n t??? ?????u ti??n n?? t??m th???y )
var course = courses.find(function(course, index) {
    return course.name === 'Ruby';
});
console.log(course);

//  filter() : T??m ki???m ( tr??? v??? t???t c??? c??c ph???n t??? n?? t??m th???y )
var course = courses.filter(function(course, index) {
    return course.name === 'Ruby';
});
console.log(course);

//  map() : d??ng map khi mu???n ch???nh s???a hay thay ?????i element c???a 1 array
// VD1: Th??m v??o m???i key name : 'Khoa hoc ...' , v?? th??m key coinText: 'Gia: ... '
function addCourses(course, index) {
    return {
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        coin: course.coin,
        coinText: `Gia: ${course.coin}`,
        index: index
    };
}

var newCourses = courses.map(addCourses);
console.log(newCourses);

// VD2: l???y t???t c??? t??n c???a m???ng courses chuy???n sang m???ng m???i.
// function addCourses(course, index) {
//     return course.name;
// }

// var newCourses = courses.map(addCourses);
// console.log(newCourses);

//  reduce() : khi mu???n nh???n v??? gi?? tr??? duy nh???t sau khi t??nh to??n v?? s??? l?? tr??n nh???ng ph???n t??? trong 1 array
var totalCoin = courses.reduce(function(total, course) {
    return total + course.coin;
}, 0);  // 0 l?? gi?? tr??? kh???i t???o
console.log(totalCoin);

//BTUD
// Flat - "L??m ph???ng" m???ng t??? Depth Array - "M???ng s??u"
var depthArray = [1,2,[3,4],5,6,[7,8,9]];
var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem)
}, []);
console.log(flatArray);



//forEach() method
Array.prototype.forEach2 = function(callback) { // ?????nh ngh?? ph????ng th???c forEach2
    for(var index in this) {
        if(this.hasOwnProperty(index))
        {
            console.log(index);
            callback(this[index], index, this);
        }
    }
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];
courses.forEach2(function(course, index, array) {
    console.log(course, index, array);
});

//filter() method
Array.prototype.filter2 = function(callback) {
    var output = [];
    for(var index in this) {
        if(this.hasOwnProperty(index))
        {
            var result = callback(this[index], index, this);
            if(result){
                output.push(this[index]);
            }
        }
    }
    return output;
}

var courses = [
    {
        name: 'Javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 890
    },
    {
        name: 'Ruby',
        coin: 900
    }
];
var filterCourses = courses.filter2(function(course, index, array) {
    return course.coin > 700;
});
console.log(filterCourses);

//some() method -> tr??? v??? true or false
Array.prototype.some2 = function(callback) {
    var output = false;
    for(var index in this) {
        if(this.hasOwnProperty(index))
        {
            if(callback(this[index], index, this)) {
                output = true;
                break;
            }
        }
    }
    return output;
}

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 890,
        isFinish: false
    },
    {
        name: 'Ruby',
        coin: 900,
        isFinish: false
    }
];
var result = courses.some2(function(course, index, array) {
    return course.isFinish === true;
});
console.log(result);

//every() method
Array.prototype.every2 = function(callback) {
    var output = true;
    for(var index in this) {
        if(this.hasOwnProperty(index))
        {
            var result = callback(this[index], index, this);
                if (!result) {
                    output = false;
                    break;
                }
        }
    }
    return output;
}

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 890,
        isFinish: true
    },
    {
        name: 'Ruby',
        coin: 900,
        isFinish: true
    }
];
var result = courses.every2(function(course, index, array) {
    return course.isFinish === true;
});
console.log(result);  


//X??a c??c ph???n t??? b??? tr??ng. Y??u c???u output ra n???m trong 1 m???ng
var array = ['a', 'b', 'c', 'a', 'b', 'c'];
console.log([...(new Set(array))]);
//C1: console.log(new Set(array));

document.write('Hello');