import { Link } from "react-router-dom";
import { APP_URLS } from "../../helpers/routes";
import loginImage from "../../assets/theme/media/svg/illustrations/login-visual-1.svg";
import "../../assets/theme/css/pages/login/login-1.css";

function Login() {
  return (
    <div className="d-flex flex-column flex-root">
      <div
        className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
        id="kt_login"
      >
        <div
          className="login-aside d-flex flex-column flex-row-auto"
          style={{ backgroundColor: "#F2C98A" }}
        >
          <div className="d-flex flex-column-auto flex-column pt-lg-40 pt-15">
            <a href="/login" className="text-center mb-10">
              <img
                src="assets/media/logos/logo-letter-1.png"
                className="max-h-70px"
                alt=""
              />
            </a>
            <h3
              className="font-weight-bolder text-center font-size-h4 font-size-h1-lg"
              style={{ color: "#986923" }}
            >
              La herramienta ideal
              <br />
              para tu negocio
            </h3>
          </div>
          <div
            className="aside-img d-flex flex-row-fluid bgi-no-repeat bgi-position-y-bottom bgi-position-x-center"
            style={{ backgroundImage: `url(${loginImage})` }}
          ></div>
        </div>
        <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
          <div className="d-flex flex-column-fluid flex-center">
            <div className="login-form login-signin">
              <form
                className="form"
                noValidate="novalidate"
                id="kt_login_signin_form"
              >
                <div className="pb-13 pt-lg-0 pt-5">
                  <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                    Bienvenido
                  </h3>
                </div>
                <div className="form-group">
                  <label className="font-size-h6 font-weight-bolder text-dark">
                    Usuario
                  </label>
                  <input
                    className="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="text"
                    name="username"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <div className="d-flex justify-content-between mt-n5">
                    <label className="font-size-h6 font-weight-bolder text-dark pt-5">
                      Password
                    </label>
                    <a
                      href="/login"
                      className="text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5"
                      id="kt_login_forgot"
                    >
                      Forgot Password ?
                    </a>
                  </div>
                  <input
                    className="form-control form-control-solid h-auto py-7 px-6 rounded-lg"
                    type="password"
                    name="password"
                    autoComplete="off"
                  />
                </div>
                <div className="pb-lg-0 pb-5">
                  <Link to={APP_URLS.dashboard}>
                    <button
                      type="button"
                      id="kt_login_signin_submit"
                      className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
                    >
                      Iniciar Sesión
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-light-primary font-weight-bolder px-8 py-4 my-3 font-size-lg"
                  >
                    <span className="svg-icon svg-icon-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z"
                          fill="#34A853"
                        />
                        <path
                          d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z"
                          fill="#EB4335"
                        />
                      </svg>
                    </span>
                    Sign in with Google
                  </button>
                </div>
              </form>
            </div>
            <div className="login-form login-signup">
              <form
                className="form"
                noValidate="novalidate"
                id="kt_login_signup_form"
              >
                <div className="pb-13 pt-lg-0 pt-5">
                  <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                    Sign Up
                  </h3>
                  <p className="text-muted font-weight-bold font-size-h4">
                    Enter your details to create your account
                  </p>
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                    type="text"
                    placeholder="Fullname"
                    name="fullname"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                    type="email"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                    type="password"
                    placeholder="Password"
                    name="password"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                    type="password"
                    placeholder="Confirm password"
                    name="cpassword"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label className="checkbox mb-0">
                    <input type="checkbox" name="agree" />I Agree the
                    <a href="/login">terms and conditions</a>.<span></span>
                  </label>
                </div>
                <div className="form-group d-flex flex-wrap pb-lg-0 pb-3">
                  <button
                    type="button"
                    id="kt_login_signup_submit"
                    className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    id="kt_login_signup_cancel"
                    className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
            <div className="login-form login-forgot">
              <form
                className="form"
                noValidate="novalidate"
                id="kt_login_forgot_form"
              >
                <div className="pb-13 pt-lg-0 pt-5">
                  <h3 className="font-weight-bolder text-dark font-size-h4 font-size-h1-lg">
                    Forgotten Password ?
                  </h3>
                  <p className="text-muted font-weight-bold font-size-h4">
                    Enter your email to reset your password
                  </p>
                </div>
                <div className="form-group">
                  <input
                    className="form-control form-control-solid h-auto py-7 px-6 rounded-lg font-size-h6"
                    type="email"
                    placeholder="Email"
                    name="email"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group d-flex flex-wrap pb-lg-0">
                  <button
                    type="button"
                    id="kt_login_forgot_submit"
                    className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-4"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    id="kt_login_forgot_cancel"
                    className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4 my-3"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-flex justify-content-lg-start justify-content-center align-items-end py-7 py-lg-0">
            <a
              href="/login"
              className="text-primary font-weight-bolder font-size-h5"
            >
              Terms
            </a>
            <a
              href="/login"
              className="text-primary ml-10 font-weight-bolder font-size-h5"
            >
              Plans
            </a>
            <a
              href="/login"
              className="text-primary ml-10 font-weight-bolder font-size-h5"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
