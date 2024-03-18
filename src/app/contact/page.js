import Link from "next/link";
import ThemeToggle from "../about/components/ThemeToggle";
import { useAppDispatch } from "@/lib/hooks";

import { fetchAPi } from "@/lib/features/themeSlice";
import { store } from "@/lib/store";
export const metadata = {
  title: "Contact page",
  description: "Generated for Contact page",
};

export default  async function Contact() {

  const initialState = store.getState()
 
  
  if(Object.keys(initialState.theme.data).length == 0){
    console.log(initialState, "Store is Empty")
    const myData = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await myData.json()
    store.dispatch(fetchAPi(data))
    // const getState = store.getState()
 
  }else{
    console.log("data is already there")
  }
  
  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1 style={{ textAlign: "center", marginTop: 50 }}>Contact Page</h1>
      <br /><br /><br />
      <ThemeToggle getState={initialState} />
      <br /><br />
      <Link href="/" style={{ textAlign: "center", color: "lightblue" }}>
        <h2>Back to home</h2>
      </Link>
      <Link href="/about" style={{ textAlign: "center", color: "lightblue" }}>
        <h2>Go to about</h2>
      </Link>
    </div>
  );
}
