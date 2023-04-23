import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Categories from "../categories";
import { MDBCheckbox } from "mdb-react-ui-kit";
const Box = () => {
  return (
    <form
      className="card mx-auto w-50"
      style={{
        marginTop: "10px",
        height: "34vh",
        width: "25px",
        height: "100%",
      }}
    >
      <div>
        <div className="card-body">
          <div className="form-group" style={{ margin: "10px" }}>
            <div style={{ textAlign: "left", marginBottom: "10px" }}>
              Find your products
            </div>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <div className="form-group" style={{ margin: "10px 10px" }}>
            <input
              type="password"
              className="form-control"
              placeholder="Re-enter Password"
            />
          </div>
          <div>
            <div class="form-check form-check-inline">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
          </div>
          <Button
            type="button"
            className="btn btn-primary"
            style={{ width: "50%", marginTop: "10px" }}
          >
            <div
              to="/dashboard"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              Search
            </div>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Box;
