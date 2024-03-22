type Database = {
  host: string;
  user: string;
  password: string;
  db: string;
  dialect: "mysql" | "postgres" | "sqlite";
  pool: {
    max: number;
    min: number;
    idel: number;
    acquire: number;
  };
};

const dbConfig: Database = {
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

export default dbConfig;
