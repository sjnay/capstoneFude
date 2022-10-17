import {useState, useEffect} from "react"
import {Link} from 'react-router-dom'
import axios from "axios"
import  Feed from "./Feed" 
import {Routes,Route} from 'react-router-dom'


const defaultForm = {
    place_name: "",
    food_name: "",
    food_img: "",
    food_review: "",
    food_rating: "",
    created_at: Date.now(),
    user:""

}

function Posts(props){
    
    const [postForm, setPostForm] = useState(defaultForm)

useEffect(()=>{
    getPost()
    },
    [])


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

    function createPost(event){
       
        axios.post("/posts/", postForm)
        .then((response)=>{
            console.log(response.data)
            getPost()
        })
console.log(postForm)
        setPostForm((defaultForm))
        event.preventDefault()
}



function handleChange(event){
    const{value,name}= event.target
    setPostForm(prevPost => ({
        ...prevPost, [name]: value
    }) )
   }




return(
    <div>
    <nav>
    <Link to='/myfude'> back to profile</Link>
    </nav>

    
    <div className='profile-feed-container'>
       
    <h1>new post</h1>
      <form className="create-post">
          <input onChange={handleChange} text={postForm.place_name} name="place_name" placeholder="where did you go?" value={postForm.place_name} />
          <input onChange={handleChange} text={postForm.food_name} name="food_name" placeholder="what did you eat?" value={postForm.food_name} />
          <input onChange={handleChange} text={postForm.food_img} name="food_img" placeholder="image" value={postForm.food_img} />
          <textarea onChange={handleChange} text={postForm.food_review} name="food_review" placeholder="describe it" value={postForm.food_review} />
          <input onChange={handleChange} type='number' text={postForm.food_rating} name="food_rating" placeholder="rating out of 10" value={postForm.food_rating} />
          <input onChange={handleChange} type='hidden' text={postForm.created_at} name="created_at" value={Date.now()} />
          <input onChange={handleChange}  type='hidden'text={postForm.user} name="created_at" value={props.user} />
          <input type='submit' value='post' className='btn' onClick={createPost}/>
      </form>

      </div>
    </div>

)

}

export default Posts