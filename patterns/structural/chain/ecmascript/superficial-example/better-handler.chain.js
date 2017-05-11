'use strict';

const Handler = require('./handler.chain');

class BetterHandler extends Handler {
    constructor() {
        super();
    }
    handle(input) {
        if(input.tag.indexOf('better') > -1) {
            console.log('BetterHandler handles:', input);
        }
        this.successor.handle(input);
    }
}

module.exports = BetterHandler;
