import React from "react"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

const GET_GREETINGS_REQUEST = "GET_GREETINGS_REQUEST";
const GET_GREETINGS_SUCCESS = "GET_GREETINGS_SUCCESS";

function getGreetings() {
  return dispatch => {
    dispatch({ type: GET_GREETINGS_REQUEST });
    return fetch('/greetings')
    .then(response => response.json())
    .then(json => dispatch(getGreetingsSuccess(json)))
    .catch(error => console.log(error));
  }
}

export function getGreetingsSuccess(json) {
  return {
    type: GET_GREETINGS_SUCCESS,
    json
  }
}

class HelloWorld extends React.Component {
  render () {
    console.log(this.props);
    const { greetings } = this.props;
    const greetingsList = greetings.map((greeting) => {
      return <li key={ greeting.id }>{ greeting.id } - { greeting.greet }</li>
    })
    console.log(greetings);
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <button className="getGreetingsBtn" onClick={() => this.props.getGreetings()}>Get Greetings</button>
        <br />
        <ul>{ greetingsList }</ul>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  greetings: state => state.greetings,
});

const mapDispatchToProps = { getGreetings };
export default connect(structuredSelector, mapDispatchToProps)(HelloWorld);
