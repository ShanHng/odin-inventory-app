import pg from 'pg';

const { DATABASE_USER, DATABASE_PASSWORD, DATABASE_HOSTNAME, DATABASE_PORT } = process.env;

export default new pg.Pool( {
    connectionString: `postgresql://${DATABASE_USER}:${DATABASE_PASSWORD}@${DATABASE_HOSTNAME}:${DATABASE_PORT}/odin_inventory`
});