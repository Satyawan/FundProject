import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import FundSearchPage from './components/funds/FundSearchPage';

export default(
    <Route path="/" component={App} >
        <IndexRoute component={FundSearchPage} />
    </Route>
       
);