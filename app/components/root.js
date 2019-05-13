import React from 'react';
import ListAllCandies from './ListAllCandies';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <button type="button">
            <Link to="/">Home</Link>
          </button>
          <button type="button">
            <Link to="/candies">Candies</Link>
          </button>
        </nav>
        <main>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <h1>Welcome to the Goodie Bag!</h1>
                  <p>What a nice home page for your goodies!</p>
                </div>
              )}
            />
            <Route exact path="/candies" component={ListAllCandies} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default Root;
