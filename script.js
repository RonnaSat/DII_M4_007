let score =0;
let grade;
if(score>=80){
    grade="A";
}
else if(score>=75){
    grade="B+";
}
else if(score>=70){
    grade="B";
}
else if(score>=65){
    grade="C+";
}
else if(score>=60){
    grade="C";
}
else if(score>=55){
    grade="D+";
}
else if(score>=50){
    grade="D";
}
else if(score>0){
    grade="F";
}
else if(score==0){
    grade="???";
}
console.log(score+" "+grade);