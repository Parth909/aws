// React is available globally
// But to use its Properties like Fragment, useState and so on IMPORT statement is required
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { isAuth, logout } from "../helpers/auth";

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

const Layout = ({ children }) => {
  const head = () => (
    <Head>
      {/* Required meta tags  */}
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      ></meta>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href="/static/css/styles.css" />
    </Head>
  );

  const nav = () => (
    <ul className="nav nav-tabs bg-info">
      <li className="nav-item">
        <Link href="/">
          <a className="nav-link text-dark">Home</a>
        </Link>
      </li>

      {!isAuth() && (
        <React.Fragment>
          <li className="nav-item">
            <Link href="/login">
              <a className="nav-link text-dark">Login</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/register">
              <a className="nav-link text-dark">Register</a>
            </Link>
          </li>
        </React.Fragment>
      )}

      {/* It is isAuth() && not isAuth - which will give terrible error */}
      {isAuth() && isAuth().role === "admin" && (
        <li className="nav-item ml-auto">
          <Link href="/admin">
            <a className="nav-link text-dark">Admin</a>
          </Link>
        </li>
      )}

      {isAuth() && isAuth().role === "subscriber" && (
        <li className="nav-item ml-auto">
          <Link href="/user">
            <a className="nav-link text-dark">User</a>
          </Link>
        </li>
      )}

      {isAuth() && (
        <li className="nav-item">
          <a onClick={logout} className="nav-link text-dark">
            Logout
          </a>
        </li>
      )}
    </ul>
  );

  return (
    <React.Fragment>
      {head()} {nav()} <div className="container pt-5 pb-5">{children}</div>
    </React.Fragment>
  );
};

export default Layout;
