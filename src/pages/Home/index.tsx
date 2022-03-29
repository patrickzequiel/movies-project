import { useMediaQuery } from "react-responsive";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";

const Home = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <>
      {isMobile ? <SideBar /> : <Header />}
    </>
  );
};

export default Home;
