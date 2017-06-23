const kg = 0.45
const libras = 2.20

export default function Conversor(num,uniInicial,uniFinal) {
	let resultado = 0
    /* de kilogramo a libras*/
    if((uniInicial == 'kg')&&(uniFinal == 'libras')){
    	let resultado = Math.round(num*libras)
    	return  `${resultado} ${uniFinal}`
    }
    /* de libras a kilogramo */
    if((uniInicial == 'libras')&&(uniFinal == 'kg')){
    	let resultado = Math.round(num*kg)
    	return  `${resultado} ${uniInicial}`
    } 

}