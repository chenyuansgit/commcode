var crypto = require('crypto');

var doPassword = {
    cipher: function(password) { // 加密
        var sha1 = crypto.createHash('sha1');
        sha1.update(password);
        var cipherPassword = sha1.digest('hex');
        return cipherPassword;
    }
};

module.exports = doPassword;
