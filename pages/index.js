import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function HomePage({ postid = 100, userType = "adm" }) {

  // const router = useRouter()
  // useEffect(() => {
  //   router.push(userType === "admin" ? "/admin" : "/profile")
  // }, [])

  return (

    <>
      <div>
        <Link href="/about" >About</Link>
        <Link href="/profile" >Profile</Link>
        <Link href="/blog/12" >blog12</Link>
        <Link href="/blog/13" >blog13</Link>
        <Link href={`/blog/${postid}`} >blog{postid}</Link>
      </div>
      <div>Home Page</div>
    </>
  )
}

export default HomePage;