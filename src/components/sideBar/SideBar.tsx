import { useState } from "react";
import SidebarLogo from "../../assets/svgs/sidebar-logo.svg";
import Booking from "../../assets/svgs/booking.svg";
import Case from "../../assets/svgs/case.svg";
import User from "../../assets/svgs/user.svg";

const SideBar = () => {
  const [active, setActive] = useState(2);

  return (
    <div
      className="z-10 flex flex-col bg-[#fff] w-[60px]  pt-[18px] pb-[18px] pr[18px]  rounded-[10px]  hover:w-[280px] overflow-hidden duration-200 absolute hover:shadow-2xl	"
      style={{ height: "calc(100% - 1.5rem)" }}
    >
      <div className=" flex items-center gap-[12px]	ml-[18px] ">
        <img src={SidebarLogo} alt="logo" className=" ml-[-10px]" />
        <p className=" text-[8px] w-[195px] font-medium leading-[10.8px] text-nowrap	 ">
          პოლიტიკის დაგეგმვისა და კორდინაციის
          <br /> მართვის ელექტრონული სისტემა
        </p>
      </div>

      <div className="flex flex-col mt-[80px] gap-3">
        <div
          className={`flex items-center gap-[18px] py-[12px] ${
            active === 1 &&
            "border-l-2 border-solid border-[#2970FF]  bg-blue-500 bg-opacity-30"
          } `}
          onClick={() => setActive(1)}
        >
          <img src={Booking} alt="booking" className=" ml-[18px]" />
          <p
            className={` text-[14px] font-normal ${
              active === 1 && "text-blue-900"
            } `}
          >
            ჩანართები
          </p>
        </div>

        <div
          className={`flex items-center gap-[18px] py-[12px] ${
            active === 2 &&
            "border-l-2 border-solid border-[#2970FF]  bg-blue-500 bg-opacity-30"
          } `}
          onClick={() => setActive(2)}
        >
          <img src={User} alt="user" className=" ml-[18px]" />
          <p
            className={` text-[14px] font-normal ${
              active === 2 && "text-blue-900"
            } `}
          >
            მომხმარებლები
          </p>
        </div>

        <div
          className={`flex items-center gap-[18px] py-[12px] ${
            active === 3 &&
            "border-l-2 border-solid border-[#2970FF]  bg-blue-500 bg-opacity-30"
          } `}
          onClick={() => setActive(3)}
        >
          <img src={Case} alt="role" className=" ml-[18px]" />
          <p
            className={` text-[14px] font-normal ${
              active === 3 && "text-blue-900"
            } `}
          >
            როლები
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
