import { useState, useEffect, useRef } from "react";

const Friend = ({names, error})=>{

    const index = useRef(0);
    const [curentText, setCurrentText] = useState('');

    useEffect(()=>{
        const timeoutid = setTimeout(() => {
            setCurrentText((value)=> value+ names.charAt(index.current))
            index.current += 1
        }, 200);
        return (()=>{
            clearTimeout(timeoutid);
        })
    }, [curentText])


    return (
        <>
         <span>{curentText}</span>
        </>
    )
}
export default Friend
