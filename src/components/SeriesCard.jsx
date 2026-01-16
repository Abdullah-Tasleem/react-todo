
import styled from "styled-components";
import style from "./Netflix.module.css";
export const SeriesCard = ({ data }) => {

  const { id, img_url, name, rating, description, cast, genre, watch_url } = data; 
  const btn_style ={
    padding: "1.2rem 2.4rem",
    fontSize: "1.6rem",
    border: "none",
    backgroundColor: `${rating >= 8.7 ? "#7dcea0" : "#f7dc6f"}`,
    color: "var(--btn-color)",
    fontWeight: "bold",
    cursor: "pointer",
  };
  const Rating = styled.h4`
    font-weight: bold;
    font-size: 1.4rem;
    `;
  return (
    <li className={style.card}>
      <div>
        <img
          src={img_url}
          alt={name}
          width="40%"
          height="40%"
        />
      </div>
      <h3 className="text-red-400">Name: {name}</h3>
      <Rating>Rating: <span className={`${style.rating} ${rating >= 8.7 ? style.super_hit : style.average}`}>{rating}</span></Rating>
      <p className="text-3xl font-bold underline">Summary: {description}</p>
      <p>Genre: {genre}</p>
      <p>Cast: {cast}</p>
      <a href={watch_url} target="_blank">
        {/* <button>{age >= 18 ? "Available" : "Not available"}</button> */}
        <button style={btn_style}>Watch now</button>
      </a>
    </li>
  );
};
