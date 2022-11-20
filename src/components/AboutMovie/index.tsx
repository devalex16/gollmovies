import StyledMovie from "./StyleMovie";

function AboutMovie({ preview }) {
  const info = Object.keys(preview)
  const logo_production = preview.production_companies[0].logo_path
  return (
    <StyledMovie>
      <section className="capa">
        <img src={`https://image.tmdb.org/t/p/w500/${preview.backdrop_path}`} />
        <div>
          <h1>
            {preview.title}
          </h1>
          <p>
            {preview.genres.map((pre) => {
              return ` ${pre.name}`
            })}
          </p>
        </div>
      </section>
      <section className="info">
        <div>
          <mark>
            {preview.vote_average.toFixed(1)}
          </mark>
          <p>
            Avaliação do Filme
          </p>
          <img className="logo-studio" src={`https://image.tmdb.org/t/p/w500/${logo_production}`} />
        </div>
        <div className="sinopse">
          <h2>
            Sinopse
          </h2>
          <p>
            {preview.overview}
          </p>
        </div>
        <footer>
          <a href={preview.homepage} target="_blank">saiba mais sobre o filme</a>
        </footer>
      </section>
    </StyledMovie>
  )
}

export default AboutMovie;