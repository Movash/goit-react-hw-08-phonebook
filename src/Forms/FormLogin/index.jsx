import React from 'react'
import { Link } from 'react-router-dom';

const FormLogin = ({login}) => {

  const handleSubmit = evt => {
    evt.preventDefault();
    const { email, password } = evt.target.elements;
    login({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <div
      className="card mx-auto border border-dark-subtle border-3"
      style={{ width: '450px', marginTop: '180px' }}
    >
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary d-block mx-auto w-25"
          >
            Login
          </button>
        </form>
        <div className="d-flex justify-content-center align-items-center">
          Don't have a profile?
          <Link to="/registration" className="btn btn-link">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FormLogin