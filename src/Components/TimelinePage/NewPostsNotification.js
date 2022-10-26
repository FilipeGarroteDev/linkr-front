import styled from "styled-components";
import { TfiReload } from "react-icons/tfi";
import useInterval from "use-interval";
import { useState } from "react";

export default function NewPostNotification(){
    const [ newPostsQt, setNewPostsQt ] = useState(0)
    
    useInterval(() => {
        setNewPostsQt(newPostsQt+1)
    }, 5000)

    return (
        <>

        </>

    )
}

const NewPostButton = styled.div`
    width:610px;
    height:60px;
    margin-bottom:20px;

    background: #1877F2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;

    display:flex;
    align-items: center;
    justify-content: center;

    color:#FFFFFF;

    span{
        margin-right: 10px;
    }
`