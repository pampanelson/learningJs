console.log('hello,get wet with this and object of javascript');

function MyObj (name) {
    // body..
    this.name = name;
    // this.sayMyName = sayMyName;
}

MyObj.prototype.sayMyName = function() {
    console.log(this);
    console.log(this.name);
};


var myObj = new MyObj("Tom");
// console.log(myObj.name);
myObj.sayMyName();


// function sayMyName () {
//     console.log(this);
//     console.log(this.name);
// }
// myObj.sayMyName();

// // obj and function
// function myFunction () {
//     // body...
//     //console.log('myFunction');
// }

// console.log(myFunction.constructor);

// var myObj = {};

// console.log(myObj.prototype);

// properties and methods of object
// var ParentObj = {
//     str : 'parent Str',
//     getMyStr : function getMyStr () {
//         // console.log(this);
//         return this.str;
//     }
// };

// var ChildObj = Object.create(ParentObj);
// ChildObj.getMyStr = function getChildStr () {
//     return ParentObj.getMyStr() + " modified";
// };
// ChildObj.str = 'child Str';


// var GrandChildObj = Object.create(ChildObj);
// // GrandChildObj.str = 'grand child Str';

// console.log(ParentObj.getMyStr());
// console.log(ChildObj.getMyStr());
// console.log(GrandChildObj.getMyStr());

