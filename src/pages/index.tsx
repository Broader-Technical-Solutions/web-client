import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Index() {
  return (
    <>
      <Head>
        <title>Web Client</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello, world!</h1>

        <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
          Button
        </button>

      </main>

      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.blue_grey-red.min.css" />
      <script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
      </>
  )
}
