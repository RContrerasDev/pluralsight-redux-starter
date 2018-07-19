// This component handles the App template used on every page.
import React, {PropTypes} from 'react';

class App extends React.Component {
    render() {
        return(
            <div className="container-fluid">
            <p>Header Here...</p>
            {this.props.children}
            </div>
        );
    }
}
// React.Router pass the child components as properties
App.prototype = {
    children: PropTypes.object.isRequired
};

export default App;