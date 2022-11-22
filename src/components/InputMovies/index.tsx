import StyledInput from "./StyleInput.tsx";

function InputText({ setSearch }: { setSearch: string }) {
  //Pegando dado que usuário digita.
  return (
    <StyledInput>
      <input type="text" placeholder="Ex: Pantera Negra" onChange={(e) => {
        setSearch(e.target.value)
      }} />
    </StyledInput>
  )
}

export default InputText;