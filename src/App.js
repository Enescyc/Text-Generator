import {useEffect, useState} from "react";
import axios from "axios";
function App() {
    const [text,setText] = useState("");
    const [selection,setSelection] = useState("HTML")
    const [paragraphs, setParagraphs] = useState(4);



    useEffect((state) => {

            try {
                let URL = process.env.REACT_APP_API_BASE_URL+process.env.REACT_APP_PARAGRAPHS+paragraphs+process.env.REACT_APP_FORMAT+selection;
                 axios.get(URL).then(res => setText(res.data))
            }
            catch (e) {alert(e.message())}


    },[paragraphs,selection]);




    return (

        <div className="flex-col flex justify-center items-center  w-full h-full bg-slate-700 min-h-screen text-emerald-500 text-md font-mono">
            <h1 className={"text-4xl text-white text-center font-bold mt-32 "}>Welcome The Text Generator</h1>
            <div className={"flex flex-col justify-center items-center h-full lg:w-1/2 px-6 py-6"}>
                <div className={"flex flex-col"}>
                    <form>
                        <input onChange={e=> setParagraphs(Number(e.target.value))} type={"number"} min={0} className={"px-4 py-2 m-4  p-4 placeholder:text-emerald-500 self-start"}
                               placeholder={"Choose Number"}/>
                        <label htmlFor={"format"} className={"px-2 py-2 text-emerald-500"}>Choose a Format: </label>
                        <select onChange={e=> setSelection(e.target.value)} name="format" className={"px-4 py-2 bg-white text-emerald-500 m-4 p-4 self-end"}>
                            <option value={"HTML"}>
                                HTML
                            </option>
                            <option value={"TEXT"}>
                                Text
                            </option>
                        </select>
                    </form>

                </div>
                <div className={"w-full h-full pt-10"}>

                    {
                        text.length >1 ?
                            selection.toLowerCase() ==="html" ?  text.map((item,index) => <p key={index}>{"<p>"+item+"</p>"}</p>) : <p>{text}</p> : console.log(text)
                    }



                </div>
            </div>
        </div>

    );
}

export default App;
