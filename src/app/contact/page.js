import Link from "next/link";
import ThemeToggle from "../about/components/ThemeToggle";
import { useAppDispatch } from "@/lib/hooks";

import { fetchAPi } from "@/lib/features/themeSlice";
import { store, observable } from "@/lib/store";
import { userInfo } from "../../api/api";
export const metadata = {
  title: "Contact page",
  description: "Generated for Contact page",
};

export default async function Contact() {
  let initialState = store.getState();
  let updatedData;
  if (Object.keys(initialState.theme.data).length == 0) {
    console.log(initialState, "Store is Empty in contactpage");
    console.log(initialState.theme.data, "initialState");

    const Data = await userInfo();

    store.dispatch(fetchAPi(Data));
    updatedData = store.getState();
    console.log(Data, "Data");
  } else {
    console.log("data is already there");
  }

  console.log("Executing in contact");

  console.log(updatedData, "updatedData");

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h1 style={{ textAlign: "center", marginTop: 50 }}>Contact Page</h1>
      <br />
      <br />
      <br />
      <br></br>
      <ThemeToggle getState={Object.keys(initialState.theme.data).length == 0 ? updatedData : initialState} />
      <br />
      <br />
      <Link href="/" style={{ textAlign: "center", color: "lightblue" }}>
        <h2>Back to home</h2>
      </Link>
      <Link href="/about" style={{ textAlign: "center", color: "lightblue" }}>
        <h2>Go to about</h2>
      </Link>
    </div>
  );
}
