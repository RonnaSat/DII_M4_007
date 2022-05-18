let employee = [5];
employee[0] = {
    "name": "a",
    "age": 68,
    "salary": 75900
}
employee[1] = {
    "name": "b",
    "age": 35,
    "salary": 55400
}
employee[2] = {
    "name": "c",
    "age": 51,
    "salary": 81000
}
employee[3] = {
    "name": "d",
    "age": 76,
    "salary": 111000
}
employee[4] = {
    "name": "e",
    "age": 22,
    "salary": 20500
}

//avgAge
function calAvgAge(arr) {
    let avgAge;
    let ageTemp = 0;
    for (let d of arr) {
        ageTemp += d.age
    }
    avgAge = ageTemp / employee.length;
    return avgAge;
}

//total sal
function calSalSum(arr) {
    let totalSal = 0;
    for (let d of employee) {
        totalSal += d.salary
    }
    return totalSal;
}

//avgTax

function taxCal(income) {
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
    return tax;
}
function calAvgTax(employee) {
    let avgTax;
    let tempTax = 0;
    for (let d of employee) {
        tempTax += taxCal(d.salary * 12);
    }
    avgTax = tempTax / employee.length;
    return avgTax;
}

console.log("salary sum = " + calSalSum(employee) + ", avgAge = " + calAvgAge(employee) + ", Avg Tax = " + calAvgTax(employee));
