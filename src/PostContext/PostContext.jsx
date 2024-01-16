import React,{createContext, useState} from "react";

export const PostContext = createContext()


export default function PostComponent({children}){
    const [postDetails,setPostDetails] = useState(null)
    return(
        <PostContext.Provider value={{postDetails,setPostDetails}}>
            {children}
        </PostContext.Provider>
    )
}


