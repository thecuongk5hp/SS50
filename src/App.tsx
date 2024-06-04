import React from "react";
import { Route, Routes } from "react-router-dom";
import B1 from "./components/B1";
import B2 from "./components/B2";
import B3 from "./components/B3";
import B4 from "./components/B4";
import PrivateRouter from "./components/b5+6/PrivateRouter";
import Login from "./components/b5+6/Login";
import Teams from "./components/b7/Teams";
import TeamsIndex from "./components/b7/TeamsIndex";
import Team from "./components/b7/Team";
import PrivateRouterB8 from "./components/b8/PrivateRouterB8";
import AccountB8 from "./components/b8/AccountB8";
import Product from "./components/b8/Product";
import Order from "./components/b8/Order";
import AdminIndex from "./components/b8/AdminIndex";
import Header from "./components/b10/header/Header";
import Contact from "./components/b10/Contact";
import About from "./components/b10/About";
import Post from "./components/b10/Post";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/product/:id" element={<B1></B1>}></Route>
        <Route path="/student/:name" element={<B2></B2>}></Route>
        <Route path="/student" element={<B4></B4>}></Route>
        <Route path="/employee" element={<B3></B3>}></Route>
        <Route
          path="/account"
          element={<PrivateRouter></PrivateRouter>}
        ></Route>
        <Route path="/login" element={<Login></Login>} />
        <Route path="/teams" element={<Teams></Teams>}>
          <Route index element={<TeamsIndex></TeamsIndex>}></Route>
          <Route path=":teamId" element={<Team></Team>}></Route>
        </Route>
        <Route path="/admin" element={<PrivateRouterB8></PrivateRouterB8>}>
          <Route index element={<AdminIndex></AdminIndex>}></Route>
          <Route path="account" element={<AccountB8></AccountB8>}></Route>
          <Route path="product" element={<Product></Product>}></Route>
          <Route path="order" element={<Order></Order>}></Route>
        </Route>
        <Route
          path="/"
          element={
            <ScrollToTop>
              <Header />
            </ScrollToTop>
          }
        >
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/post" element={<Post></Post>}></Route>
        </Route>
      </Routes>
    </>
  );
}
