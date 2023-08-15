let form = document.getElementById('form');

let signUpLS = [];

form.addEventListener('submit',function(elem){
    elem.preventDefault();

    let signUpObj = {
        username: form.name.value,
        email: form.email.value,
        pass: form.password.value
    }

    if(signUpObj.username == "" || signUpObj.password=="" || signUpObj.email==""){
        alert("Field Empty!");
        return
    }
    
    signUpLS.push(signUpObj);

    localStorage.setItem("signUp",JSON.stringify(signUpLS));
    alert('Successfully Signed Up!');

    setTimeout(function(){
        window.location.href =
          "\signin.html";
    },3000)
})