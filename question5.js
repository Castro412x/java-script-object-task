let students = [
    {name: "Emmanuel", score: 90},
    {name: "Steve", score: 40},
    {name: "Praise", score: 60}
]
let count = 0;
for(i = 0; i < students.length;i++){
    console.log(students[i])
}
for(i=0; i < students.length; i++){
    if(students[i].score >= 50 ){
        count++
    }    
}
console.log(count)