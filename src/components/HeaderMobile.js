import { Link } from "react-router-dom";
import { APP_URLS } from "../helpers/routes";
import logo from "../assets/theme/media/logos/logo-letter-13.png";

function HeaderMobile({ handleOpenUserPanel, handleOpenMobileMenu }) {
  return (
    <div
      id="kt_header_mobile"
      className="header-mobile align-items-center header-mobile-fixed"
    >
      <Link to={APP_URLS.dashboard}>
        <img alt="Logo" className="w-45px" src={logo} />
      </Link>
      <div className="d-flex align-items-center">
        <button
          className="btn p-0 burger-icon ml-4"
          id="kt_header_mobile_toggle"
          onClick={() => handleOpenMobileMenu(true)}
        >
          <span></span>
        </button>
        <button
          className="btn btn-hover-text-primary p-0 ml-2"
          id="kt_header_mobile_topbar_toggle"
          onClick={() => handleOpenUserPanel(true)}
        >
          <span className="svg-icon svg-icon-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              version="1.1"
            >
              <g stroke="none" fill="none">
                <polygon points="0 0 24 0 24 24 0 24" />
                <path
                  d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                  fill="#000000"
                  opacity="0.3"
                />
                <path
                  d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                  fill="#000000"
                />
              </g>
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default HeaderMobile;
