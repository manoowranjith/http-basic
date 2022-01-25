import React from "react"
function Api()
{
    const [request, setRequest] = React.useState("GET")
    const [url, setUrl] = React.useState("")
    const [json, setJson] = React.useState()
    function SendRequest()
    {
        var requestOptions ={}
        if(request === "GET")
        {
             requestOptions = {
                method: 'GET',
            };
        } 
        else if(request === "POST")
        {
             requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({ title: 'React POST Request' })
            };
        }
        else if(request === "PUT")
        {
             requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify({ title: 'React POST Request' })
            };
        }
        
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => setJson(JSON.stringify(data)))
            .catch(()=>setJson("Invalid API Request"))
    }

    return(
        <div>
            <h1>HTTP - Basics</h1>
            <div id="request">
                <select onChange={(e)=>{setRequest(e.target.value)}}>
                    <option >GET</option>
                    <option >POST</option>
                    <option >PUT</option>
                </select>
                <input spellcheck="false" onChange={(e)=>{setUrl(e.target.value)}} type="text" />
                <button onClick={()=>SendRequest()}>Send</button>
            </div>
            <div id="api">
                <div>
                    <h2>GET : http://localhost:3001/</h2>
                    <h2>POST : http://localhost:3001?title=POST TITLE HERE</h2>
                    <h2>PUT : http://localhost:3001/REPLACE TITLE HERE</h2>
                </div>
            </div>
            <div id="response">
                <p>{json}</p>
            </div>
        </div>
    )
}
export default Api