let profile = 
    {
        firstName:"Emmanuel",
        lastName:"Nonyerem",
        age:22,
        hobbies:["Coding","Swimming","Reading"]
    }
   
console.log(`${profile.firstName} ${profile.lastName}`)
console.log(profile.hobbies.length)

 for(i=0;i<profile.hobbies.length;i++){
        console.log(profile.hobbies[i])
    }