'use strict';

class CurrencyController {

  /**
   *
   * @param Model
   * @returns {Promise<*>}
   */
  static async getCurrencies(Model){
    return await Model.all();
  }

  /**
   *
   * @param Model
   * @param name
   * @returns {Promise<{name: *, conversion: *}>}
   */
  static async getCurrencyByName(Model, name){
    let conversion =  await Model.get(name);

    return {
      name:name,
      conversion:conversion
    }
  }
}

module.exports = CurrencyController;