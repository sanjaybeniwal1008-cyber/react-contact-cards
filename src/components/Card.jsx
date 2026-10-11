import { useState } from "react";

function Card({ title }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="card">
      <h3>{title}</h3>
      <p className={liked ? "status liked" : "status"}>
        {liked ? "Liked" : "Not liked"}
      </p>
      <button onClick={() => setLiked(!liked)}>
        {liked ? "Unlike" : "Like"}
      </button>
    </div>
  );
}

export default Card;
