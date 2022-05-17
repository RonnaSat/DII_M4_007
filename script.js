let income =999999;
let tax;
if(income>5000000){
    tax = ((income - 5000000) * 0.35)+1265000;
}
else if(income>2000000){
    tax = ((income - 2000000) * 0.30)+365000;
}
else if(income>1000000){
    tax = ((income - 1000000) * 0.25)+115000;
}
else if(income>750000){
    tax = ((income - 750000) * 0.20)+65000;
}
else if(income>500000){
    tax = ((income - 500000) * 0.15)+27500;
}
else if(income>300000){
    tax = ((income - 300000) * 0.10)+7500;
}
else if(income>150000){
    tax = ((income - 150000) * 0.05);
}
else{
    tax = 0;
}
console.log(tax)

let n = 6;
let fac = 1;
if(n>=0){
    for(let i = 1;i<=n;i++){
        fac = fac*i;
    }
    console.log(n+"! = "+fac);
}
else{
    console.log("???");
}


let m = -1;
let fac2 = 1;
let i = 1;
if(m>=0){
    while(i<=m){
        fac2 = fac2*i;
        i++;
    }
    console.log(m+"! = "+fac2);
}
else{
    console.log("???");
}

{
    let n = 5;
    let f1=0;
    let f2=1;
    let f;
    if(n=0){
        f=0;
    }
    else if(n=1){
        f=1;
    }
    else if(n>=3){
        for(let i=1;i<=n-2;i++){
            f=f1+f2;
            f1=f2;
            f2=f;
        }
    }
    console.log(f);
}