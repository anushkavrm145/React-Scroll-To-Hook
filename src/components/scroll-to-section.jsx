import { useRef } from "react"

export default function ScrollToSection(){
    const ref = useRef()
    const data = [
        {
            label:"first card",
            style:{
                width:'100%',
                height:'600px',
                background: 'red'
            }
        },
        {
            label:"second card",
            style:{
                width:'100%',
                height:'600px',
                background: 'orange'
            }
        },
        {
            label:"third card",
            style:{
                width:'100%',
                height:'600px',
                background: 'purple'
            }
        },
        {
            label:"fourth card",
            style:{
                width:'100%',
                height:'600px',
                background: 'blue'
            }
        },
        {
            label:"fifth card",
            style:{
                width:'100%',
                height:'600px',
                background: 'yellow'
            }
        },
        {
            label:"sixth card",
            style:{
                width:'100%',
                height:'600px',
                background: 'green'
            }
        },
    ]
    function handleScrolltoSection(){
        let pos = ref.current.getBoundingClientRect().top
        window.scrollTo({
            top:pos,
            behavior:'smooth'
        })
    }
    return <div>
        <h1>
            scroll to a partivular section
        </h1>
        <button onClick={handleScrolltoSection}>click to scroll</button>
        {
            data.map((dataItem)=>(
                 <div ref={index===3? ref: null} style={dataItem.style}>
                <h3>{dataItem.label}</h3>
            </div>
            ))
        }
    </div>
}