// import React,{useEffect,useState} from "react";

// const Test = ()=>{

//     const [postId,setPostId]=useState(1)
//     const [post,setPost]=useState(false)

//     useEffect(()=>{
//         console.log("First time Rendered")
//     },[])
//     useEffect(()=>{
//         console.log("Rendered everytime when component rendered")
//     })

//     useEffect(()=>{
//         fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//             .then(res=>res.json())
//             .then(data=>setPost(data))
//     },[postId])

//     return (
//         <div>
//             <h2>{post && JSON.stringify(post)}</h2>
//             <button onClick={()=>setPostId(postId=>postId+1)}>Increase Post</button>
//             Test component
//         </div>
//     )
// }

// export default Test

