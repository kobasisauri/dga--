import { useEffect, useState } from "react";
import SideBar from "../components/sideBar/SideBar";
import Table from "../components/table/Table";
import { getAllUser } from "../services/users";
import { generalUserType } from "../types/user";

const Home = () => {
  const [data, setData] = useState<generalUserType[]>([]);

  useEffect(() => {
    getAllUser().then((res) => {
      setData(res.data.users);
    });
  }, []);
  return (
    <div className=" h-screen  p-3  flex gap-[18px] relative  bg-[#F4F5F9]	">
      <SideBar />
      <div className="ml-[70px] w-full ">
        {data ? <Table tableData={data} /> : <div>Loading...</div>}
      </div>
    </div>
  );
};

export default Home;
