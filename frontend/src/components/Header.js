
import { Link } from "react-router-dom"
import Search from "./Search"
import { Button } from 'react-bootstrap';
export default function Header({ cartItems }) {
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('Logged out successfully');
        window.location.href = '/';
    };
    return (
        <nav className="navbar row">
            <div className="col-12 col-md-3">
                <div className="navbar-brand">
                    <Link to="/"><img width="130px" src="/images/npvrLogo.png" /></Link>

                </div>
            </div>

            <div className="col-12 col-md-6 mt-2 mt-md-0">
                <Search />
            </div>

            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                <Link to={"/cart"}>
                    <span id="cart" className="ml-3">Cart</span>
                    <span className="ml-1" id="cart_count">{cartItems.length}</span>
                </Link>
                {token ? (
                    <Button onClick={handleLogout} variant="danger" className="ml-3">Logout</Button>
                ) : (
                    <>
                        <Link to="/login">
                            <Button variant="primary" className="ml-3">Login</Button>
                        </Link>
                        <Link to="/register">
                            <Button variant="secondary" className="ml-2">Register</Button>
                        </Link>
                    </>
                )}

            </div>
        </nav>

    )
}