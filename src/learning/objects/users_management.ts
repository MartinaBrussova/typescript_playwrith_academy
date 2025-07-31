//users_management.ts

import { User } from "./user.ts";

// src/learning/objects
const adminUser = new User("admin", "admin", 30, "mysak123@seznam.cz");

adminUser.logUser();
console.log(adminUser.getUsername());
adminUser.setAge(55);
adminUser.logUser();
adminUser.getEmail();
console.log(adminUser.getEmail());
