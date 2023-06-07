//Object comparision
const user1 = { name: "nerd", org: "dev" };
const user2 = { name: "nerd", org: "dev" };
const user3 = { name: "nerd", org: "dev",age:23 };

//To compare if two JSON objects are equal ?
const isEqualObject = (obj1, obj2) => {
return JSON.stringify(obj1) == JSON.stringify(obj2)
}
console.log(isEqualObject(user1,user2)); // gives true
console.log(isEqualObject(user1,user3));

//To comprare if the keys of object are equal?
const isEqualKeys = (obj1,obj2)=>{
    return JSON.stringify(Object.keys(obj1)) == JSON.stringify(Object.keys(obj2))
}
console.log(isEqualKeys(user1,user2));
console.log(isEqualKeys(user1,user3));

//To comprare if the values of object are equal?
const isEqualObjectValues = (obj1,obj2)=>{
    return JSON.stringify(Object.values(obj1)) == JSON.stringify(Object.values(obj2))
}
console.log(isEqualObjectValues(user1,user2));
console.log(isEqualObjectValues(user1,user3));