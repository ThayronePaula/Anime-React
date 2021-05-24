import React from "react";
import { useParams } from "react-router";
import styles from "./Anime.module.scss";

const Anime = () => {
  const { id } = useParams();
  const [anime, setAnime] = React.useState({});
  // const [value, setValue] = React.useState("");
  React.useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch(`https://kitsu.io/api/edge/anime/${id}`);
        const json = await response.json();
        setAnime(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAnime();
  }, [id]);

  console.log(anime);
  if (!anime.data) return null;
  return (
    <section className={styles.anime}>
      <img
        src={anime.data.attributes.posterImage.large}
        alt={anime.data.attributes.canonicalTitle}
      />

      <div className={styles.description}>
        <h1>{anime.data.attributes.canonicalTitle}</h1>
        <p>{anime.data.attributes.description}</p>
       



      </div>
    </section>
  );
};

export default Anime;
