 import Logo from "../assets/images/logo.png";

 const Title = () => {
    return (
        <a href="/"><img alt="logo"  className="logo" src={Logo} /></a>
    )
 }
 const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;