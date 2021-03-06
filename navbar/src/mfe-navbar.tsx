import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

const { bootstrap: _bootstrap , mount: _mount, unmount: _unmount } = lifecycles;


export function bootstrap(props) {
  return new Promise(resolve => {
    console.log(props,"bootstrap");
    resolve(_bootstrap(props));
  })
}
export function mount(props) {
  return new Promise(resolve => {
    console.log(props,"mount");
    resolve(_mount(props));
  })
}
export function unmount(props) {
  return new Promise(resolve => {
    console.log(props,"unmount");
    resolve(_unmount(props));
  })
}