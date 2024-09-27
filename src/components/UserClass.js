import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        // made a useState inside class based component
        this.state = {
            count: 0,
        };
    }

    render(){
        return (
            <div className="user-card">
                <h1>Count: {this.state.count}</h1>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h4>Email: dilli@gmail.com</h4>`
            </div>
        );
    }
}
export default UserClass;