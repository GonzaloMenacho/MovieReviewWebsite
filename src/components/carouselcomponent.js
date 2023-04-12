import React from "react";
import { Carousel, CarouselItem } from "react-carousel-minimal";
import Image1 from "../images/MovieWallpapers/Avengers Endgame.jpg"
import Image2 from "../images/MovieWallpapers/John Wick Chapter 3  Parabellum.jpg"
import Image3 from "../images/MovieWallpapers/Joker.jpg"
import Image4 from "../images/MovieWallpapers/Morbius.jpg"
import Image5 from "../images/MovieWallpapers/Pulp Fiction.jpg"
import Image6 from "../images/MovieWallpapers/Sipderman No Way Home.jpg"
import Image7 from "../images/MovieWallpapers/The Avengers.jpg"
import Image8 from "../images/MovieWallpapers/The Dark Knight.jpg"
import Image9 from "../images/MovieWallpapers/Thor Ragnarok.jpg"
import Image10 from "../images/MovieWallpapers/forrest.jpg"

const styles = {
    container: {
      textAlign: "center",
      maxWidth: "1000px",
      margin: "0 auto",
      paddingTop: "20px",
    },
  };
  
  const CarouselComponent = () => {
    const data = [
      {
        image: Image1,
        caption: "Avengers Endgame",
      },
      {
        image: Image2,
        caption: "John Wick Chapter 3  Parabellum",
      },
      {
        image: Image3,
        caption: "Joker",
      },
      {
        image: Image4,
        caption: "Morbius",
      },
      {
        image: Image5,
        caption: "Pulp Fiction",
      },
      {
        image: Image6,
        caption: "Sipderman No Way Home",
      },
      {
        image: Image7,
        caption: "The Avengers",
      },
      {
        image: Image8,
        caption: "The Dark Knight",
      },
      {
        image: Image9,
        caption: "Thor Ragnarok",
      },
      {
        image: Image10,
        caption: "Forrest Gump",
      }
    ];
  
    return (
      <div className={styles.container}>
        <Carousel
        
          data={data}
          time={10000}
          width="1000px"
          height="600px"
          captionStyle={{
            
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          fontSize: "2rem",
          fontWeight: "bold",
          background: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7))",
          borderRadius: "0px 0px 10px 10px",
          padding: "10px",
          color: "#fff",
          }}
          radius="10px"
          slideBackgroundColor="darkgrey"
          slideImageFit="cover"
          automatic={true}
          pauseIconColor="white"
          pauseIconSize="40px"
          slideImageClassName="custom-image"
        />
      </div>
    );
  };
  
  export default CarouselComponent;
