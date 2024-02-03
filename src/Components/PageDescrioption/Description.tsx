import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Description(){
    const{id} = useParams();
    const[data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(r => setData(r))
    },[])
         
    return(
        <>
            <h1>Descript {id}</h1>
        </>
    )
}