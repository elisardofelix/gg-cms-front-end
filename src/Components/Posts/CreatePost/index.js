import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import GlobalContext from "../../../context/globalcontext";
import { createBlogPost } from "../../../api/post-api";
import toastr from "toastr";
import Quill from "quill";
import CreatePostForm from "./CreatePostForm";
import jQuery from "jquery";
import "quill/dist/quill.snow.css";

const CreatePost = () => {
  const [permaLink, setPermaLink] = useState("");
  const [title, setTitle] = useState("");
  const [contextState, ,] = useContext(GlobalContext);
  const history = useHistory();
  useEffect(() => {
    document.title = "GG-CMS - Register";
    let myQuill = new Quill("#editorjs", {
      modules: {
        toolbar: {
          container: [
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }], // text direction

            [{ size: ["small", false, "large", "huge"] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            [{ align: [] }],

            ["clean"], // remove formatting button
            ["image"],
          ],
          handlers: {
            image: () => {
              var range = myQuill.getSelection();
              var value = prompt("What is the image URL");
              if (value) {
                myQuill.insertEmbed(range.index, "image", value, "");
              }
            },
          },
        },
      },
      theme: "snow",
    });
  }, []);

  const createPostHandler = () => {
    const content = jQuery("#editorjs > .ql-editor").html();
    const post = {
      title,
      permaLink,
      content,
    };

    createBlogPost(contextState.token, post)
      .then(() => {
        toastr.success("Post Creado Exitosamente.");
        history.push("/");
      })
      .catch((err) => {
        toastr.error("Error en la Creacion.");
        console.error(err);
      });
  };

  return (
    <div className="container">
      <CreatePostForm
        createHandler={createPostHandler}
        permalink_state={{ permaLink, setPermaLink }}
        title_state={{ title, setTitle }}
      />
    </div>
  );
};

export default CreatePost;
