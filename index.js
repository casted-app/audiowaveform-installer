const fs = require('fs')
const path = require('path')
const verifyFile = require('./lib/verify-file')

const binary = 'audiowaveform'
const topLevelPath = path.resolve(__dirname.substr(0, __dirname.indexOf('node_modules')), 'node_modules', 'audiowaveform-installer', 'bin');
const npm3Path = path.resolve(__dirname, '..', 'bin');
const npm2Path = path.resolve(__dirname, 'node_modules', 'audiowaveform-installer', 'bin');

const topLevelBinary = path.join(topLevelPath, binary);
const npm3Binary = path.join(npm3Path, binary);
const npm2Binary = path.join(npm2Path, binary);

let audiowaveformPath;

if (verifyFile(npm3Binary)) {
    audiowaveformPath = npm3Binary;
} else if (verifyFile(npm2Binary)) {
    audiowaveformPath = npm2Binary;
} else if (verifyFile(topLevelBinary)) {
    audiowaveformPath = topLevelBinary;
} else {
    throw new Error('Could not find audiowaveform executable, tried "' + npm3Binary + '", "' + npm2Binary + '" and "' + topLevelBinary + '"');
}

module.exports = audiowaveformPath