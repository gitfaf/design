'use strict';

const GoodHandler = require('./good-handler.chain');
const BetterHandler = require('./better-handler.chain');
const BestHandler = require('./best-handler.chain');
const Handler = require('./handler.chain');

function run () {
    let gHandler = new GoodHandler();
    let bHandler = new BetterHandler();
    let bestHandler = new BestHandler();
    gHandler.addSuccessor(bHandler).addSuccessor(bestHandler).addSuccessor(new Handler());
    let input = {
        tag: 'good better best',
        message: 'this is the message that needs processing.'
    };
    gHandler.handle(input);
}

module.exports = {
  run
};
