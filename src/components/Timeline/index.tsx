import { useEffect } from 'react';
import { Link } from "react-router-dom";
import StyledTimeline from "./StyleTimeline";

type TimeProps = {
  search: string,
  setId: number,
  setPages: string
}
function Timeline({ search, listMovies, setId, setPages }: TimeProps) {
  
  const listBanner = Object.keys(listMovies)

  return (
    <StyledTimeline>
      <h1>
        Filmes em Alta nos Cinemas
      </h1>
      <section className="list">
        {listBanner.filter((list) => {
          //Filtrando filmes
          const banner = listMovies[list]
          const titleNormalized = banner.title.toLowerCase();
          const searchNormalized = search.toLowerCase();
          return titleNormalized.includes(searchNormalized);
        }).map((list) => {
          const banner = listMovies[list]
          const data = banner.release_date.split("-")
          //Pegando data e transformando legível
          function getData() {
            let mes = "jan";
            if (data[1] == '01') mes = 'jan';
            if (data[1] == '02') mes = 'fev';
            if (data[1] == '03') mes = 'mar';
            if (data[1] == '04') mes = 'abr';
            if (data[1] == '05') mes = 'mai';
            if (data[1] == '06') mes = 'jun';
            if (data[1] == '07') mes = 'jul';
            if (data[1] == '08') mes = 'ago';
            if (data[1] == '09') mes = 'set';
            if (data[1] == '10') mes = 'out';
            if (data[1] == '11') mes = 'nov';
            if (data[1] == '12') mes = 'dez';
            return `${data[2]} de ${mes}. de ${data[0]}`;
          }
          return (

            <div
              className="banner"
              onClick={() => {
                setId(banner.id)
              }}
              key={banner.id} >
              <Link to="sobre-o-filme" >
                <img src={`https://image.tmdb.org/t/p/w500/${banner.poster_path}`} />
              </Link>
              <div className="info-movies">
                <h2>
                  {banner.title}
                </h2>
                <p>
                  {getData()}
                </p>
              </div>
            </div>
          )
        })}
      </section>
      <section className="button-pages">
        <div onClick={() => {
          setPages("page=1")
        }} className="buttons">
          1
        </div>
        <div onClick={() => {
          setPages("page=2")
        }} className="buttons">
          2
        </div>
        <div onClick={() => {
          setPages("page=3")
        }} className="buttons">
          3
        </div>
      </section>
    </StyledTimeline>
  )
}

export default Timeline;