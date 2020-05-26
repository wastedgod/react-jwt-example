import React from 'react';

import { helloworldService, authenticationService } from '@/_services';

class HelloWorldPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: authenticationService.currentUserValue,
            message: null
        };
    }

    componentDidMount() {
        helloworldService.getAll().then(message => this.setState({ message }));
    }

    render() {
        const { currentUser, message } = this.state;
        return (
            <div>
                <h1>This calls the HelloWorld service route</h1>
                {message && <span>{message.message}</span>}
            </div>
        );
    }
}

export { HelloWorldPage };