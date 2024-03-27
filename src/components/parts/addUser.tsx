import { useState, useEffect } from "react";
import CustomInput from "../Input";
import { Button } from "antd";
import close from "../../assets/svgs/close.svg";
import { addUserType } from "../../types/user";
import { addUsers, editUsers } from "../../services/users";

type addUserProps = {
  onClose: () => void | null;
  editData?: { firstName: string; lastName: string; email: string; id: number };
  setEditData?: (arg: addUserType) => void;
};

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  id: 0,
};

const AddUser: React.FC<addUserProps> = ({
  onClose,
  editData,
  setEditData,
}) => {
  const [addUser, setAddUser] = useState<addUserType>(initialState);
  const submit = () => {
    if (editData) {
      editUsers(editData.id, addUser).then((res) => {
        setAddUser(initialState);
        onClose();
        console.log(res);
      });
    } else {
      addUsers(addUser).then((res) => {
        setAddUser(initialState);
        onClose();
        console.log(res);
      });
    }
  };

  useEffect(() => {
    setAddUser(initialState);

    if (editData) {
      setAddUser({
        firstName: editData?.firstName,
        lastName: editData?.lastName,
        email: editData?.email,
        id: 0,
      });
    }
  }, [editData]);
  return (
    <div
      className=" absolute z-20  top-14  w-[800px] h-[600px] bg-white shadow-2xl"
      style={{ left: "calc(100%/2 - 800px/2)" }}
    >
      <div className="flex w-full items-center border-b border-solid border-blue-200  p-[20px] pb-[16px]">
        <h3 className="text-[#334870] text-center font-bold text-sm flex-1 ">
          მომხმარებლის დამატება
        </h3>
        <div
          className="flex justify-end"
          onClick={() => {
            setAddUser(initialState);
            !!setEditData && setEditData(initialState);
            onClose();
          }}
        >
          <img className=" self-end" src={close} alt="close button" />
        </div>
      </div>

      <div className="  p-6 ">
        <div className="grid grid-cols-2 gap-6 mb-6  ">
          <CustomInput
            placeholder="ჩაწერეთ სახელი"
            label="სახელი (ქართ)"
            required
            value={addUser.firstName}
            onChange={(e) =>
              setAddUser((state) => ({ ...state, firstName: e.target.value }))
            }
          />
          <CustomInput
            placeholder="ჩაწერეთ გვარი"
            label="გვარი (ENG)"
            required
            value={addUser.lastName}
            onChange={(e) =>
              setAddUser((state) => ({ ...state, lastName: e.target.value }))
            }
          />
          <CustomInput placeholder="ჩაწერეთ სახელი" label="სახელი (ENG)" />
          <CustomInput placeholder="ჩაწერეთ სახელი" label="სახელი (ENG)" />
          <CustomInput placeholder="ჩაწერეთ სახელი" label="სახელი (ENG)" />
          <CustomInput placeholder="ჩაწერეთ სახელი" label="სახელი (ENG)" />
        </div>

        <CustomInput
          placeholder="ელ.ფოსტა"
          label="ელ.ფოსტა"
          required
          onChange={(e) =>
            setAddUser((state) => ({ ...state, email: e.target.value }))
          }
          value={addUser.email}
        />
      </div>
      <div className="border-t border-solid border-blue-200 flex p-4  justify-end	">
        <Button
          type="primary"
          className="h-[48px] w-[110px] bg-[#1F5EDD]"
          onClick={() => submit()}
        >
          შენახვა
        </Button>
      </div>
    </div>
  );
};

export default AddUser;
