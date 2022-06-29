let nombrePlanetas = Array('Tierra','Marte');
let nombrePlanetasFor = Array('Tierra','Marte','Jupiter');
let distancia = [5,3,'67'];
const tamaño = [10,20,30];

console.log(nombrePlanetas);
console.log(distancia);
console.log(tamaño);

console.log('-----------------------------');
//Ciclo while
let i = 0;
while( i <= nombrePlanetas.length - 1 ){
    console.log(i);
    console.log(nombrePlanetas[i]);
    i = i + 1;
}

console.log('-----------------------------');
//Ciclo for
for (let index = 0; index < nombrePlanetasFor.length; index++) {
    console.log(nombrePlanetasFor[index]);
}

//Cilo For In
console.log('-----------------------------');
for (const key in nombrePlanetas) {
    console.log(nombrePlanetas[key]);
}

//Ciclo For Of
console.log('-----------------------------');
for (const planeta of nombrePlanetas) {
    console.log(planeta);
}

//Operador de igualdad
console.log('-----------------------------');
for( const key in distancia ){
    if( distancia[key] == '5'){
        console.log('Se encontro la distancia');
    }else{
        console.log('No se encontro la distancia');
    }
}

console.log('-----------------------------');
for( const key in distancia ){
    if( distancia[key] === '5'){
        console.log('Se encontro la distancia');
    }else{
        console.log('No se encontro la distancia');
    }
}

//ForEach
console.log('-----------------------------');
nombrePlanetasFor.forEach( (value,index,array) => {
    console.log( 'planeta',index,value )
})

//Map
console.log('-----------------------------');
nombrePlanetasFor.map( (planetas,index) => {
    return(
        console.log(`El planeta ${planetas} tiene tamaño de :${tamaño[index]}`)
    )
})

console.log('-----------------------------');
let resultadoMap = nombrePlanetasFor.map( ( planetas,index ) => {
    return( `El planeta ${planetas} tiene tamaño de: ${tamaño[index]}` )
})

console.log(resultadoMap);