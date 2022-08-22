import logo from '../images/airbnb-logo.png'

function Navbar() {
  return (
    <nav>
        <img className="nav--icon" src={logo} alt="logo"/>
    </nav>
  )
}

export default Navbar