const Navbar = ({handleSideNav}) => {
    return (
        <div className="nav" style={{width:"100%", height:"75px", backgroundColor:"black"}}>
            <li><button class="button" onClick={()=>handleSideNav()}style={{width:"70px", height:"40px", backgroundColor:"red", borderRadius:"25px", padding:"3px"}}>Menu</button></li>
            <li><a class="link">Home</a></li>
            <li><a class="link">Dashboard</a></li>
            <li><a class="link">Sales</a></li>

        </div>
    );
}

export default Navbar;