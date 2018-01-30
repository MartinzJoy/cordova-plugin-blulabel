 var exec = require('cordova/exec');

exports.customMethod = function (arg0, success, error) {
    exec(success, error, 'callPlugin', 'actionShow', [arg0]);
};
