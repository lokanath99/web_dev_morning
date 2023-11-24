function UserInfo(props) {
    return (
        <>
            <div className="App">
                {console.log({ props })}
                <h1>{props.name}</h1>
                <h1>{props.age}</h1>
                <h1>{props.phone}</h1>
            </div>
        </>
    );
}

export default UserInfo;
