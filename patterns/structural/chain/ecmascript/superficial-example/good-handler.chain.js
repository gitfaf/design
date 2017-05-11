'use strict';

const Handler = require('./handler.chain');

class GoodHandler extends Handler {
    constructor() {
        super();
    }
    handle(input) {
        if(input.tag.indexOf('good') > -1) {
            console.log('GoodHandler handles:', input);   
        }
        this.successor.handle(input);
    }
}

module.exports = GoodHandler;
