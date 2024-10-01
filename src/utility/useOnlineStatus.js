import {useEffect} from "react";

const useOnlineStatus = () => {
    // check online or offline
    // to check that we jus need url

    const[OnlineStatus, setOnlineStatus] = React.useState(true);

    useEffect(() => {
        window.addEventListener('online', () => {
            setOnlineStatus(true);
        })
    }, []);

    useEffect(() => {
        window.addEventListener('offline', () => {
            setOnlineStatus(true);
        })
    }, []);


    // return boolean
    return OnlineStatus;
}

export default useOnlineStatus;