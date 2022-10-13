function Feed(props){
    function handleClick(){
        props.deletion(props.id)
    }
    return(

        <div className='feed-container'>
<h1>Place: {props.place_name}</h1>
<p>Food: {props.food_name}</p>
<button onClick={handleClick}>Delete Post</button>
        </div>
    )
}

export default Feed