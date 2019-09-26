import React,{useEffect,useRef,useContext} from "react";
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
    const toggleBtnRef = useRef(null) // UseRef used to get the dom is for functional or dumb component
    const authContext = useContext(AuthContext);
    useEffect(()=>{
      //run after every render cycle 
        console.log('[Cockpit.js]  for functional component')
        // setTimeout(()=>{
        //     alert('Hello Cockpit!!')
        // },1000)
        toggleBtnRef.current.click() //async
        // for Http req as well
        return ()=>{ // will execute once the Cockpit component get removed
            console.log('[Cockpit.js] Clean up work will get  done ')
        }
    },[props.persons]) // second array based on the dependency field it will call the useEffect inner values/ operations; Mulitple dependency can provide

    useEffect(()=>{
        console.log('[Cockpit.js]  for 2nd UseEffect functional component')
        
        return ()=>{ // will execute once the Cockpit component get removed
            console.log('[Cockpit.js] 2nd UseEffect Clean up work will get  done ')
        }
    })
    
    const assignedClasses = [];

    let btnClass=''
    if(props.showPersons){
        btnClass = classes.Red;
    }
   
//Added CSS classes Dynamically
    if (props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
      assignedClasses.push(classes.bold);
    }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is a paragraph Working!!</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      {/* <AuthContext.Consumer>
        {
          (context)=>  <button onClick={context.login}>Log in</button>
        }
      </AuthContext.Consumer> */}
      <button onClick={authContext.login}>Log in</button>
     
    </div>
  );
};


export default React.memo(cockpit); //for performance based React.memo will update the component if the props changes for functional component

// Pure Component in react===> will check all the props that is there any change happens if not the component will not get update