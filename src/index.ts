console.log("Ahoj TypeScript!");

import { User } from "../src/learning/objects/user.ts";

// src/learning/objects
const adminUser = new User("admin", "admin", 30, "mysak123@seznam.cz");

adminUser.logUser();
console.log(adminUser.getUsername());
adminUser.setAge(55);
adminUser.logUser();
adminUser.getEmail();
console.log(adminUser.getEmail());

const honza = new User("Honza", "Heslo", 27, "honzamalemkralem@seznam.cz");

honza.logUser();
console.log(honza.getEmail());
honza.logUser();
