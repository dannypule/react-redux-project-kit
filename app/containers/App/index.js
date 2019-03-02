/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import UI from 'containers/UI/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage/Loadable';
import RegistrationPage from 'containers/RegistrationPage/Loadable';
import Layout from '../../components/Layout/Layout';

export default function App() {
  return (
    // eslint-disable-next-line
    <div> 
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/ui" component={UI} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegistrationPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Layout>
    </div>
// =======
//  * App
//  *
//  * This component is the skeleton around the actual pages, and should only
//  * contain code that should be seen on all pages. (e.g. navigation bar)
//  */

// import React from 'react';
// import { Helmet } from 'react-helmet';
// import styled from 'styled-components';
// import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
// import FeaturePage from 'containers/FeaturePage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';

// import GlobalStyle from '../../global-styles';

// const AppWrapper = styled.div`
//   max-width: calc(768px + 16px * 2);
//   margin: 0 auto;
//   display: flex;
//   min-height: 100%;
//   padding: 0 16px;
//   flex-direction: column;
// `;

// export default function App() {
//   return (
//     <AppWrapper>
//       <Helmet
//         titleTemplate="%s - React.js Boilerplate"
//         defaultTitle="React.js Boilerplate"
//       >
//         <meta name="description" content="A React.js Boilerplate application" />
//       </Helmet>
//       <Header />
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route path="/features" component={FeaturePage} />
//         <Route path="" component={NotFoundPage} />
//       </Switch>
//       <Footer />
//       <GlobalStyle />
//     </AppWrapper>
  );
}
