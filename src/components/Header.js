import { useSelector } from "react-redux";
import MenuItems from "./MenuItems";

function Header({ handleOpenUserPanel, handleOpenMobileMenu, showMobileMenu }) {
  const {
    tokenPayload: { user },
  } = useSelector((state) => state.auth);

  return (
    <div id="kt_header" className="header header-fixed">
      <div className="container-fluid d-flex align-items-stretch justify-content-between">
        <div
          className={`header-menu-wrapper header-menu-wrapper-left ${
            showMobileMenu ? "header-menu-wrapper-on" : ""
          }`}
          id="kt_header_menu_wrapper"
        >
          <div
            id="kt_header_menu"
            className="header-menu header-menu-mobile header-menu-layout-default d-md-none"
          >
            <MenuItems />
          </div>
        </div>
        {showMobileMenu && (
          <div
            className="header-menu-wrapper-overlay"
            onClick={() => handleOpenMobileMenu(false)}
          ></div>
        )}
        <div className="topbar">
          <div className="topbar-item">
            <div
              className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1"
              id="kt_quick_cart_toggle"
            >
              <span className="svg-icon svg-icon-xl svg-icon-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  version="1.1"
                >
                  <g stroke="none" fill="none">
                    <rect x="0" y="0" width="24" height="24" />
                    <path
                      d="M12,4.56204994 L7.76822128,9.6401844 C7.4146572,10.0644613 6.7840925,10.1217854 6.3598156,9.76822128 C5.9355387,9.4146572 5.87821464,8.7840925 6.23177872,8.3598156 L11.2317787,2.3598156 C11.6315738,1.88006147 12.3684262,1.88006147 12.7682213,2.3598156 L17.7682213,8.3598156 C18.1217854,8.7840925 18.0644613,9.4146572 17.6401844,9.76822128 C17.2159075,10.1217854 16.5853428,10.0644613 16.2317787,9.6401844 L12,4.56204994 Z"
                      fill="#000000"
                      opacity="0.3"
                    />
                    <path
                      d="M3.5,9 L20.5,9 C21.0522847,9 21.5,9.44771525 21.5,10 C21.5,10.132026 21.4738562,10.2627452 21.4230769,10.3846154 L17.7692308,19.1538462 C17.3034221,20.271787 16.2111026,21 15,21 L9,21 C7.78889745,21 6.6965779,20.271787 6.23076923,19.1538462 L2.57692308,10.3846154 C2.36450587,9.87481408 2.60558331,9.28934029 3.11538462,9.07692308 C3.23725479,9.02614384 3.36797398,9 3.5,9 Z M12,17 C13.1045695,17 14,16.1045695 14,15 C14,13.8954305 13.1045695,13 12,13 C10.8954305,13 10,13.8954305 10,15 C10,16.1045695 10.8954305,17 12,17 Z"
                      fill="#000000"
                    />
                  </g>
                </svg>
              </span>
            </div>
          </div>
          <div
            className="topbar-item"
            onClick={() => handleOpenUserPanel(true)}
          >
            <div
              className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
              id="kt_quick_user_toggle"
            >
              <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">
                Hola,
              </span>
              <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">
                {user.first_name}
              </span>
              <span className="symbol symbol-35 symbol-light-success">
                <span className="symbol-label font-size-h5 font-weight-bold">
                  {user.first_name[0]}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
