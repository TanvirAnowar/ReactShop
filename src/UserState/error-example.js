import React,{useState} from 'react'

const ErrorExample = () => {

    let [title,setTitle] = useState("random title");
    const handleClick = ()=>{
        if(title === "random title")
        {
            setTitle("changed title");
        }else{
            setTitle("random title");
        }

        console.log("clicked !!");
    }
    return (
        <React.Fragment>
            <h2>
                {title}
                <button type="button" className="btn" onClick={handleClick}>Change title</button>
            </h2>
        </React.Fragment>
    )
}


export default ErrorExample