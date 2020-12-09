'use strict';

var async = require('async');
var _ = require('underscore');
var exec = require('child_process').exec;
var request = require('request');
var uuid = require('node-uuid');
var fs = require('fs-extra');
var extractBearerToken =
    require('../common/extractBearerToken.js');

_downloadArchive("https://google.com", extractBearerToken, function () {
})

function _downloadArchive(x, z, next) {
    const command = `curl -o ${x} "${z}"`
    exec(command,
        function (err) {
            if (err)
                return next(
                );

            return next();
        }
    );
}
