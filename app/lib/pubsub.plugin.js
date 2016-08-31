/**
 * Plugin for adding publish / subscription type features to your classes.
 * 
 * @class PubSubPlugin
 * @authors Brandon Sherette
 * @version 0.0.1
 * @since 0.0.1
 */
var PubSubPlugin = (function () {
    var Plugin = function () {
        this.subscriptions = [];
    };

    // define API
    Plugin.prototype.publish = publish;
    Plugin.prototype.subscribe = subscribe;
    Plugin.prototype.unsubscribe = unsubscribe;

    // return plugin
    return Plugin;

    //////////////////////////

    /**
     * Publishes the specific type of subscription.
     * All subscriptions with the specified type will be called in the order they were added.
     * 
     * @method publish
     * @param {String} type the type of event to publish.
     * @chainable
     * @since 0.0.1
    */
    function publish(type, data) {
        var subs = this.subscriptions[type] || [];

        subs.forEach(function(sub) {
            sub.callback.call(sub.context, data);
        });

        return this;
    }

    /**
     * Subscribes to the sevice's events.
     * This is a very basic version of pub / sub style of handling events.
     * 
     * Examples:
     *  DiagramService.subscribe('model:change', (model) => {
     *    // where model is the updated model
     *  }, this);
     * 
     * @method subscribe
     * @param {String} type the type of event to subscribe to.
     * @param {Function} callback the callback function to call if the specified event is triggered.
     * @param {Object} context the context in which the callback is being called upon (this is usually the 'this' keyword).
     * @return {Number} the id for the subscription, used to unsubscribe. 
     * @since 0.0.1
     */
    function subscribe(type, callback, context) {
        // check to see if already has a match
        var subs = this.subscriptions[type] || [];

        subs.push({
            callback: callback,
            context: context
        });

        // update subscriptions
        this.subscriptions[type] = subs;

        // for a temp and quick solution use the index the recently added callback
        return subs.length - 1;
    }

    /**
     * Unsubscribes to the service's events.
     * This is a very basic version of pub / sub style of handling events.
     * 
     * @method unsubscribe
     * @param {String} type the type of event to unsubscribe to.
     * @param {Number} id the id for the subscription to unsubscribe to.
     * @chainable
     * @since 0.0.1
     */
    function unsubscribe(type, id) {
        var subs = this.subscriptions[type] || null;

        if (!subs) {
            // no need to do anything since subscription didn't exist to begin with
            return this;
        }

        // make sure id is valid option, need better checking, but fine for now
        if (id >= 0 && id < subs.length) {
            subs.splice(id, 1);
        }

        return this;
    }
} ());

export default PubSubPlugin;
