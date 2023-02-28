import React from "react";

function AsideMenu() {
  return (
    <div
      className="aside aside-left aside-fixed d-flex flex-column flex-row-auto"
      id="kt_aside"
    >
      <div className="brand flex-column-auto" id="kt_brand">
        <a href="index.html" className="brand-logo">
          <img
            alt="Logo"
            className="w-65px"
            src="assets/media/logos/logo-letter-13.png"
          />
        </a>
      </div>
      <div
        className="aside-menu-wrapper flex-column-fluid"
        id="kt_aside_menu_wrapper"
      >
        <div
          id="kt_aside_menu"
          className="aside-menu my-4"
          data-menu-vertical="1"
          data-menu-scroll="1"
          data-menu-dropdown-timeout="500"
        >
          <ul className="menu-nav">
            <li className="menu-item">
              <a href="index.html" className="menu-link">
                <i className="menu-icon flaticon-home"></i>
                <span className="menu-text">Export</span>
              </a>
            </li>
            <li
              className="menu-item menu-item-submenu"
              data-menu-toggle="hover"
            >
              <a href="/" className="menu-link menu-toggle">
                <i className="menu-icon flaticon-web"></i>
                <span className="menu-text">Actions</span>
                <i className="menu-arrow"></i>
              </a>
              <div className="menu-submenu">
                <i className="menu-arrow"></i>
                <ul className="menu-subnav">
                  <li className="menu-item menu-item-parent">
                    <span className="menu-link">
                      <span className="menu-text">Actions</span>
                    </span>
                  </li>
                  <li className="menu-item">
                    <a href="/" className="menu-link">
                      <i className="menu-bullet menu-bullet-line">
                        <span></span>
                      </i>
                      <span className="menu-text">Reports</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AsideMenu;
