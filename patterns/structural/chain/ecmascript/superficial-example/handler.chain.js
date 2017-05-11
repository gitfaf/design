'use strict';

class Handler {
    addSuccessor(successor) {
        this.successor = successor;
        return successor;
    }
    handle(input) {
        console.log('handling ends here.');
    }
}

module.exports = Handler;
