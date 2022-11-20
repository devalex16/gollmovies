import StyledFooter from "./StyleFooter";

function Footer() {
  return (
    <StyledFooter>
      <p>
        Fonte: https://www.themoviedb.org/
      </p>
      <a href="https://www.themoviedb.org/"  target="_blank" rel="external">
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg" />
      </a>
    </StyledFooter>
  )
}

export default Footer;