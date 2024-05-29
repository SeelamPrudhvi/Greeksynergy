// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Home.css";

// const Home = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     axios
//       .post(`https://hoblist.com/api/movieList`, {
//         category: "movies",
//         language: "kannada",
//         genre: "all",
//         sort: "voting",
//       })
//       .then((response) => {
//         setMovies(response.data.result);
//         console.log(setMovies);
//         console.log(movies);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   }, []);
//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp * 1000); // Convert to milliseconds
//     return date.toLocaleDateString("en-US", {
//       // year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   return (
//     <div className="home-container">
//       <header>{/* <h1>Home Page</h1> */}</header>
//       {/* <h2>Movie List</h2> */}
//       <ul>
//         {movies.map((movie) => (
//           <li key={movie._id}>
//             {/* {movie.image && <img src={movie.poster} alt={movie.title} />} */}
//             <div className="top">
//               <div className="left-side">
//                 <img src={movie.poster} alt={movie.title} />
//               </div>
//               <div className="right-side">
//                 <h3>
//                   <b>Title : </b>
//                   {movie.title}
//                 </h3>
//                 <p>
//                   <b>Genre : </b>
//                   {movie.genre}
//                 </p>
//                 <p>
//                   <b>Director : </b>
//                   {movie.director}
//                 </p>
//                 <p>
//                   <b>Starring : </b>
//                   {movie.stars}
//                 </p>
//                 <p>
//                   <span>Mins</span>
//                   <span> | </span>
//                   <span>English</span>
//                   <span> | </span>
//                   <span>{formatDate(movie.releasedDate)}</span>
//                 </p>
//                 <p style={{ color: "#5dd2d8" }}>
//                   <span>{movie.pageViews} views</span>
//                   <span>|</span>
//                   <span>Voted by {movie.totalVoted} People</span>
//                 </p>
//               </div>
//             </div>
//             <div className="bottom">
//               <button>Watch Trailer</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .post(`https://hoblist.com/api/movieList`, {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      })
      .then((response) => {
        setMovies(response.data.result);
        console.log(setMovies);
        console.log(movies);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="home-container">
      {/* <header><h1>Home Page</h1></header> */}
      <center>
        <h2>Movie List</h2>
      </center>

      <ul>
        {movies.map((movie) => (
          <li key={movie._id}>
            {/* {movie.image && <img src={movie.poster} alt={movie.title} />} */}
            <div className="top">
              <div className="voting">
                <button className="vote-button">&#9650;</button>
                <div>{movie.voting}</div>
                <button className="vote-button">&#9660;</button>
                <div>Votes</div>
              </div>
              <div className="left-side">
                <img src={movie.poster} alt={movie.title} />
              </div>
              <div className="right-side">
                <h3>
                  <b>Title : </b>
                  {movie.title}
                </h3>
                <p>
                  <b>Genre : </b>
                  {movie.genre}
                </p>
                <p>
                  <b>Director : </b>
                  {movie.director}
                </p>
                <p>
                  <b>Starring : </b>
                  {movie.stars}
                </p>
                <p>
                  <span>Mins</span>
                  <span> | </span>
                  <span>English</span>
                  <span> | </span>
                  <span>{formatDate(movie.releasedDate)}</span>
                </p>
                <p style={{ color: "#5dd2d8" }}>
                  <span>{movie.pageViews} views</span>
                  <span>|</span>
                  <span>Voted by {movie.totalVoted} People</span>
                </p>
              </div>
            </div>
            <div className="bottom">
              <button>Watch Trailer</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
