import Sequelize from 'sequelize';

const db = new Sequelize('database', 'usename', 'password', {
    host: 'localhost',
    dialect: 'mysql'||'mariadb'||'sqlite'||'postgres'||'mssql',

    // SQLite only
    // storage: 'path/to/db.sqlite'
});

export default db;
