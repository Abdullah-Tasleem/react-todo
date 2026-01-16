const user = [
    { name : "Alice", age: 25 },
    { name : "Bob", age: 30 },
    { name : "Charlie", age: 35 },
    { name : "Diana", age: 28 }
];

export const DericedState = () => {
    return (
        <div>
            <h1>User list</h1>
            <ul>
                {user.map( 
                    (usr, index) => (
                        <li key={index}>{`Name: ${usr.name}, Age: ${usr.age}`}</li>
                    )
                 )}
            </ul>
        </div>
    );
}