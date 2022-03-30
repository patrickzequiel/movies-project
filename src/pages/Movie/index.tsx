import { useMediaQuery } from "react-responsive";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

const Movie = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <>
      {isMobile ? <SideBar /> : <Header />}

      <div className="container"></div>
    </>
  );
};

export default Movie;
