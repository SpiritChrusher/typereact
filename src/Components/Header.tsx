import React, { useState } from "react"
import Btn from "./Button"

interface Person{
    FirstName: string;
    LastName: string;
    Age: number;
    IsSinlge?: boolean;
}

interface Props{
    text: string;
    fn?: (bob: string) => void;
    person: Person; // obj: Person;

}

const Header: React.FC<Props> = ({person, text}) => {

    //const [count,setCount] = useState<number | null>(5);
   //setCount(null);

    return(
        <header>
            <h1>My Typescript App</h1>
            <h2>{text}</h2>
            
        </header>
    )
}

export default Header