// Callback Functions
const kvad = (arr, callback) => {
    
    for (let el in arr) {
        callback(arr,el) ;  
    }
}
const arr = [1,2,3,4,5];
kvad(arr, function(mas,i){
    mas[i]=mas[i]**2;
});
for(let i of arr){
    console.log(i);
}