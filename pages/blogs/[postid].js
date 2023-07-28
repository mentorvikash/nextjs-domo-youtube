import React from "react";
import { useRouter } from "next/router";

function BlogPage() {
  const route = useRouter();
  const { postid } = route.query;

  return <div>BLog page {postid}</div>;
}

export default BlogPage;
