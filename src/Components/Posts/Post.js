import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlogPost } from "../../api/post-api";
import Loader from "../Common/Loader";
import moment from "moment";

const Post = () => {
  const { permalink } = useParams();
  const [post, setPost] = useState({
    title: "",
    createdDate: "",
    createdBy: "",
    content: "",
  });

  useEffect(() => {
    document.title = "GG-CMS - Blog";

    getBlogPost(permalink)
      .then((json) => setPost(json))
      .catch((err) => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <Loader condition={post.title !== ""} />
      <div
        className={`${
          post.title === "" ? "hide" : "scale-in-center"
        } post container`}
      >
        <div className="post-header row">
          <div className="post-title col">
            <h1>{post.title}</h1>
          </div>
          <div className="col post-info text-right">
            <div className="post-date">
              {moment(post.createdDate).format("YYYY-DD-MM HH:mm:ss")}
            </div>
            <div className="post-author">{post.createdBy}</div>
          </div>
        </div>
        <div
          className="post-content row"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </React.Fragment>
  );
};

export default Post;
