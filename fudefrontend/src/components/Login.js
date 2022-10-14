function Login(){

    return(
        <div>
        <h1 class="title">Log In</h1>
<form method="post" action="{% url 'login' %}">
   
    <input type="submit" class="btn" value="login" />
    <input type="hidden" name="next" value="{{ next }}" />
</form>
</div>


    )
}