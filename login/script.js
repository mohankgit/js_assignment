const form = document.querySelector("form");
eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");

form.onsubmit = (e)=>{
  e.preventDefault(); 

  (eInput.value == "") ? eField.classList.add("error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("error") : checkPass();


  eInput.onkeyup = ()=>{checkEmail();}
  pInput.onkeyup = ()=>{checkPass();}

  function checkEmail(){
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; 
    if(!eInput.value.match(pattern)){
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){
    if(pInput.value.length<8){
      pField.classList.add("error");
      pField.classList.remove("valid");
      let perrorTxt = pField.querySelector(".error-txt");
      (pInput.value.length != "") ? perrorTxt.innerText = "Password must be at least 8 characters" : perrorTxt.innerText = "Password can't be blank"; 

    }else if(pInput.value.length>24){ 
      pField.classList.add("error");
      pField.classList.remove("valid");
      let perrorTxt = pField.querySelector(".error-txt");
      (pInput.value.length != "") ? perrorTxt.innerText = "Password do not exceed 24 characters" : perrorTxt.innerText = "Password can't be blank"; 

    }
    else{
      pField.classList.remove("error");
      pField.classList.add("valid");
    }    
  }

  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action");
  }
}
