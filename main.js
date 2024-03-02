// question
const user1 = { follo: "hero", cc: 1 };
const user2 = user1;
user2.cc = user1.cc++; // post fix increments first but returns old value only
console.table([user1, user2]);
// end
