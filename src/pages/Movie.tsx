import { useState } from "react";
import Input from "../components/InputMovies/index.tsx";
import Timeline from "../components/Timeline/index.tsx";

function ListMovies({onSearch, listMovies, setId, setPages}) {
  const [search, setSearch] = useState<string>("");
  
  return (
    <>
      {/*Button aparece e desaparece*/}
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