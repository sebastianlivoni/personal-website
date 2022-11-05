import Footer from "./navigation/footer";
import Navbar from "./navigation/navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
