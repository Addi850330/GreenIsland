import React from "react";
import style from "../../page.module.css";

const Post = ({ params }) => {
  const magiccard_id = params.magiccard_id;

  return <div className={style.card}>post{magiccard_id}</div>;
};

export default Post;
