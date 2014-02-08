
var ui = require('ui');

ui('test', function($, el, o) {

    var id = ui.id(this);

    $('.dombo-Test-msg', this).html('Test parameter: ' + o.param + ', Assigned ID: ' + id);

});
