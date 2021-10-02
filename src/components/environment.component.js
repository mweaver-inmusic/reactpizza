import {useState, useEffect} from 'react';
const Environment = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch("https://contoso-pizza.herokuapp.com/environment")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItem(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    console.log(item);
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        
        return (
            <div>
                {/* <h1>Great you're here</h1>
                <h5>The DATABASE_URL is</h5>
                <p>{item.fullString}</p>
                <p>{item.host}</p>
                <p>{item.port}</p>
                <p>{item.username}</p>
                <p>{item.password}</p>                
                <p>{item.database}</p>                 */}
                <p><strong>Conn: </strong>{item.connectionString}</p>                
            </div>
            
        );
    }
}

export default Environment;