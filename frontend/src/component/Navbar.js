import React from "react";

function Navbar() {
  // Fetching the user from localStorage or setting a default value
  let user = JSON.parse(localStorage.getItem("currentUser"));

  if (!user) {
    user = { name: "Dilki" }; // Default user name if not found
  }

  // Log out function to remove user data from localStorage
  function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = '/login';
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
        <a className="navbar-brand" href="/home">
          CampZip
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars" style={{ color: 'white' }}></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {user ? (
              <>
                {/* Dropdown for logged-in users */}
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-user"></i> {user.name}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/profile">Profile</a>
                    <a className="dropdown-item" href="#" onClick={logout}>Log out</a>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Navigation links for non-logged-in users */}
                <li className="nav-item">
                  <a className="nav-link active" href="/register">
                    Register
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Login
                  </a>
                </li>
              </>
            )}
          </ul>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
