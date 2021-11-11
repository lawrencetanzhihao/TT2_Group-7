const button = ({onClick}) => {
    return(
        <button 
            onClick = {onClick} 
            className = 'btn'
            >
            {text}
        </button>
    )
}

export default button