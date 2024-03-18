import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { store, makeStore} from "@/lib/store";
import { fetchAPi } from "@/lib/features/themeSlice";
export default async function Home() {

  const initialState = store.getState()

  if(Object.keys(initialState.theme.data).length == 0){
    console.log(initialState, "Store is Empty")
    console.log(initialState.theme.data, "initialState")
    const myData = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await myData.json()
    store.dispatch(fetchAPi(data))
  }else{
    console.log("data is already there")
  }


  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <Link href="/about" className={styles.card}>
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>Go to About page.</p>
        </Link>

        <Link href="/contact" className={styles.card}>
          <h2>
            Contact <span>-&gt;</span>
          </h2>
          <p>Go to Contact page.</p>
        </Link>

      </div>
    </main>
  );
}