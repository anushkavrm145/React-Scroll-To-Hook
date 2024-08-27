import { useRef } from "react";

export default function ScrollToTopAndBottom(){
    const {data,error,pending} = useFetch(
        "https://dummyjson.com/products?limit=100",{}
    );
    const bottomRef=useRef(null)
    function handleScrollToTop(){
        window.scrollTo({
            top:0,left:0,behavior:'smooth'
        })
    }
    function handleScrollToBottom(){
        bottomRef.current.scrollIntoView({behavior:'smooth'})
    }
    if(error){
        return <h1> error occured! please try again </h1>
    }
    if(pending){
        return <h1>loading. please wait</h1> 
    }
    
    return <div>
        <h1>scropp to top and bottom feature</h1>
        <h3>this is the top section</h3>
        <button onClick={handleScrollToBottom}>scroll to bottom</button>
        <ul>{
        data && data.products && data.products.length?data.products.map(item=><li>{item.title}</li>):null}</ul>
        <button onClick={handleScrollToTop}>scroll to top</button>
        <div ref={bottomRef}></div>
        <h3>this is the bottom of the page</h3>
        </div>
}