import React, {useState, useEffect} from 'react';

export default function UseEffectDeps(){
    const [val, setVal] = useState("");
    const [phrase, setPhrase] = useState("example phrase");
    const [log, setLog] = useState([]);

    const createPhrase = () => {
        setPhrase("val");
        setLog(prevLog => [...prevLog, val]);
        setVal("");
    };


    useEffect(() => {
        console.log(`typing ${val}`);
    },[val]);

    useEffect(() => {
        console.log(`saved phrase ${phrase}`);
    }, [phrase]);

    return(
        <>
            <label>Favorite phrase:</label>
            <input
                value = {val}
                placeholder = {phrase}
                onChange={e => setVal(e.target.value)}
                />
            <button onClick={createPhrase}>send</button>
            <br/>
            <ul>
                {log.map((item, index) => (<li key = {index}>{item}</li>))}
            </ul>
        </>
    )
}