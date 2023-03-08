import Head from "next/head"
// import Image from "next/image"
// import { Inter } from "next/font/google"
// import styles from "@/styles/Home.module.css"

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>EC User Management</title>
        <meta name="description" content="User (or Employee) Management" />
        <meta name="keywords" content="HTML, CSS, JavaScript, React, NextJS, Java, Spring Boot, MySQL, AWS" />
        <meta name="author" content="Eliezer Encarnacion" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/user-gear.png" />
      </Head>

      <main>
        <h1 className=" text-center py-[30%]">{process.env.NEXT_PUBLIC_HI}</h1>
      </main>
    </>
  )
}