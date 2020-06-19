import { User } from "./models/User";

const user = new User({ name: "Ryan", age: 38 });

user.set({ name: "Test", age: 20 });

user.set({ name: "Ryan" });
user.set({ age: 30 });

console.log(user.get("name"));
console.log(user.get("age"));

//empty user
const emptyUser = new User({});

emptyUser.set({ age: 33 });
emptyUser.set({ name: "Bob" });
console.log(emptyUser.get("name"));
console.log(emptyUser.get("age"));
