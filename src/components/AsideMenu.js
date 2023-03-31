import { Link } from "react-router-dom";

import MenuItem from "./MenuItem";

import { APP_URLS } from "../helpers/routes";

import Logo from "../assets/theme/media/logos/logo-letter-13.png";

function AsideMenu() {
  return (
    <div
      className="aside aside-left aside-fixed d-flex flex-column flex-row-auto"
      id="kt_aside"
    >
      <div className="brand flex-column-auto" id="kt_brand">
        <Link to={APP_URLS.dashboard}>
          <div className="brand-logo">
            <img alt="Logo" className="w-65px" src={Logo} />
          </div>
        </Link>
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
            <MenuItem
              {...{
                title: "Inicio",
                icon: "fas fa-home",
                targetPath: APP_URLS.dashboard,
              }}
            />
            <MenuItem
              {...{
                title: "Facturacion",
                icon: "fas fa-cash-register",
                targetPath: APP_URLS.billing,
              }}
            />
            <MenuItem
              {...{
                title: "Compras",
                icon: "fas fa-truck-loading",
                targetPath: APP_URLS.billing,
              }}
            />
            <MenuItem
              {...{
                title: "Reportes",
                icon: "fas fa-chart-line",
                children: [
                  {
                    title: "Ventas",
                    targetPath: APP_URLS.reports,
                  },
                  {
                    title: "Compras",
                    targetPath: APP_URLS.reports,
                  },
                  {
                    title: "Productos",
                    targetPath: APP_URLS.reports,
                  },
                ],
              }}
            />
            <li className="menu-item">
              <a target={"_blank"} rel="noreferrer" className="menu-link" href={APP_URLS.admin}>
                <i className="menu-icon flaticon2-settings"></i>
                <span className="menu-text">Administración</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AsideMenu;
