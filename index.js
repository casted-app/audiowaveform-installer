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

const topLevelPackage = path.join(topLevelPath, 'package.json');
const npm3Package = path.join(npm3Path, 'package.json');
const npm2Package = path.join(npm2Path, 'package.json');

let audiowaveformPath, packageJson;

if (verifyFile(npm3Binary)) {
    audiowaveformPath = npm3Binary;
    packageJson = require(npm3Package);
} else if (verifyFile(npm2Binary)) {
    audiowaveformPath = npm2Binary;
    packageJson = require(npm2Package);
} else if (verifyFile(topLevelBinary)) {
    audiowaveformPath = topLevelBinary;
    packageJson = require(topLevelPackage);
} else {
    throw 'Could not find audiowaveform executable, tried "' + npm3Binary + '", "' + npm2Binary + '" and "' + topLevelBinary + '"';
}

const version = packageJson.ffmpeg || packageJson.version;
const url = packageJson.homepage;

module.exports = audiowaveformPath