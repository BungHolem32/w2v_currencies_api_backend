'use strict';
const Helpers = require('../src/utilities/helpers');
const DatabaseDriverInterface = require('./database-driver-interface');
const currencies = require('../resources/seeds/currencies.json');

class MemoryDatabase extends DatabaseDriverInterface {

    /**
     * load currencies to the memory
     */
    constructor() {
        super();
        this.currencies = this.generateCurrencies();
    }

    /**
     *
     */
    all() {
        return this.currencies
    }

    /**
     *
     * @param name
     */
    get(name) {
        name = Helpers.normalizeString(name);
        let cur = this.currencies.filter((record) => record.name === name);

        return cur[0].conversion;
    }

    /**
     *
     * @param currency
     * @param value
     */
    set(currency, value) {
        this.currencies.map((currency) => {
            if (currency.name === currency) {
                currency[currency] = value;
            }

            return currency;
        });

        return this.currencies;
    }

    /**
     *
     * @param id
     * @param currency
     */
    update(id, currency) {
        if (!this.currencies[id]) {
            throw new RangeError('no currency with this id');
        }

        this.currencies[id] = currency;
    }

    /**
     *
     * @returns {*}
     */
    generateCurrencies() {
        return currencies.map((currency) => {
            let conversion = Helpers.generateRandomNumberByRange(0.15, 5, true);
            return {
                name: currency,
                conversion: conversion
            }
        });

    }
}

module.exports = MemoryDatabase;