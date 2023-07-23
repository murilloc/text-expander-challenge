import React, {useState} from "react";
import TextButton from "./TextButton";

const TextExpander = ({
                          expanded = false,
                          collapsedNumWords = 15,
                          expandedButtonText,
                          collapseButtonText,
                          buttonColor =  "#1f09cd",
                          children,
                          className
                      }) => {

    const [isCollapsed, setIsCollapsed] = useState(expanded);
    const handleButtonClick = () => {
        setIsCollapsed(!isCollapsed);
    }

    const displayText = (isCollapsed ? children.split(" ").slice(0, collapsedNumWords).join(" ")  + '...' :  children + ' ') ;

    return (
        <div className={className}>
            <span>{displayText}</span>
            <TextButton
                expandedButtonText={expandedButtonText}
                collapseButtonText={collapseButtonText}
                collapsed={isCollapsed}
                handleButtonClick={handleButtonClick}
                buttonColor={buttonColor}/>
        </div>
    );
}


export default TextExpander;