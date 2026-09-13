function Navbar(){
    const name ="deeepak";
    return (
        <nav className="navbar">
            <h1 className="logo">React</h1>
            <h2>{name}</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar