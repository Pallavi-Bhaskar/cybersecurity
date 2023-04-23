import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsFillChatLeftTextFill, BsFillBellFill } from "react-icons/bs";

function BasicExample() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid" style={{ marginLeft: "20px" }}>
        <a class="navbar-brand" href="#">
          <img
            src="brain.png"
            alt="photo"
            height="32"
            width="30"
            style={{
              marginLeft: "10px",
              marginRight: "5px",
              borderRadius: "20px",
            }}
          />
        </a>
        <a class="navbar-brand" href="#">
          Logo
        </a>

        {/* <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
          {/* <form class="d-flex" role="search"> */}
          {/* <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button> */}

          {/* </form> */}

          <div
            class="d-flex justify-content-end"
            style={{ marginRight: "20px" }}
          >
            <BsFillChatLeftTextFill />
          </div>
          <div class="d-flex justify-content-end me-3">
            <BsFillBellFill />
          </div>
          <div class="d-flex justify-content-end">
            <a class="navbar-brand" href="#">
              <img
                src="pic.jpg"
                alt="photo"
                width="30"
                height="27"
                style={{ marginLeft: "10px", borderRadius: "20px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BasicExample;
