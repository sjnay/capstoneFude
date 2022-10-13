function Feed(props){
    function handleClick(){
        props.deletion(props.id)
    }
    return(
<div>
<div className='post-container'>
<h1>Place: {props.place_name}</h1>
<p>Food: {props.food_name}</p>
</div>
<span className="material-symbols-outlined" onClick={handleClick}>delete</span>
</div>     
    )
}

export default Feed