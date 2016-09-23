#!/usr/bin/env node
'use strict';

var deburr = require('lodash.deburr');

var transformer = new (require('stream').Transform);
transformer._transform = function(chunk, enc, cb) {
    cb(null, deburr(chunk));
};

process.stdin.pipe(transformer).pipe(process.stdout);
