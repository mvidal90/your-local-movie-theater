import React from 'react'
 
export const DescriptionMovie = ( { n, descr } ) => {
    
    const learnMore = () => {
        document.getElementById( n ).style.display = "block";
        document.getElementById("more"+n).style.display = "none";
    };

    const learnLess = () => {
        document.getElementById( n ).style.display = "none";
        document.getElementById("more"+n).style.display = "block";
    };
    
    return (
        <>
            <button id={"more"+n} className="more" onClick={ learnMore }>Learn more...</button>  
            <div id={ n } className="description">
                { descr }
                <button className="less" onClick={ learnLess}>Learn less...</button>  
            </div>
            
        </>
    )
        
}



