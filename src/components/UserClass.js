import React from "react";

console.log("UserClass called");

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log("props called");

        // initializing state in class component
        this.state = {
            userInfo: {
                name: "Dummy",
                location: "random",
                avatar_url: ""
            }
        };
    }

    async componentDidMount(){
        // correct API endpoint to fetch a user's data from GitHub
        const data = await fetch("https://api.github.com/users/suvrat007");
        const json = await data.json();

        // updating state with the fetched data
        this.setState({
            userInfo: json,
        });

        console.log(json);
    }

    componentDidUpdate() {
        // called after every update
        console.log("UserClass Updated");
    }

    componentWillUnmount() {
        // just before component will unmount
        console.log("UserClass Unmounted");
    }

    render(){
        const { name, location, avatar_url } = this.state.userInfo;

        return (
            <div className="user-card">
                <img src={avatar_url} alt={name} />
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Email: dilli@gmail.com</h4>
            </div>
        );
    }

    // Life cycle explanation:
    // First - constructor is called, state variable is initialized.
    // Second - render is called, dummy data is displayed.
    // Third - componentDidMount is called, API call is made, and state is updated.
    // Fourth - render is called again with updated data.
}

export default UserClass;
