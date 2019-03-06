module.exports = function () {
        let db;
        let type = process.env.DATABASE_DRIVER_TYPE || 'redis';

        switch (type) {
            case 'redis':
                db = require('../../database/redis-database');
                break;
            case 'memory':
                db = require('../../database/memory-database');
        }
        return new db();
}();