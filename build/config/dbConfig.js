"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig = {
    host: "localhost",
    user: "root",
    password: "",
    db: "mernproj2db",
    dialect: "mysql",
    pool: {
        idel: 10000,
        max: 5,
        min: 0,
        acquire: 10000,
    },
};
exports.default = dbConfig;
