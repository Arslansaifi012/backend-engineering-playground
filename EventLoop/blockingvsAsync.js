
const fs =require('fs')

console. log ( '1.Start Of script');
// Synchronous(blocking) operation
console. log ( '2.Reading file synchronously' ) ;
const dataSync = fs . readFi1eSync ( ' user—details . txt ' ,'utf8');
    console. log ( '3Synchronous read complete' ) ;
// Asynchronous (non—blocking) operation
console. log ('Reading file asynchronously');
fs . readFiIe ( 'user—details' . txt ,'utf8', (err, dataAsync)=>{
    if (err) throw err ;
    console.log('6. Asyncronus read Complete');
}) ;

console.log('5. End of script');

