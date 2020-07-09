import React from "react";
import Loader from "../Common/Loader";
import AllActiveBlogPosts from "./AllActiveBlogPosts";

const Posts = () => {
  return (
    <div className="container">
      <React.Suspense fallback={<Loader condition={false} />}>
        <AllActiveBlogPosts />
      </React.Suspense>
    </div>
  );
};

export default Posts;
