import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";


class About extends Component {
    constructor(props) {
        super(props);
    }

    //this is called after the class component was completely mounted onto the DOM

    componentDidMount() {
        // this is called after .... constructor and render

        //componentDidMount is used to make API calls

        // this is used bcoz its called at last....so PI call is amde after the component is rendered and mounted
        // so we want to render first and then call the API instead of other way around


    }

    render() {
        return(
            <div>
                <h1>About</h1>
                <h2>this is the about section</h2>
                {/*<User />*/}

                {/*when there are 2 children
                    - first child is called....uska constructor and render is called
                    - second child is then called ....uska constructor and render called
                    - then dono ke DidMount is called repectively
                 this is an optimization of react and makes it more efficient*/}

                <UserClass name={"singham"} location={"kaali pahadi"} />

            </div>
        )
    }
}



export default About;