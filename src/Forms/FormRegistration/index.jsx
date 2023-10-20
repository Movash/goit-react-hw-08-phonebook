const FormRegistration = ({ registration }) => {
  
  const handleSubmit = evt => {
    evt.preventDefault();
    const { name, email, password } = evt.target.elements;
    registration({
      name: name.value,
      email: email.value,
      password: password.value,
    });
  };

  return (
    <div className="card mx-auto mt-5" style={{ width: 450 }}>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputName" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control mb-3"
              id="exampleInputName"
            />
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
          <button type="submit" className="btn btn-primary d-block mx-auto">
            Registration
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormRegistration