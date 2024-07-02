"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pigIt = void 0;
const pigIt = (a) => a.replace(/(\w)(\w+)*/g, "$2$1ay");
exports.pigIt = pigIt;
