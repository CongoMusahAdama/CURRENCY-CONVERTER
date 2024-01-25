// after defining the variable const,the event listerner is going to be used here
//event listerner is  a function that is called in response to an event being triggered on a specific HTML element

const inserted= document.getElementById("myInput")
inserted.addEventListener("input", function(event){
    let converted=event.target.value           // whatever the user types in 
    let dollarValue= document.getElementById("dollarId") //storing the dollar value here
    dollarValue.innerHTML= converted * 365 //taking whatever the user type in and multiply it by 365


    let poundsValue= document.getElementById("poundsId")  //let store the dollar value
    poundsValue.innerHTML=converted * 420// multiply the user input by 420

    let euroValue= document.getElementById("eurosId")
    euroValue.innerHTML= converted * 440

})