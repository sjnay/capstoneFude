import {Link,useParams,useNavigate} from 'react-router-dom'
import {useState, useEffect} from "react"
import axios from "axios"

function ShowPost(){
   const navigate = useNavigate()
    const {id} = useParams()
    console.log(id)

const [onePost, setShowPost]=useState(null)
 useEffect(()=>{
 showPost()},[])
 
 function getPost(){
    axios.get("/posts/")
    .then((response)=>{
        const data = response.data
       
       console.log(data)
    }).catch((error)=>{
        if (error.response){
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
        }
    })
}

    function deletePost(id){
         
        axios.delete(`/posts/${id}`)
        .then((response)=>{
            console.log(response)
            //getPost()
        });
    }

    function showPost(){
        axios.get(`/posts/${id}`)
        .then((response)=>{
            const data = response.data
            console.log(data)
            setShowPost(data)
            // getPost()
        });
    }

    console.log(onePost)
   
    function handleClick(){
        deletePost(id)
        navigate('/myfude/')
        getPost()
        ;}
    

    const loading = ()=>{
        return(
            <h1>loading...</h1>
        )
    }

  const loaded=()=>{
    return(
        <div>
            <Link to='/myfude/'>  <h1>back</h1></Link>
            <div>
        <h1>{onePost[0].food_name}</h1>
        <p>{onePost[0].place_name}</p>
        <img src={onePost[0].food_img}></img>
        <p>{onePost[0].food_review}</p>
        <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
            </div>

        
       
       
        </div>)}

return(

<div>

    {onePost?loaded():loading}

</div>

    )

}

export default ShowPost