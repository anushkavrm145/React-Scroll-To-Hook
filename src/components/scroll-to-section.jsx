export default function ScrollToSection(){
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
    return <div>
        <h1>
            scroll to a partivular section
        </h1>
        <button>click to scroll</button>
        {
            data.map((dataItem)=>(
                 <div style={dataItem.style}>
                <h3>{dataItem.label}</h3>
            </div>
            ))
        }
    </div>
}