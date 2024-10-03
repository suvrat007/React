import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        // made a useState inside class based component
        this.state = {
            userInfo:{
                name: "Dummy",
                location:"random"
            }
        };


    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/user");
        const json = await data.json();

        this.setState({
            userInfo : json,
        });

        console.log(json);
    }

    componentDidUpdate() {
        // called at last
        console.log("UserClass Updated");
    }

    componentWillUnmount() {
        // just before component will unmount
        console.log("UserClass Unmounted");
        // unmounting happens when the page changes
    }

    render(){
        const {name,location, avatar_url} = this.props;

        return (
            <div className="user-card">
                <img> {avatar_url}</img>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: {this.props.location}</h3>
                <h4>Email: dilli@gmail.com</h4>`
            </div>
        );
    }

//     life cycle---

    // first - constructor called and state variable create
    // RENDER CALLED---dummy data comes up.....then rerendering happens
    // second - componentDidMount was called....api call was made.....setState called and updation happens
    //         ....once again render trigger.....bcoz state variable changed.....so variable values aslo updated


}

export default UserClass;