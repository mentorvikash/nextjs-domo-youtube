import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

function Profile() {
  const router = useRouter()


  const handleSubmit = () => {
    let isSuccess = false
    if (isSuccess) {
      router.push("./")
    }
  }

  return (
    <>
      <div>Profile page</div>
      <Link href="/blog/12" >blog12</Link>
      <Link href="/blog/13" >blog13</Link>
      <Link href="/">Back</Link>
      <button onClick={handleSubmit} >Submit</button>
    </>
  )
}
export default Profile;