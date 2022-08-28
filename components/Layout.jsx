import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <Sidebar /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;