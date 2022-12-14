import StyledHeader from "./StyleHeader.tsx";

type PropsHeader = {
  onSearch: boolean,
  setSearch: boolean
}

function Header({ onSearch, setSearch }: PropsHeader) {
  return (
    <StyledHeader>
      {/* Logo */}
      <h1>Goll<mark>Movies</mark></h1>
      {/*Botão de pesquisa*/}
      <button onClick={() => {
        setSearch(!onSearch);
      }} >
        🔎
      </button>
    </StyledHeader>
  )
}

export default Header;