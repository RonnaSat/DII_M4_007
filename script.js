let income = 999999;
let tax;
if (income > 5000000) {
    tax = ((income - 5000000) * 0.35) + 1265000;
}
else if (income > 2000000) {
    tax = ((income - 2000000) * 0.30) + 365000;
}
else if (income > 1000000) {
    tax = ((income - 1000000) * 0.25) + 115000;
}
else if (income > 750000) {
    tax = ((income - 750000) * 0.20) + 65000;
}
else if (income > 500000) {
    tax = ((income - 500000) * 0.15) + 27500;
}
else if (income > 300000) {
    tax = ((income - 300000) * 0.10) + 7500;
}
else if (income > 150000) {
    tax = ((income - 150000) * 0.05);
}
else {
    tax = 0;
}
console.log(tax)

let n = 6;
let fac = 1;
if (n >= 0) {
    for (let i = 1; i <= n; i++) {
        fac = fac * i;
    }
    console.log(n + "! = " + fac);
}
else {
    console.log("???");
}


let m = -1;
let fac2 = 1;
let i = 1;
if (m >= 0) {
    while (i <= m) {
        fac2 = fac2 * i;
        i++;
    }
    console.log(m + "! = " + fac2);
}
else {
    console.log("???");
}

// fibo
{
    // fibo for
    let n = 2;
    let f1 = 0;
    let f2 = 1;
    let f;
    if (n == 0) {
        f = 0;
    }
    else if (n == 1) {
        f = 1;
    }
    else if (n >= 2) {
        for (let i = 1; i <= n - 1; i++) {
            f = f1 + f2;
            f1 = f2;
            f2 = f;
        }
    }
    console.log(f);
}
{
    // fibo while
    let n = 2;
    let f1 = 0;
    let f2 = 1;
    let f;
    let temp = 1;
    if (n == 0) {
        f = 0;
    }
    else if (n == 1) {
        f = 1;
    }
    else if (n >= 2) {
        while (temp <= n - 1) {
            f = f1 + f2;
            f1 = f2;
            f2 = f;
            temp++;
        }
    }
    console.log(f);
}
// prime num
{
    let n = 4
    let isPrime = true;
    if (n == 1) {
        isPrime = false;
    }
    else if (n == 2) {
        isPrime = true;
    }
    else if (n > 2) {
        for (let i = 2; i < n; i++) {
            let temp;
            temp = n % i;
            if (temp == 0) {
                isPrime = false;
                break;
            }
        }
    }
    else {
        console.log("????")
    }

    if (isPrime) {
        console.log("prime")
    }
    else {
        console.log("not prime")
    }
}
{
    let n = Math.pow(10,10)
    for (let i = 2; i <= n; i++) {
        let isPrime = true;
        if (i > 2) {
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            console.log(i)
        }
    }

}