function WrappedComponent({logo}){
    return(
        <div style={{backgroundColor:'lightblue', color:'white', padding:'20px', borderRadius:'20px',fontSize:'25px'}}>
            {logo}
        </div>
    )
}

function Wrapper(){
    return <WrappedComponent logo="Awdiz"/>;
}
export default Wrapper;