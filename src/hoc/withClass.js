import React from 'react';

// const withClass = (props) =>(
//     <div className={props.classes}>{props.children}</div>

// );

//Higher Orer Component wrapping the component with the arguments,  retruning the fuction which contain the JSX

// Passing the props which we can get all the props

const withClass = (WrappedComponent,className)=>{
    return props =>(
        <div className={className}>
            <WrappedComponent {...props}/> 
        </div>
    )
        
    
}

export default withClass;