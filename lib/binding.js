// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

if (typeof __in_napa === 'undefined') {
    var binary = require('node-pre-gyp');
    var path = require('path');
    var binding_path = binary.find(path.resolve(path.join(__dirname, '../package.json')));
    module.exports = require(binding_path);
} else {
    module.exports = process.binding('napa-binding');
}
