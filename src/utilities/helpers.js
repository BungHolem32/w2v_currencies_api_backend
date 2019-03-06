'use strict';

 class Helpers {
    /**
     *
     * @param number
     * @returns {number}
     */
    static getRounded(number) {
        return Number(Math.round(number  + 'e2') + 'e-2')
    }

    /**
     *
     * @param min
     * @param max
     * @returns {*}
     */
    static getRandomNumber(min, max) {
        return Math.random() * (max - min) + min
    }

    /**
     *
     * @param min
     * @param max
     * @param round
     * @returns {*}
     */
    static generateRandomNumberByRange(min, max, round) {
        let randomNumber = Helpers.getRandomNumber(min, max);

        if (round) {
            return Helpers.getRounded(randomNumber);
        }

        return randomNumber;
    }

    /**
     *
     * @param str
     * @returns {string}
     */
    static normalizeString(str) {
        if(!str){
            throw new Error('You must pass string in order to normalize it');
        }

        return str.trim().toUpperCase();
    }
}

 module.exports = Helpers;