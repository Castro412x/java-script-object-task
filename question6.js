let staff = [
  { name: "Amara", department: "Sales", salary: 120000 },
  { name: "Bola", department: "Tech", salary: 250000 },
  { name: "Chibike", department: "Sales", salary: 135000 },
  { name: "Dele", department: "Tech", salary: 310000 }
];
for(i = 0; i < staff.length; i++){
    if(staff[i].department === "Tech"){
        console.log(staff[i].name)
    }
}
let highest = staff[0];
for(i=1;i<staff.length;i++){
    if(staff[i].salary > highest.salary){
        highest = staff[i]
    }   
}
console.log(`Highest Paid Staff : ${highest.name}`) 