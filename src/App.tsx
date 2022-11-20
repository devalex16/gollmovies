import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CardMovies from "./pages/Movie";
import InfoMovie from "./pages/InfoMovie";

import api from "./services/api";

import CSSReset from './style/StyleGlobals';

export default function App() {
  const [onSearch, setSearch] = useState<bool>(false);
  const [listMovies, setListMovies] = useState<object>({});
  const [pages, setPages] = useState<string>("page=1")
  const [id, setId] = useState<int>(0);
  const [preview, setInfoMovie] = useState<object>({})

  const API_KEY = 'e117d50f10743c53c008d7656d44be12';

  useEffect(() => {
    function listenerMovies() {
      api.get(`/popular?api_key=${API_KEY}&language=pt-BR&${pages}`)
        .then((res) => {
          setListMovies(res.data.results)
          setId(res.data.results[0].id);
        })
    }
    listenerMovies();
  }, [pages])

  useEffect(() => {
    function getInfoMovie() {
      api.get(`/${id}?api_key=${API_KEY}&language=pt-BR`)
        .then((response) => {
          setInfoMovie(response.data);
        })
        .catch(() => null)
    }
    getInfoMovie()
  }, [id])

  return (
    <>
      <CSSReset />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home
              onSearch={onSearch}
              setSearch={setSearch} />
          }>
            <Route path="/" element={
              <CardMovies
                onSearch={onSearch}
                listMovies={listMovies}
                setId={setId}
                setPages={setPages} />
            } />
            <Route path="/sobre-o-filme" element={
              <InfoMovie
                preview={preview} />
            } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}