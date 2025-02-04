import React, { useState, useEffect } from "react";
import NoDataFound from "../Common/NoDataFound";
import { fetchBlog, getBlog } from "../../api/post-api";
import BlogPost from "./BlogPost";
import Loader from "../Common/Loader";
import conf from "../../config";
import { useHistory } from "react-router-dom";

const resource = fetchBlog();

const AllActiveBlogPosts = () => {
  const [posts, setPost] = useState(resource.getBlog.read());
  const [first, setFirst] = useState(true);
  const [iScrollIsFetching, setIScrollIsFetching] = useState(false);
  const [iScrollPage, setIScrollPage] = useState(1);
  const [paginationSize] = useState(conf.defaultPageQtyPag);
  const history = useHistory();

  const scrollHandler = () => {
    let scrollingPoint =
      window.innerHeight + document.documentElement.scrollTop;
    let offsetHeight = document.documentElement.offsetHeight;

    if (
      scrollingPoint === offsetHeight &&
      iScrollIsFetching === false &&
      paginationSize * iScrollPage < posts.total
    ) {
      setIScrollIsFetching(true);
      setIScrollPage(iScrollPage + 1);
      getBlog(paginationSize, iScrollPage * (paginationSize - 1) + iScrollPage)
        .then((resPosts) => {
          setPost(
            Object.assign(
              {},
              {
                data: [...posts.data, ...resPosts.data],
                total: resPosts.total,
              }
            )
          );
          setIScrollIsFetching(false);
        })
        .catch((err) => {});
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  useEffect(() => {
    if (first) {
      setFirst(false);
    } else {
      getBlog(paginationSize, 0).then((posts) => {
        setPost(posts);
      });
    }
  }, [history, paginationSize, first]);

  return (
    <React.Fragment>
      <NoDataFound condition={posts.data.length <= 0} />
      {posts.data.map((post) => (
        <BlogPost post={post} key={post.ID} />
      ))}
      <Loader condition={!iScrollIsFetching} />
    </React.Fragment>
  );
};

export default AllActiveBlogPosts;
