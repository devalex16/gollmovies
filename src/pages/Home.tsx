import { Outlet } from "react-router-dom";
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";

type PropsHome = {
  onSearch: bool,
  setSearch: bool
}
function Home({ onSearch, setSearch }: PropsHome) {
  return (
    <>
      <Header onSearch={onSearch} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </>
  )
}

export default Home;