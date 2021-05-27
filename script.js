
//Filling an array using lots of unnecessary actions.
let ar = [];
let n = parseInt(prompt("How many elements will the array hold?"));
let cont = 1;
let x = parseInt(prompt("Min range value?"));
let y = parseInt(prompt("Max range Value?"));
for (let index = 0; index < n; index++) {
    const element = n;
    executar();
    cont++
}
function inserirar(elem){
        let promise = new Promise(function(resolve,reject){
            setTimeout(() => {ar.push(elem);
                let error = false;
                if(!error){
                    resolve();
                }else{
                    reject({msg:"Error jooj"})
                }
            },1000)
        })
        return promise;
}
function listarar(){
    console.log(ar);
}
function rng(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}
async function executar() {
    await inserirar(rng(x, y))
    .then(listarar)
    .catch((error) => {console.log(error.msg)});
}