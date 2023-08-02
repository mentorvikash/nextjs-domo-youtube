import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function HomePage() {

  const router = useRouter()
  const handleOrderSubmission = () => {
    console.log("order successfully placed")
    router.push("/blog")
    // router.replace("/blog")
  }

  return (
    <>
      <div style={{ display: "flex", direction: "row" }}>
        <Link href="/about" >About</Link>
        <Link href="/profile">Profile</Link>
      </div>
      <div>Home Page</div>
      <button onClick={handleOrderSubmission}>Place Order</button>
    </>
  )
}

export default HomePage;
