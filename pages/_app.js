import React, { Fragment } from 'react';
import Router from 'next/router';
import {wrapper} from '../store';
import '../styles/globals.css'


// const isProduction = process.env.NODE_ENV === 'production';

// // only events on production
// if(isProduction) {
  
//   // Notice how we track pageview when route is changed
//   Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));
// }

const MyApp = ({Component, pageProps}) => (
  <Fragment>
    <Component {...pageProps} />
  </Fragment>
);

export default wrapper.withRedux(MyApp);