"use client";

import { store } from "@/lib/store";
import { Provider } from "react-redux";
import {useRef} from "react"
import { makeStore } from "@/lib/store";
import { fetchAPi } from "@/lib/features/themeSlice";

export default function StoreProvider({ children }) {
  const storeRef = useRef()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    console.log(storeRef.current)
  

  }
  console.log(store, "store")
  return <Provider store={store}>{children}</Provider>;
}
