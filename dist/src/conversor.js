'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Conversor;
var kg = 0.45;
var libra = 2.20;

function Conversor(num, uniInicial, uniFinal) {
    /* de kilogramo a libra*/
    if (uniInicial == 'kg' && uniFinal == 'libra') return num * libra + ' ' + uniFinal;
    /* de libra a kilogramo */
    if (uniInicial == 'libra' && uniFinal == 'kg') return num * kg + ' ' + uniFinal;
}