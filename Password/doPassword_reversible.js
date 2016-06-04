var crypto = require('crypto');

var cryptkey   = crypto.createHash('sha256').update('__tazai_wolf__key').digest();
var iv         = '1234567890000000';

var doPassword = {
    //解密
    decode : function(cryptkey, iv, secretdata) {
        var decipher = crypto.createDecipheriv('aes-256-cbc', cryptkey, iv);
        var decoded  = decipher.update(secretdata, 'base64', 'utf8');

        decoded += decipher.final( 'utf8' );
        return decoded;
    },

    //加密
    encode : function(cryptkey, iv, cleardata) {
        var encipher = crypto.createCipheriv('aes-256-cbc', cryptkey, iv);
        var encoded  = encipher.update(cleardata, 'utf8', 'base64');

        encoded += encipher.final( 'base64' );
        return encoded;
    },

    // 封装加密
    cipher: function(password) {
        var enc = this.encode(cryptkey, iv, password);
        return enc;
    },

    // 封装解密
    decipher: function(password) {
        var dec = this.decode(cryptkey, iv, password);
        return dec;
    }
};

module.exports = doPassword;
