import { useState } from "react";
import Input from "../components/InputMovies/index.tsx";
import Timeline from "../components/Timeline/index.tsx";

type ListProps = {
  onSearch: boolean,
  setId: number,
  setPages: string
}

function ListMovies({ onSearch, listMovies, setId, setPages}: ListProps) {
  /*
   - Pega dados que digita do usuário
   - M
  */
  const [search, setSearch] = useState<string>("");
  
  return (
    <>
      {onSearch
       ? <Input setSearch={setSearch} />
       : false}
      <Timeline 
        search={search}
        listMovies={listMovies} 
        setId={setId}
        setPages={setPages}/>
    </>
  )
}

export default ListMovies;