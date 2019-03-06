const currencies = require('../resources/seeds/currencies');
const Helpers = require('./utilities/helpers');

//this class created for the sake of CronJobs
class Jobs {

    static schedule(time, callback, props){
        setInterval(()=>{
            callback(props);
        }, time);
    }

    /**
     *  Update currencyConversion rate:
     *  1. get currencies
     *  2. choose random currency from the list
     *  3. choose random value based on the current value and change it ( by ratio of -0.15 to +0.15 )
     *  4. do all of this each 3 seconds
     *
     * @param db
     */
     static async updateConversion(db) {
        let values = Object.values(currencies);
        let randomKey = values[Math.floor(Helpers.getRandomNumber(0,values.length))];
        let randomValue = Helpers.generateRandomNumberByRange(0.85 ,1.15,false);
        let conversion = await db.get(randomKey);
        randomValue = Math.round((conversion * randomValue) * 100) / 100;

        db.set(randomKey, randomValue);

        console.info(`currency ${randomKey} conversion has been change  from ${conversion} to ${randomValue}`)
    }
}

module.exports = Jobs;