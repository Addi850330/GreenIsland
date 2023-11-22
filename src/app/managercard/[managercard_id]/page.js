import React from "react";
import style from "../../page.module.css";

const Post = ({ params }) => {
  const managercard_id = params.managercard_id;

  return <div className={style.card}>post{managercard_id}</div>;
};

export default Post;
