function Feed(props){
    function handleClick(){
        props.deletion(props.id)
    }
    return(

        <div className='post-container'>
<h1>Place: {props.place_name}</h1>
<p>Food: {props.food_name}</p>
<span className="material-symbols-outlined"

onClick={handleClick}>delete</span>
        </div>
    )
}

export default Feed