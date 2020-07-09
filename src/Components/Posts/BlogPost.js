import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const BlogPost = ({ post }) => (
  <div className="slide-in-left post container">
    <div className="post-header row">
      <div className="post-title col">
        <Link to={"/post/" + post.permaLink}>{post.title}</Link>
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
);

export default BlogPost;
