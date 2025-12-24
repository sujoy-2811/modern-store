import Footer from "../components/Footer";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import Home from "../pages/Home";

import "./../global.css";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
