const ButtonComponent = (props) => {
    return(
        <>
        <button style={{ marginTop : "2rem", marginBottom : "2rem", padding : '1rem' }}>{props.label}</button>
        </>
    );
}
export default ButtonComponent;