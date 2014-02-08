
var $ = require('dom'),
    trigger = require('trigger-event');

$.extend = require('extend');

$.isFunction = function(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
};

$.use({
    eq: function(i) {
        return this.at(i);
    },
    children: function() {
        var set = [];
        this.forEach(function() {
            for (var i = 0, len = this.children.length; i < len; i++) {
                set.push(this.children[i]);
            }
        });
        return $(set);
    },
    trigger: function(name, options) {
        trigger(this[0], name, options);
    },
    show: function() {
        return this.removeClass('u-isHidden');
    },
    hide: function() {
        return this.addClass('u-isHidden');
    }
});

module.exports = $;
