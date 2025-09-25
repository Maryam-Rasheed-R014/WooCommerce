import Firstsection from "../components/featuredCatagories/firstsection";

import Filter from "../components/home/filter";
import Cards from "../components/home/cards";
export default function Home() {
  return (
    <>
      <Firstsection />
      <div className="container-fluid px-5 flex  sm:flex-row flex-col my-10 md:gap-0 gap-5 items-start mx-auto  ">
        {/*-----------------------left side-------------- ---------------*/}
        <Filter />
        {/* -----------------------right side-------------------- */}
        <Cards />
      </div>
    </>
  );
}
