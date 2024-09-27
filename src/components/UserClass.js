import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        // made a useState inside class based component
        this.state = {
            count: 0,
            count1:1,
        };
    }

    render(){
        const {name,location} = this.props;
        const {count} = this.state;
        return (
            <div className="user-card">
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => {
                    // never change state variable directly

                    this.setState({
                        count: this.state.count +1 ,
                    })
                }}>Inc Count</button>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h4>Email: dilli@gmail.com</h4>`
            </div>
        );
    }
}

export default UserClass;