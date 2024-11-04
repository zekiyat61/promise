function delaye(ms){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
           resolve("resolved") 
        }, 2000);
    })
}

delaye().then((data)=>{
    console.log(data)
})
function fetchdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
const number=(Math.floor(Math.random()*100)+1);
      resolve(number)
        },2000) 
    })
}
fetchdata().then((number)=>{
    console.log(number)
})
function processData(num){
    return new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve(num*2)
}, 2000);
    })
}
processData(12).then((number)=>{
    console.log(number)
})
function fetchdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
const number=(Math.floor(Math.random()*100)+1);
      resolve(number)
        },2000) 
    })
}
function processData(num){
    return new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve(num*2)
}, 2000);
    })
}
fetchdata().then((number)=>processData(number))
.then((processData)=>{
    console.log(processData)
})
