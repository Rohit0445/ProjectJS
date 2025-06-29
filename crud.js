let FetchData=async()=>{
    let url='http://localhost:3000/movie'

    let res= await fetch(url,{method:'GET'})

    let data= await res.json()

    showdata(data)

}
let searchh=async()=>{

    let searchinp=document.querySelector("#searchinp").value.toLowerCase()

    let url='http://localhost:3000/movie'

    let res= await fetch(url)
    let data = await res.json()


    let filterdata = data.filter((e)=>{
        return e.name.toLowerCase().includes(searchinp) || e.age.toString().includes(searchinp)
    })

    showdata(filterdata)
}

let showdata=(data)=>{

    let show=document.querySelector("#display")
    show.innerHTML=""
    data.map((e)=>{

        show.innerHTML+=`
                 <tr>
                     <td>${e.name} </td>        
                     <td>${e.age} </td>        
                     <td>${e.number} </td>        
                     <td>${e.city} </td>        
                     <td>${e.date} </td>        
                     <td>${e.time} </td>        
                     <td>${e.seat} </td>        
                     <td>${e.total*e.seat} </td>        
                     <td onclick="Del('${e.id}')">Delete </td>  
                     <td onclick="formopen()">Update </td>
                     
                </tr>
                             
        
        
    
        `
    })

    return false

}

let Del=(id)=>{
    let url = `http://localhost:3000/movie/${id}`

     fetch(url,{method:"DELETE"})

     
}

let insertdata=()=>{
    let url = `http://localhost:3000/movie`

    fetch(url,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },

        body:JSON.stringify({
            name:document.querySelector("#name").value,
            age:document.querySelector("#age").value,
            number:document.querySelector("#mobile").value,
            city:document.querySelector("#City").value,
            date:document.querySelector("#date").value,
            time:document.querySelector("#time").value,
            seat:document.querySelector("#seats").value,
            total:200
             
            
        }

        )

    })

    Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your Booking has been Done",
    showConfirmButton: false,
    timer: 3500
    
});

   location.href="home.html"
   return false
     
}


let formopen= ()=>{


    // let url = `http://localhost:3000/movie/${id}` 

    // let res= await fetch(url)
    // let data = await res.json()

    // let formdata = ` <form >
    //     Enter Name <input type="text" id="upname"  required> <br><br>
    //     Enter Age <input type="number" id="upage"  required><br><br>
    //     Enter Mobile.No <input type="number" id="upmobile" required><br><br>
       

    //      Enter City <select name="" id="upCity"  required>
    //         <option value="">Select City</option>
    //         <option value="Bhopal">Bhopal</option>
    //         <option value="Sehore">Sehore</option>
    //         <option value="Vidisha">Vidisha</option>
    //         <option value="Mumbai">Mumbai</option>
    //         <option value="Indore">Indore</option>
    //         <option value="Ujjain">Ujjain</option>
    //      </select> <br><br>




    //     Enter Date <input type="date" id="update"  required><br><br>


    //     select time <select name="" id="uptime"  required>
    //     <option value="">Select Time</option>
    //     <option value="2:30">2:30</option>
    //     <option value="5:30">5:30</option>
    //     <option value="8:30">8:30</option>
    //     <option value="12:30">12:30</option>
    
    //     </select><br><br>


    //     Enter Number of Seats <input id="upseat" type="number"  required><br><br>
        
    //     <input type="submit" name="" id="submitbtn" value="Update">

    //         </form>

    
    // `

    let form = document.querySelector("#updateform")
    form.innerHTML="ye nahi chal raha"
    return false 
   
}

// let UpdateForm=(id)=>{

//        Name = document.querySelector("#upname").value,
//        Age = document.querySelector("#upage").value,
//        Number= document.querySelector("#upmoible").value,
//        City=document.querySelector("#upCity").value,
//        Date=document.querySelector("#update").value,
//        Time=document.querySelector("#uptime").value,
//        Seat=document.querySelector("#upseats").value

//        let url=`http://localhost:3000/movie/${id}`

//        fetch(url,{
//         method:"PUT",
//         headers:{
//         "Content-type":"application/json"
//         },

//         body:JSON.stringify(

//             {
//                name: Name,
//       age: Age,
//       number: Number,
//       city: City,
//       date: Date,
//       time: Time,
//       seat: Seat,


//             }
//         )
        

//      })
//       location.href="crud.html"
//       return false     
             
// }

FetchData()