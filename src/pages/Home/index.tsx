import { useMediaQuery } from "react-responsive";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import Card from "../../components/Card/index";


const Home = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <>
      {isMobile ? <SideBar /> : <Header />}

      <Card />
    </>
  );
};

export default Home;
