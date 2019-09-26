import React from 'react';

const authContext = React.createContext({
    authenticate :false,
    login: () => {}
});// setting up the default value for intellicence


export default authContext;



// use of context api==> prevent unwanted props drilling
// context Api => create a context as AuthContext class wrapper with the React.createContext({authenticated:false.login:()=>{}})// we have to pass anything, like array,object,string
// ----------------Wrap the componenent----------------
//create Provider as <AuthContext.Provider value={{}}></AuthContext>

//create Consumer as <AuthContext.Consumer >{(context)=>}</AuthContext>
//--------------Another Type----------------------------------
// contextType[class based component] & UseContext(AuthContext) [functional or dumb component] 
