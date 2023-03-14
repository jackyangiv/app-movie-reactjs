Assignment 02 (Starter Code)
├─ package.json
├─ public
└─ src
   ├─ App.js
   ├─ index.css
   ├─ index.js
   ├─ pages
   │  ├─ browse
   │  │  └─ Browse.jsx
   │  └─ search
   │     └─ Search.jsx
   └─ serviceWorker.js
   https://api.themoviedb.org/3/movie/550?api_key=a4ae14e6dc40d4017e61df4a11712f48
    <div>
        <div>
          {original.map((img) => (
            <div className={classes.bump}>
              <a href="#">
                <img
                  key={img.id}
                  className={classes.imgoriginal}
                  src={`https://image.tmdb.org/t/p/original${img.poster_path}`}
                />
              </a>
            </div>
          ))}
        </div>
      </div>