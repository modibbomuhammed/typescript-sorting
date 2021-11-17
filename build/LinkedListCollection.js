"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(data) {
        this.data = data;
        this.head = null;
        this.data = data;
    }
    return LinkedList;
}());
exports.LinkedList = LinkedList;
