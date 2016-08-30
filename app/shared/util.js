/**
 * Utility class that can be used and shared throughout the application.
 * 
 * @class Util
 * @author Brandon Sherette
 * @version 0.0.1
 * @since 0.0.1
 */
var Util = {
  /**
   * Adds a randomly generated id if an id 
   * hasn't already been set to the model already.
   * 
   * @method applyId
   * @param {Object} model the model to apply the id to
   * @return the model that had an id applied to
   * @since 0.0.1
   */
  applyId: function(model) {
    if (!model.id || model.id.toString() === '0') {
      model.id = this.generateId();
    }

    return model;
  },

  /**
   * Generates a random base 16 id string.
   * 
   * @method generateId
   * @return the generated id
   * @since 0.0.1
   */
  generateId: function() {
    return Math.ceil(Date.now() * (Math.random() + 1)).toString(16);
  }
};

export default Util;
