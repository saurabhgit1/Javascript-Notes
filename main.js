// // question
// const user1 = { follo: "hero", cc: 1 };
// const user2 = user1;
// user2.cc = user1.cc++; // post fix increments first but returns old value only
// console.table([user1, user2]);
// // end

// {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }
// console.log("a", a);
// function fun1() {
//     var d = 40;
//     let e = 50;
//     var a = 60;
// console.log("a", a);

// }
// fun1();
// console.log("a", a);

// let a = 10;
// function fun2(){
//     console.log("a", a);
//     console.log("b", b);
//     {
//         var b = 23;
//     }
//     var a = 20;
// }
// fun2();
// console.log("a", a);

// function a() {
//     var a = 7;
//     function b() {
//         console.log("aa", a);
//     }
//     return b;
// }
// var z = a();
// var a = 9;
// z();

function a() {
    var aa = 1;
    var bb = 9;
  console.log("a", aa);
  // b();
  function b() {
    var aa = 2;
    console.log("b", aa);

    function c() {
    //   var a = 3;
      console.log("c", aa,bb);
    }
    c();
  }
  b();
}

a();
// console.log("zz", z);
// z();
