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
                     <td onclick="update('${e.id}')">Update </td>.
                     
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

FetchData()