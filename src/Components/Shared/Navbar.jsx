import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-secondary">
            <div className=" container ">
                <Link className="navbar-brand fs-1 fw-bolder text-white" to="/">TransmissionModule</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fw-bold" to="/connectionList">New Connection Point</Link>
                        </li>


                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle fw-bold" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                New Connection
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/newConnection">Save New Point</Link></li>
                                <li><Link className="dropdown-item" to="/newLoop">New Loop</Link></li>
                                <li><Link className="dropdown-item" to="/newLoop">New Pop</Link></li>
                                <li><Link className="dropdown-item" to="/newLoop">New TJbox</Link></li>
                                <li><Link className="dropdown-item" to="/newLoop">New Customers</Link></li>
                                <li><Link className="dropdown-item" to="/newLoop">New Companies</Link></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle fw-bold" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                UserName
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/signup">SignUp</Link></li>
                                <li><Link className="dropdown-item" to="/login">Login</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="#">Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit">Search</button>
                    </form> */}
                </div>
            </div>
        </nav>

    );
};

export default Navbar; 