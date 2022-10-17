import {useState, useEffect} from "react"
import axios from "axios"

const defaultForm = {
    email: "",
    username: "",
    password: "",
}

function NewUser(){

    const[newUserForm,setNew] = useState(defaultForm)

    // useEffect(()=>{
       
    //     },
    //     [])
    
    function createUser(event){
        const delay = ()=>{
            setTimeout(()=>{
            window.location.href='/user/login/'
        },2000)}
        
       
        axios.post("/newuser/", newUserForm)
        .then((response)=>{
            console.log(response.data)
            console.log(newUserForm)
        })
        setNew((defaultForm))

        event.preventDefault()
        delay()
        

            
        }
    

    function handleChange(event){
        
            const{value,name}= event.target
            setNew(prevAdd => ({
                ...prevAdd, [name]: value
            }) )
            console.log(setNew)
           }

    

      
        
      
      return(
     
      <div className="profile-feed-container new">
        <h1>new user</h1>
         <form className="create-post">
          <input onChange={handleChange} text={newUserForm.username} name="email" placeholder="email" value={newUserForm.email} />
          <input onChange={handleChange} text={newUserForm.email} name="username" placeholder="username" value={newUserForm.username} />
          <input onChange={handleChange} type='password' text={newUserForm.password} name="password" placeholder="password" value={newUserForm.password} />
          <input type='submit' value='add user' className="btn" onClick={createUser}></input>
        </form>
       

       
      
      </div>
      )
     

      
    }
   export default NewUser