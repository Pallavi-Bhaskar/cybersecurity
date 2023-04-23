import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Box = () => {
  return (
    <form
      className="card"
      style={{
        marginLeft: "auto",
        marginRight: "30px",
        width: "350px",
        height: "100%",
        float: "right",
      }}
    >
      <div>
        <div className="card-body">
          <div className="form-group">
            <div
              style={{
                textAlign: "left",
                marginBottom: "10px",
                marginTop: "5px",
              }}
            >
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
            style={{
              width: "50%",
              marginTop: "10px",
              background: "#00425A",
              border: "none",
            }}
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
