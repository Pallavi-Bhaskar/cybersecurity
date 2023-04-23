import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsFillChatLeftTextFill, BsFillBellFill } from "react-icons/bs";

function BasicExample() {
  return (
    // <Navbar bg="white" expand="lg" style={{ maxWidth: "100%" }}>
    //   <Container style={{ marginRight: "20px", marginLeft: "20px" }}>
    //     <img src="" alt="/img" />
    //     <Navbar.Brand href="#home">logo</Navbar.Brand>

    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>

    //         <Nav.Link href="#link">All Jobs</Nav.Link>
    //         <Nav.Link href="#link">Browse Candidates</Nav.Link>
    //         <Nav.Link href="#link">Employers</Nav.Link>
    //         <Nav.Link href="#link">Recruiters</Nav.Link>
    //         <Nav.Link href="#link">Free Resources</Nav.Link>
    //         <div class="d-flex justify-content-right">
    //           <Nav.Link href="#link">
    //             <BsFillChatLeftTextFill />
    //           </Nav.Link>
    //           <Nav.Link href="#link">
    //             <BsFillBellFill />
    //           </Nav.Link>
    //           <div style={{ marginRight: "20px" }}>
    //             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //               <NavDropdown.Item href="#action/3.1">
    //                 My Profile
    //               </NavDropdown.Item>
    //               <NavDropdown.Item href="#action/3.2">
    //                 Settings
    //               </NavDropdown.Item>
    //               <NavDropdown.Item href="#action/3.3">Logout</NavDropdown.Item>
    //               <NavDropdown.Divider />
    //             </NavDropdown>
    //           </div>
    //         </div>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid" style={{ marginLeft: "20px" }}>
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
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
            <BsFillBellFill />
          </div>
          <div class="d-flex justify-content-end">
            <BsFillChatLeftTextFill />
          </div>
          <div class="d-flex justify-content-end">
            <a class="navbar-brand" href="#">
              <img src="pic.jpg" alt="photo" width="30" height="24" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BasicExample;
