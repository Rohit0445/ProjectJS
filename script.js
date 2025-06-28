let validate=()=>{
   let Name = document.querySelector("#name").value.trim()
   let email = document.querySelector("#email").value.trim()
   let number = document.querySelector("#number").value.trim()
   let pass = document.querySelector("#pass").value.trim()
   let cpass = document.querySelector("#cpass").value.trim()
   let name = document.querySelector("#name")

   let errname = document.querySelector("#errname")

   let erremail = document.querySelector("#erremail")

   let errnumber = document.querySelector("#errnumber")

   let errpass = document.querySelector("#errpass")

   let errcpass = document.querySelector("#errcpass")
   

   if(Name==""){
   //  errname.innerHTML="please Enter Name"
       name.style.border="2px solid red"
       return false
   }

   else if(email==""){
    erremail.innerHTML="Please enter email"
    return false
   }

   else if(!(email.includes("@") && email.includes(".com"))){
      erremail.innerHTML="Enter valid Email"
      return false
   }


   else if(number.length!=10){
    errnumber.innerHTML="Please Enter valid number "
    return false
   }

   else if(isNaN(number)){
      errnumber.innerHTML="Please Enter Only number"
      return false
   }

   else if(pass!=cpass){
      errcpass.innerHTML="password dont match"
      return false
   }

   else if(!(pass.match(/[1234567890]/)&&
             pass.match(/[!@#$%^&*()]/)&&
            pass.match(/[a-z]/)&&
         pass.match(/[A-Z]/))){
            errpass.innerHTML="Please create strong password"
            return false
        }


localStorage.setItem("Name",Name)
localStorage.setItem("Email",email)
localStorage.setItem("Number",number)
localStorage.setItem("Password",pass)
localStorage.setItem("Confirm Password",cpass)

location.href="login.html"
return false



}


let login=()=>{

   let inpname = document.querySelector("#loginname").value
   let inppass = document.querySelector("#loginpass").value

   
   let loginname = localStorage.getItem("Name")
   let loginpass = localStorage.getItem("Password")

   if(inpname== loginname && inppass== loginpass){
      location.href="home.html"
      return false
   }

   else {
      alert("Wrong Credentials")
   }

  return false

}


logout=()=>{
   const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You want to LogOut!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, LogOut!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    swalWithBootstrapButtons.fire({
      title: "Logedout!",
      text: "You are sucessfully Logout.",
      icon: "success"
      
    });
    location.href="login.html"
   return false
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "Your are login :)",
      icon: "error"
    });
  }
});

   
}


booknow=()=>{
   location.href="bookingForm.html"
   return false
}

bookings=()=>{
   location.href="crud.html"
   return false
}