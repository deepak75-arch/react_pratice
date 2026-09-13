function Usercard({ name,email, designation, location }){
    return(
        <>
        <h1> {name}
        
        <br></br>
        
        {email}
        
        <br></br>

        {designation}</h1>

        <p> {location}</p>
        </>
    )
}

export default Usercard;