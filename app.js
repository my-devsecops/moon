'use strict';

var exec = require('child_process').exec;
var extractBearerToken =
    require('../common/extractBearerToken.js');
_downloadArchive("https://google.com", extractBearerToken, function () {
})

function _downloadArchive(x, z, next) {
    const command = `curl -o "${x}" "${z}"`
    exec(command,
        function (err) {
            if (err)
                return next(
                    new ActErr('zzz')
                );

            return next();
        }
    );
}
