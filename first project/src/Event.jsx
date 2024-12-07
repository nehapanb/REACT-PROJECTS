const Event = () =>{


    function cl(){
    alert("clicked")

    }
    

    
    return(
        <>
        <button onClick={cl}>click here</button>

        <button onClick={()=>alert("inline event")}>inline</button>
        </>
    )
    }



export default Event