import { Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import HeaderMobile from "./HeaderMobile";
import AsideMenu from "./AsideMenu";
import Subheader from "./Subheader";
import Header from "./Header";
import UserPanel from "./UserPanel";
import QuickKart from "./QuickKart";
import Footer from "./Footer";
import OffcanvasOverlay from "./OffcanvasOverlay";
import { APP_URLS } from "../helpers/routes";

function Layout() {
  const {
    auth: { token, loginStatus },
  } = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && loginStatus !== "succeeded") {
      return navigate(APP_URLS.login);
    }
  }, [token, loginStatus, navigate]);

  const [showUserPanel, setShowUserPanel] = useState(false);
  const [showQuickKart, setShowQuickKart] = useState(false);
  return (
    <>
      <HeaderMobile />
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-row flex-column-fluid page">
          <AsideMenu />
          <div
            className="d-flex flex-column flex-row-fluid wrapper"
            id="kt_wrapper"
          >
            <Header
              handleOpenUserPanel={setShowUserPanel}
              handleOpenQuickKart={setShowQuickKart}
            />
            <div
              className="content d-flex flex-column flex-column-fluid"
              id="kt_content"
            >
              <Subheader />
              <div className="d-flex flex-column-fluid">
                <div className="container">
                  <Outlet />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
      <QuickKart
        isActive={showQuickKart}
        handleClose={() => setShowQuickKart(false)}
      />
      <UserPanel
        isActive={showUserPanel}
        handleClose={() => setShowUserPanel(false)}
      />
      {(showUserPanel || showQuickKart) && (
        <OffcanvasOverlay
          handleDismiss={() => {
            setShowUserPanel(false);
            setShowQuickKart(false);
          }}
        />
      )}
    </>
  );
}

export default Layout;
