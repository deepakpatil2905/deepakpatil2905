const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    //searched movies
const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
//most popular movies
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";

    let moviebox = document.querySelector("#movie-box")

    const getMovies = async(api) => {
      const response = await fetch(api);
      const data = await response.json()
      searchMovies(data.results)
    }

    const searchMovies = (data) => {
        moviebox.innerHTML="";
        //reset page first
        data.forEach(
            (item) => {
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML=`<img id="box1" src="${IMGPATH + item.poster_path}" alt="">
            <div class="overlay">
                <div class="title">
                    <h2>${item.original_title}</h2>
                    <span>${item.vote_average}</span>
                </div>
                <h3>${item.overview}</h3>
            </div>`;
            moviebox.appendChild(box)
        } )
    }

    document.querySelector("#search").addEventListener(
        "keyup",
        function(event){
            if(event.target.value != ""){
                getMovies(SEARCHAPI + event.target.value)
            }else{
                getMovies(APIURL)
            }
        }
    )

    getMovies(APIURL);