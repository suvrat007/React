const Contact= ()=>{
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contacts</h1>
            <form>
                <input type="text" placeholder="Name" className="border-black p-2 m-2"/>
                <input type="text" placeholder="Message" className="border-black p-2 m-2"/>
                <button className="border-black p-2 m-2">Submit</button>
            </form>
        </div>
    );
};

export default Contact;