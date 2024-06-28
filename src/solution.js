"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cubeChecker = void 0;
function cubeChecker(volume, side) {
    if (volume <= 0 || side <= 0) {
        return false;
    }
    return volume === side * side * side;
}
exports.cubeChecker = cubeChecker;
