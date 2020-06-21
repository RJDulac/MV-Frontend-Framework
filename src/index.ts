import { User } from "./models/User";

const user = new User({ name: "new record", age: 40 });

user.save();
