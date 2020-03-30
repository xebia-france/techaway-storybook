import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Author from 'containers/Author';
import Home from 'containers/Home';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact={true} children={<Home />} />
      <Route path="/author/:authorId" children={<Author />} />
      <Route path="*">
        <Paper>
          <Typography variant="h5" align="center" color="error">
            404
          </Typography>
        </Paper>
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default App;
