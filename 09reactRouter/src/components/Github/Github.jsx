import React, { useState } from "react";
import { useEffect } from "react";
function Github(){
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary').then(res=>res.json())
        .then((data)=>{setData(data)})
    },[])
    return (
        <div className="text-center m-4 bg-gray-600 p-4 text-3xl text-white">Github followers: {data.followers}
        <img src={data.avatar_url} alt="" width={100} />
        </div>
    )
}
export default Github;