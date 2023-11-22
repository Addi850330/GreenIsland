import React from "react";
import style from "../../page.module.css";

const Post = ({ params }) => {
  const specifycard_id = params.specifycard_id;

  return <div className={style.card}>post{specifycard_id}</div>;
};

export default Post;
