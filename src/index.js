const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
        const movies = data.results;
        const container = document.getElementById("movies");

        movies.forEach(movie => {
            const poster = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
            const title = movie.title;

            const newComponent = document.createElement("div");
            newComponent.innerHTML = `
                <img src="${poster}" alt="${title}" />
                <p>${title}</p>
            `;
            container.appendChild(newComponent);
        });
    })
    .catch(err => console.error("Fetch error:", err));