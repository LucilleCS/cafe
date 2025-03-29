// Layout.js
import { Outlet } from "react-router-dom";
import Header from "../components/Header"; 
import Footer from "../components/Footer"; 

const Layout = () => {
  return (
    <>
      <Header />  {}
      <main>
        <Outlet />  {/*reminder: page content*/}
      </main>
      <Footer />  {}
    </>
  );
};

export default Layout;
