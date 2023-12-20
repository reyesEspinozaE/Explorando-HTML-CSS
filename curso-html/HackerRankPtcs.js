// A U B
function elementos(){
    let conjuntoA = [1,2,3,4,5,6];
    let conjuntoB = [2,3,4,5,6,7,8];
    let result = [];
    let result2 = 0;

    result = conjuntoA;
    for (let i= 0; i < 7; i++){
        if (result[i +1] != conjuntoB[i]){
            result.push(conjuntoB[i]);   
            result2 = result.length;
        }
    }
    console.log(result2);
}
elementos();

  