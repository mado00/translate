import React from 'react';

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
  state = { language: 'english' };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      // The value is going to be the combination of everything out of state object.
      // taking all the values out of current state object and adding them into that object. And also going to take onLanguageChange callback function and add it in there as well
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {/* Place a provider only the components underneath it or only the components that get wrapped by this provider will have access to the context that is implemented by this provider 
        */}
        {this.props.children}
      </Context.Provider>
      );
    }
  }
  
  export default Context;