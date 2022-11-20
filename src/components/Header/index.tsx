import StyledHeader from "./StyleHeader.tsx";

type PropsHeader = {
  onSearch: bool,
  setSearch: bool
}

function Header({onSearch, setSearch}: PropsHeader) {
  return (
    <StyledHeader>
      {/* Logo */}
      <h1>Goll<mark>Movies</mark></h1>
      <button onClick={() => {
        setSearch(!onSearch);
      }} >
        🔎
      </button>
    </StyledHeader>
  )
}

export default Header;