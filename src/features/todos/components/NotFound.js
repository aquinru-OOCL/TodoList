import React, { Component } from 'react';
import { Result } from 'antd';

class NotFound extends Component {

    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you're trying to visit doesn't exist."
            />
        );
    }
}

export default NotFound;