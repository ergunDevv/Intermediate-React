import React,{useState} from "react";

function Tab({children,activeTab,title}){
    const [active,setActive]=useState(activeTab)
    console.log(children)
    return (
        <div>
            {children.map((child,index)=> <button onClick={()=>setActive(index)} className={active===index ? 'bg-green-100' : 'bg-gray-100'} key={index}>{child.props.title} </button>)}
           {children[active] } 
        </div>
    )
}

Tab.Panel=function({children,title}){

    return(
        <div>{children} {title} </div>
    )
}

export default Tab