// "use client"
// import React, { useEffect } from "react";
// import { toggleTheme, fetchAPi, addData } from "@/lib/features/themeSlice";
// import { useAppDispatch, useAppSelector } from "@/lib/hooks";
// import { useRef } from "react";

// import { store } from "@/lib/store";

// import {useAppStore} from "../../../lib/hooks"
// const ThemeToggle = (props) => {
//   console.log(props.getState.theme.data, "props ")
//   const store = useAppStore()
//   const initialized = useRef(false)
//   if (!initialized.current) {
//     initialized.current = true
//   }
//   const currentTheme = useAppSelector((state) => state.theme.currentTheme);
//   const data = useAppSelector((state) => state.theme.data);
//   const dispatch = useAppDispatch();

// if(!data){
//   useEffect(()=>{
//     dispatch(addData(props?.getState?.theme?.data))
//     console.log(dispatch(addData(props?.getState?.theme?.data)), "dispatch")
//   }, [props.getState.theme.data])
// }else{

// }

//   return (
//     <div>
//       {/* {currentT} myname */}
//       <p>Current theme: {currentTheme}</p>
//       <br />
//       <br />
//       <br />
//       <button onClick={() => dispatch(toggleTheme())}>
//         Update theme color
//       </button>
//       {
//         JSON.stringify(data)
//       }
//     </div>
//   );
// };

// export default ThemeToggle;

"use client";
import React, { useEffect, useState } from "react";
import { toggleTheme, fetchAPi, addData } from "@/lib/features/themeSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useRef } from "react";

import { useAppStore } from "@/lib/hooks";

const ThemeToggle = (props) => {
  console.log(props.getState.theme.data, "propsy");
  const store = useAppStore();
  const initialized = useRef(false);
  if (!initialized.current) {
    initialized.current = true;
  }
  const currentTheme = useAppSelector((state) => state.theme.currentTheme);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(addData(props?.getState?.theme?.data));
    console.log("Dispatched data:", props?.getState?.theme?.data);
  }, [props.getState.theme.data]);

  const data = useAppSelector((state) => state.theme.data);
  
  console.log(data, "data");

  return (
    <div>
      <p>Current theme: {currentTheme}</p>
      <br />
      <br />
      <br />
      <button onClick={() => dispatch(toggleTheme())}>
        Update theme color
      </button>
      {data && JSON.stringify(data)}
    </div>
  );
};

export default ThemeToggle;
