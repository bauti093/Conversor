const expect = require('chai').expect
const Conversor = require('..').default

describe('#Conversor', function () {
	it('Convertir de kilogramos a libras.', function () {
		const resultado = Conversor(56,'kg','libra')

		expect(resultado).to.equal('123.20000000000002 libra')
	})
	it('Convertir de libras a kilogramos.', function () {
		const resultado = Conversor(20,'libra','kg')

		expect(resultado).to.equal('9 kg')
	})
})