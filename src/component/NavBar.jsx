import Dropdown from 'react-bootstrap/Dropdown';
export default function NavBar() {
  return (
    <div>
        <div className="accounticon">
        <Dropdown>
        <Dropdown.Toggle variant="" id="dropdown-basic">
        <img src="src/assets/Untitled.png" alt="test" className="iconimage" />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Manage Account</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Payment</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Settings</Dropdown.Item>
      </Dropdown.Menu>
        </Dropdown>
        </div>
        <div className="Nameofuser">
        <h1>Hi Erez,</h1>
        <h3>Its looking like a slow day.</h3>
        </div>
        
    </div>
  )
}