//01.Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i =0; i<=10; i++){
    console.log(i+" for")
}
//
let j = 0;
while(j<=10){
    console.log(j+" while")
    j++
}
//
let k = 0;
do{
    console.log(k+" doWhile")
    k++
}while(k<=10)

//Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let a = 10; a>=0 ; a--){
    console.log(a+" for")
}
//
let b = 10;
while(b>=0){
    console.log(b +" while")
    b--
}
//
let c = 10;
do{
    console.log(c+" doWhile")
    c--
}while(c>=0)

//03.Iterate 0 to n using for loop !!same as previus 

//04.Write a loop that makes pyramid pattern using console.log():
let f = ""
for (let d = 0; d < 5; d++){
        f += "#"
        console.log(f)
}
//05.Use loop to print 2 x 2 = 4  pattern
let g = 0;
while(g<=10){
    console.log(g+" * "+g+" = "+g*g) 
    g++
}
//06.Using loop print i    i^2   i^3 pattern
for (let i = 0; i<=10; i++){
    console.log(i+"     "+i*i+"     "+i*i*i)
}
//07.Use for loop to iterate from 0 to 100 and print only even numbers
for(let j = 0;j<=100;j++){
    if(j%2==0){
        console.log(j)
    }
}
//08 Use for loop to iterate from 0 to 100 and print only odd numbers
for (let y=0 ;y<=100;y++){
    if(y%2!=0){
        console.log(y)
    }
}
//09.Use for loop to iterate from 0 to 100 and print only prime numbers

//10.Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum1 = 0;
for(let k=0; k<=100;k++){
    sum1 +=k
    
}
console.log(`${sum1} is sum of all numbers`)
//11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.