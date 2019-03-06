class DatabaseDriverInterface {
    get(){
        throw new Error('you must override `get` method');
    }
    set(){
        throw new Error('you must override `set` method');
    }
    all(){
        throw new Error('you must override `all` method');
    }
    update(){
        throw new Error('you must override `update` method');
    }
}

module.exports = DatabaseDriverInterface;