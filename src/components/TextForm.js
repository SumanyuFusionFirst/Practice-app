import React, {useState} from "react"

export default function Textform(props){

const handleOncChange = ()=>{
    console.log("on chnage")
}



    const [text, setText] = useState('Enter Text Here')
return(
<div>
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOncChange} style={{width:"25%"}} id="mybox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" >Convert to uppercase</button>
</div>

)

}