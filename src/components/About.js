import User from "./User";
import UserClass from "./UserClass";

const About = () =>{
    return(
        <div>
            <h1>About</h1>
            <h2>this is the about section</h2>
            {/*<User />*/}
            <UserClass name={"singham"} location={"kaali pahadi"} />

        </div>
    )
};

export default About;