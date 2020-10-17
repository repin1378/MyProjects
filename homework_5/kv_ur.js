console.log('Решение квадратного уравнения. Функция kvad(a,b,c)');
function kvad(a,b,c){
    let dis=b**2-4*a*c;
    if(dis<0){
        console.log('Нет действительных корней');
    }
    else if(dis==0){
        let x=(-b+Math.sqrt(dis))/2*a;
        console.log(x);
    }
    else{
        let x1=(-b+Math.sqrt(dis))/2*a;
        let x2=(-b-Math.sqrt(dis))/2*a;
        console.log(x1);
        console.log(x2);
    }

}