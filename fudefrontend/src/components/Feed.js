import {useState, useEffect} from "react"
import {Link,useParams} from 'react-router-dom'
import ShowPost from './ShowPost'
import {Routes,Route} from 'react-router-dom'
import axios from "axios"
import MediaCard from "./PostCard"
import Nav from "./Nav"




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

   
 const loaded = ()=>{ 
   
    const results = userPost.map((post,id)=>{

   
        return(
           <div className="feed-container">
           
            <div className='feed'>
               <Link  to={`/myfude/${post.id}`}> 
                <MediaCard
                image={post.food_img}
                food_item={post.food_name}
                food_place={post.place_name}
                review={post.food_review}
                rating={post.food_rating}
                user={post.user}
                />
              </Link> 
                <Routes>
                    <Route exact path ={`/myfude/${post.id}`} element={<ShowPost/>}/>
                </Routes>
            </div>
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

