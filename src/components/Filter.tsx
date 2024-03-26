import { Input } from "antd";
import search from "../assets/svgs/search.svg";
import filter from "../assets/svgs/filter.svg";

type filterProprs = {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Filter: React.FC<filterProprs> = ({ placeholder, onChange }) => {
  return (
    <Input
      className=" hover:border-[#84DAFF]  focus-within:shadow-[0_0_0_3px_#84daff]"
      placeholder={placeholder}
      allowClear
      prefix={<img src={search} alt="search" />}
      suffix={<img src={filter} alt="filter" />}
      onChange={onChange}
    />
  );
};

export default Filter;
