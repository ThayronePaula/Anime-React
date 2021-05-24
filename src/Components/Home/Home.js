import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import styles from "./Home.module.scss";

const api = "https://kitsu.io/api/edge";

const Home = () => {
  const [anime, setAnime] = React.useState({});
  const [value, setValue] = React.useState("");
  React.useEffect(() => {
    const fetchAnime = async () => {
      try {
        const response = await fetch(
          `${api}/anime?filter[text]=${value}&page[limit]=6`
        );
        const json = await response.json();
        setAnime(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAnime();
  }, [value]);

  anime && console.log(anime);

  return (
    <section className={styles.home}>
      <Input value={value} setValue={setValue} />
      <ul className="anime-list">
        {anime.data &&
          anime.data.map((item) => (
            <Link key={item.id} to={`anime/${item.id}`}>
              <li>
                <img
                  src={item.attributes.posterImage.small}
                  alt={item.attributes.canonicalTitle}
                />

                <h1>{item.attributes.canonicalTitle}</h1>
              </li>
            </Link>
          ))}
      </ul>
    </section>
  );
};

export default Home;
