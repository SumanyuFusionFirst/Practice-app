import React, {useState} from "react"

export default function Textform(props){

const handleOncChange = (event)=>{
    console.log({text})
    setText(event.target.value)
}

const handleonclick =()=>{
    let newText = text.toUpperCase();
    console.log({newText})
    setText(newText)
}



    const [text, setText] = useState('')
return(
<div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOncChange} style={{width:"25%"}} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleonclick} >Convert to uppercase</button>
</div>

)

}