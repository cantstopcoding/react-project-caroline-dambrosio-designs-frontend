import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { fetchAccounts } from "../actions/fetchAccounts";
import AccountInput from "../components/AccountInput";
import Accounts from "../components/Accounts";
import Account from "../components/Account";

import Layout from "../components/Layouts";

class AccountsContainer extends Component {
  componentDidMount() {
    this.props.fetchAccounts();
  }

  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route exact path="/accounts/new" component={AccountInput} />
            <Route
              exact
              path="/accounts/:id"
              render={(routerProps) => (
                <Account {...routerProps} accounts={this.props.accounts} />
              )}
            />
            <Route
              exact
              path="/accounts"
              render={(routerProps) => (
                <Accounts {...routerProps} accounts={this.props.accounts} />
              )}
            />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    accounts: state.accountReducer.accounts,
  };
};

export default connect(mapStateToProps, { fetchAccounts })(AccountsContainer);
