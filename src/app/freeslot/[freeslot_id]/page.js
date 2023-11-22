import React from "react";
import style from "../../page.module.css";

const Post = ({ params }) => {
  const freeslot_id = params.freeslot_id;

  return <div className={style.card}>post{freeslot_id}</div>;
};

export default Post;
