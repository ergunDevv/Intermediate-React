import React,{useState} from "react";

function Tab({children,activeTab}){
    // const [active,setActive]=useState(activeTab)
    console.log(children)
    return (
        <div>
           {children }
        </div>
    )
}

Tab.Panel=function({children,title}){

    return(
        <div>{children} {title}</div>
    )
}

export default Tab