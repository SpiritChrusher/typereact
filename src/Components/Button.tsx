import React from "react"


const btn: React.FC<{fn?: () => void}> = ({fn}) => {

    const Writer= () => console.log("Mytext");

    return(
<button onClick={fn}>Clicker</button>
)}

export default btn