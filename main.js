const elForm =document.querySelector(".form")  
const elInput =document.querySelector(".choose") 
const elSubmit =document.querySelector(".submit")
const elresult =document.querySelector(".result")



elForm.addEventListener(`submit`, (e) =>{
    e.preventDefault()
    const result = elInput.value;
    if(elInput.value == 1){
        elresult.textContent = "Monday";
    }else if(elInput.value == 2){
        elresult.textContent = "Tuesday";
    }else if(elInput.value == 3){
        elresult.textContent = "Wednesday";
    }else if(elInput.value == 4){
        elresult.textContent = "Thursday";
    }else if(elInput.value == 5){
        elresult.textContent = "Friday";
    }else if(elInput.value == 6){
        elresult.textContent = "Sunday";
    }else if(elInput.value == 7){
        elresult.textContent = "Saturday";
    }else{
        elresult.textContent = "Sanashni bilasizmi?";
    }
})
