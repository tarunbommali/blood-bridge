import React, { useState } from "react";
import FindDonor from "../components/FindDonar";
import RegisterForm from "../components/RegisterForm";
import Main from "../components/Main";
import { navList } from "../helper/navList";
import { Link } from "react-router-dom";

const Home = () => {
  const [toogleForm, setToogleForm] = useState(true);

  return (
    <div className="flex  flex-col md:flex-row justify-center px-4 py-2 min-h-[100vh] bg-[#f5f7f8]">
      <div className="flex flex-col ">
      <ul className="flex mx-4 mt-4 px-2   bg-[#f5f5f5] md:w-[60vw]">{navList.map((item, index)=> <Link className="mx-2" key={index}>{item}</Link>)}</ul>
     <Main/>
     </div>
      {toogleForm ? (
        <FindDonor onChangeStatus={() => setToogleForm(!toogleForm)} />
      ) : (
        <RegisterForm onChangeStatus={() => setToogleForm(!toogleForm)} />
      )}
    </div>
  );
};

export default Home;
