// console.log('loaded')

let myList = ['Ann','Lilian','Joy','Nzau'];
// console.log(myList);

let nameKnown = [];
// console.log(nameKnown);

function submit(){
    // console.log(submit);

    let newList = document.getElementById('result').value;
    // console.log(newList);

    let nameList = myList.includes(newList);
    // console.log(nameList);
     
    if (nameList){
        // console.log('You are registered');
        $('#kira').html("You are registered")
         

        let personEaten = nameKnown.includes(newList)
        // console.log(personEaten);

     nameKnown.push(newList)
        // console.log(nameKnown);

        if (personEaten){
            // console.log("You have eaten");
            $("#kara").html("You have eaten")
        }else{
            // console.log("You haven't eaten");
            $("#kara").html("You haven't eaten")
        }
     

    }else{
        // console.log('you are not registered');
        $("#kira").html("You are not registered")
    }
}