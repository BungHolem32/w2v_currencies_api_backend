/**
 * Module dependencies.
 */

const currencies = require('../resources/seeds/currencies');
const redis = require('redis');
const bluebird = require('bluebird');
const DatabaseDriverInterface  = require('./database-driver-interface');
const Helpers =  require('../src/utilities/helpers');

class RedisDatabase extends DatabaseDriverInterface{

    /**
     *  1 initialize bluebird package for redis promise
     *  2. create redis client and pass message to the use
     *  3. save records into the redis database from seeds file.
     */
    constructor() {
        super();
        this.executeBlueBirdPackage();
        this.buildClient();
        this.generateRecords(currencies);
    }

    /**
     *  get all currencies
     *
     * @returns {Promise<[any, any, any, any, any, any, any, any, any, any]>}
     */
    async all() {
        let record = await currencies.map(async (currency) => {
            let conversion = await this.client.getAsync(currency);
            return await {name: currency, conversion: conversion};
        });

        return Promise.all(record)
    }

    /**
     * get individual currency from redis
     *  1. in this case the key is the name of the currency uppercase
     *
     * @param name
     * @returns {Promise<*>}
     */
    async get(name) {
        name = Helpers.normalizeString(name);

        return await this.client.getAsync((name.toUpperCase()));
    }

    /**
     *
     * @param name
     * @param value
     */
    set(name, value) {
        this.client.set(name, value)
    }

    /**
     *  Insert currencies into redis
     */
    generateRecords() {
        currencies.forEach((currency) => {
            let conversion = Helpers.generateRandomNumberByRange(0.15,5,true);
            this.client.set(currency, conversion);
        })
    }


    /**
     *  initialize redis promise super powers
     */
    executeBlueBirdPackage() {
        bluebird.promisifyAll(redis.RedisClient.prototype);
        bluebird.promisifyAll(redis.Multi.prototype);
    }

    /**
     *  build redis client
     */
    buildClient() {
        this.client = redis.createClient();
        this.client.on('connect', () => console.log('Redis connected successfully'));
    }
}

module.exports = RedisDatabase;
