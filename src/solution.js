"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiTable = void 0;
function multiTable(number) {
    let mutiplicationTabel = "";
    for (let i = 1; i <= 10; i++) {
        mutiplicationTabel += i + ' * ' + number + ' = ' + i * number + '\n';
    }
    return mutiplicationTabel.trim();
}
exports.multiTable = multiTable;
