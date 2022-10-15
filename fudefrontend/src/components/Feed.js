import {useState, useEffect} from "react"
import {Link,useParams} from 'react-router-dom'
import ShowPost from './ShowPost'
import {Routes,Route} from 'react-router-dom'
import axios from "axios"




function Feed(){

    const [userPost,setPost] = useState(null)
    
    useEffect(()=>{
        getPost()},[])
    
    
        function getPost(){
            axios.get("/posts/")
            .then((response)=>{
                const data = response.data
               
                setPost(data)
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
            getPost()
        });
    }

    // function showPost(id){
    //     axios.get(`/posts/${id}`)
    //     .then((response)=>{
            
    //        getPost()
    //     });
    // }
    // function handleClick(){
    //     deletePost(userPost.id)}

 const loaded = ()=>{ 
   
    const results = userPost.map((post,id)=>{

   
        return(
            <div className='single-post'>
               <Link  to={`/myfude/${post.id}`}> <p>{post.place_name}</p> </Link>
                <img src={post.food_img}/>
                <p>{post.food_name}</p>
                {/* <span className="material-symbols-outlined" onClick={handleClick(post.id)}>delete</span> */}
                <Routes>
                    <Route exact path ={`/myfude/${post.id}`} element={<ShowPost/>}/>
                </Routes>
            </div>
        )
    })
    return results
}


const loading = ()=>{
    return(
        <h1>loading...</h1>
    )
}


    return(

<div className='post-container'>

{userPost? loaded():loading()}


</div>


      


   
    )

}

export default Feed








// {userPost && userPost.map(onePost => 
// key={onePost.id}
// id={onePost.id}
// place_name={onePost.place_name}
// food_name={onePost.food_name} 
// food_img={onePost.food_img}
// deletion ={deletePost}

// )}

