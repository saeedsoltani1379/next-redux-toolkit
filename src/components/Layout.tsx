"use client";
import React from "react";
import Container from "./Container";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import CartInitilizer from "../localstorage/CartInitilizer";


function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <CartInitilizer />
      <Navbar />
      <Container>{children}</Container>
    </Provider>
  );
}

export default Layout;