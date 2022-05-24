// console.log('loaded')

//create a array of names
let namesOfRegisteredPersons = ['Ann','Lilian','Joy','Nzau'];
// console.log(myList);

//create a new empty array to hold the names to be entered by user
let personsWhoHaveEaten = [];
// console.log(nameKnown);

//define submit function
function submit(){
    // console.log(submit);

    //getting the name entered by user in html
    let nameEnteredByUser = document.getElementById('result').value;
    // console.log(newList);

    //checking if name given by user is included in the array myListi
    let ifNameIsIncluded = namesOfRegisteredPersons.includes(nameEnteredByUser);
    // console.log(nameList);
     
    //if name is included in myList array
    if (ifNameIsIncluded){
        // console.log('You are registered');
        
        //getting name  using id regist to give output
        $('#regist').html("You are registered")
         
        //checking if name entered by user is included in the array of people who have eaten
        let personEaten = personsWhoHaveEaten.includes(nameEnteredByUser)
        // console.log(personEaten);

    //  nameKnown.push(nameEnteredByUser)
        // console.log(nameKnown);

        //checking if the person has eaten
        if (personEaten){
            // console.log("You have eaten");

            //getting name using id ifeaten to give output
            $("#ifeaten").html("You have eaten")
        }else{
            // console.log("You haven't eaten");

            //getting name using id ifeaten to give output
            $("#ifeaten").html("You haven't eaten")

            //pushing name to persons who have eaten if person is taking meal for the first time
            personsWhoHaveEaten.push(nameEnteredByUser)
        }
     

    }else{
        // console.log('you are not registered');

        //getting name using id regist to give output
        $("#regist").html("You are not registered")
    }
}


// $(document).ready(function(){
//   $('#runner').get().reset();
// })

// document.getElementById("reset").reset();
// document.forms[0].reset();


//define reset function
function reset(){
    // console.log(reset)

    //getting value from html by id result and reset the string to empty
    document.getElementById('result').value = '';

//     location.reload();
   
}

// $(document).ready(function(){
//     // console.log('ready')
//     $("reset").click(function(){
//         console.log('ready')
//         $('#result')[0].reset()
//     });
// });

