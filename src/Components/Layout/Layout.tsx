import { Link } from 'react-router-dom';
import '../../App.css';

interface IType{
    id:string,
    name:string,
    body:string
}

export default function Layout({id, name, body}:IType){
    return(       
        <div key={name} className="card">
            <header className="header-card">
                <Link to={`/description/${id}`} className="name-Link"><li>{name}</li></Link>
            </header>
            <span className="box-text">
                {body}
            </span>
        </div>  
    )
}