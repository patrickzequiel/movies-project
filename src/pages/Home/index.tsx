import { useMediaQuery } from "react-responsive";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Movies from "../../components/Movies";

import './styles.scss'

const Home = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <>
      {isMobile ? <SideBar /> : <Header />}

      <div className="container">
      <Movies />

      </div>
    </>
  );
};

export default Home;
