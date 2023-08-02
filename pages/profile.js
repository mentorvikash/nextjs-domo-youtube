import Link from "next/link";
import React from "react";

function Profile({ blogid = 100 }) {
  return (
    <>
      <div>Profile page</div>
      <Link href="/blog/1" >blog 1</Link>
      <Link href="/blog/2" >blog 2</Link>
      <Link href="/blog/3" replace >blog 3</Link>
      <Link href={`/blog/${blogid}`}>blog {blogid}</Link >
      <Link href="/" >Back</Link>
    </>
  )
}

export default Profile;
