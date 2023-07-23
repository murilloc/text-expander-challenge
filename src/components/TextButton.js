const TextButton = ({
                        buttonColor  ,
                        expandedButtonText = "Show more",
                        collapseButtonText = "Show less",
                        handleButtonClick,
                        collapsed
                    }) => {


    const buttonStyle = {
        background: "none",
        color: buttonColor,
        font: "inherit",
        cursor: "pointer",
    }


    return (
        <>
            <span role={"button"}
                  style={buttonStyle}
                  onClick={handleButtonClick}>
                {collapsed ? expandedButtonText : collapseButtonText}
            </span>
        </>
    )
}

export default TextButton;
