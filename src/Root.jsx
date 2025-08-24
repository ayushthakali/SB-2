import { Outlet ,useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function Root({ children }) {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div>
      <NavBar />
      <Outlet>{children}</Outlet>
      <Footer key={pathname}/>
    </div>
  );
}

export default Root;
