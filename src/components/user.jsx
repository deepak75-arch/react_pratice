function User(props){


    return (
        <div className="user">
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    )
}

export default User;