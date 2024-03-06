// import { createContext, useState } from "react";

// export const PostDetailsContext = createContext(null)

//  function PostContext ({children}) {
//   const [postDetails ,  setPostDetails] = useState({})

//   return (
//     <PostDetailsContext.Provider value={{postDetails,setPostDetails}}>
//       {children}
//     </PostDetailsContext.Provider>
//   )
// }



// export default PostContext;


import React, { createContext, useState } from "react";
export const PostDetailsContext = createContext(null);

function PostContext({ children }) {

  const [postDetails, setPostDetails] = useState()

  return (
    
    <PostDetailsContext.Provider value={{ postDetails, setPostDetails }}>
      {children}
    </PostDetailsContext.Provider>

  );
}

export default PostContext;
