'use strict';

const Handler = require('./handler.chain');

class BestHandler extends Handler {
    constructor() {
        super();
    }
    handle(input) {
        if(input.tag.indexOf('best') > -1) {
            console.log('BestHandler handles:', input);
        }
        this.successor.handle(input);
    }
}

module.exports = BestHandler;
