import * as mysql from 'mysql';

const getDatabaseConnection = () => {
    return mysql.createConnection({
        host: process.env.MYSQL_HOSTNAME,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    })
}

export const executeQuery = (query: string, placeholders: any, callback: () => void) => {
    const connection = getDatabaseConnection();
    connection.connect(error => {
        if (error) {
            throw error;
        }
        connection.query(query, [placeholders], (error, result) => {
            if (error) {
                throw error;
            }
            callback();
        });
    });
}
