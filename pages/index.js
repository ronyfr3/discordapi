import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Discord Oauth</title>
        <meta name="description" content="Discord Oauth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <a
          href={`https://discord.com/api/oauth2/authorize?client_id=977230484927021066&redirect_uri=https%3A%2F%2Fdiscord-oauth-tutorial.atticuskuhn.repl.co&response_type=code&scope=identify`}
        >
          Login
        </a>
      </div>
    </div>
  )
}
