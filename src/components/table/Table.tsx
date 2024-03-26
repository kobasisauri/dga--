import React, { useState, useEffect } from "react";
import { generalUserType } from "../../types/user";
import { Button, Select } from "antd";
import CustomButton from "../Button";
import Filter from "../Filter";
import bullets from "../../assets/svgs/bullets.svg";
import AddUser from "../parts/addUser";
import close from "../../assets/svgs/close.svg";
import { deleteUser } from "../../services/users";

type TableProps = {
  tableData: generalUserType[];
};

const header = [
  "სახელი",
  "გვარი",
  "უწყება",
  "თანამდებობა",
  "ელ. ფოსტა",
  "მობილური",
];

const Table: React.FC<TableProps> = ({ tableData }) => {
  const [addUser, setAddUser] = useState(false);
  const [data, setData] = useState<generalUserType[]>([]);
  const [edit, setEdit] = useState<generalUserType>();

  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  useEffect(() => {
    setData(tableData);
  }, [tableData]);

  return (
    <>
      <div className="bg-white py-[10px] px-[16px] rounded-[10px] h-full	 ">
        <div className="flex justify-between  ">
          <div className="flex gap-4">
            <CustomButton text="დამატება" onClick={() => setAddUser(true)} />
            <Filter placeholder="სახელი გვარი" />
          </div>
          <Select
            style={{ backgroundColor: "#F6F4F3", borderRadius: "8px" }}
            bordered={false}
            defaultValue="ყველა"
            options={[
              { value: "all", label: "ყველა" },
              { value: "some", label: "ზოგი" },
            ]}
          />
        </div>
        <div
          className="  mt-[20px] w-full overflow-scroll "
          style={{ height: "calc(100% - 52px)" }}
        >
          <div className="pl-[64px] flex w-full	">
            {header.map((item, i) => (
              <h3
                className=" text-sm	 max-w-48	 w-full text-[#757575] mb-[8px]"
                key={i}
              >
                {item}
              </h3>
            ))}
          </div>
          {!!data &&
            data.map((item, i) => (
              <div
                key={i}
                className=" px-[12px] py-[12px] border-t border-solid border-gray-200 flex items-center "
              >
                <img
                  width={24}
                  height={24}
                  className="mr-[28px]"
                  src={item.image}
                  alt="profile-poto"
                />
                <p className=" text-sm	 max-w-48	 w-full">{item.username}</p>

                <p className=" text-sm	 max-w-48	 w-full">{item.lastName}</p>

                <p className=" text-sm	 max-w-48	 w-full">{item.lastName}</p>

                <p className=" text-sm	 max-w-48	 w-full">{item.lastName}</p>

                <p className=" text-sm	 max-w-48	 w-full">{item.email}</p>

                <p className=" text-sm	 max-w-48	 w-full">{item.phone}</p>

                <div className="flex flex-1 justify-end px-[12px]  relative">
                  <img
                    className=" self-end  "
                    src={bullets}
                    alt="bullets"
                    onClick={() => toggleMenu(i)}
                  />

                  {openMenuIndex === i && (
                    <div className="absolute  p-6 pt-2 bg-[#F4F5F9] shadow-2xl z-30  top-9 right-4 flex flex-col items-end rounded-lg">
                      <img
                        height={34}
                        width={34}
                        src={close}
                        alt="close button"
                        onClick={() => setOpenMenuIndex(null)}
                      />
                      <div className="flex gap-4 mt-3">
                        <Button
                          type="primary"
                          danger
                          onClick={() => {
                            deleteUser(item.id).then((res: unknown) => {
                              console.log(res);
                              setData((prevData) =>
                                prevData.filter(
                                  (userData) => userData.id !== item.id
                                )
                              );

                              setOpenMenuIndex(null);
                            });
                          }}
                        >
                          წაშლა
                        </Button>

                        <Button
                          type="primary"
                          className=" bg-amber-400"
                          onClick={() => {
                            setEdit(item);
                            setOpenMenuIndex(null);
                            setAddUser(true);
                          }}
                        >
                          ცვლილება
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
      {!!addUser && (
        <AddUser onClose={() => setAddUser(false)} editData={edit} />
      )}
    </>
  );
};

export default Table;
