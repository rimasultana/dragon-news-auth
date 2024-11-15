import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {createLogin, setUser} = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

        createLogin(email, password)
        .then((result)=>{
            setUser(result.user)
         })
         .catch((error)=>{
             console.log("error", error);
         })
     }
  return (
    <div>
      <div className="hero bg-base-200 py-5">
        <div className="card bg-base-100 w-1/3 shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body ">
            <h1 className="text-center font-bold text-2xl">
              Login your account
            </h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Login</button>
            </div>
            <p className="text-center py-2 text-gray-500">
              Dont’t Have An Account ?
              <Link className="text-red-600" to={"/auth/register"}>
                 Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
