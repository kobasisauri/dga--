import Input from "antd/es/input/Input";

type inputProprs = {
  placeholder?: string;
  label?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const CustomInput: React.FC<inputProprs> = ({
  placeholder,
  label,
  required,
  onChange,
  value,
}) => {
  return (
    <div className="w-full">
      {!!label && (
        <p className="text-sm mb-[6px] flex">
          {label}

          {!!required && <p className=" text-[#A80000]">*</p>}
        </p>
      )}
      <Input
        onChange={onChange}
        required={true}
        value={value}
        className="hover:border-[#84DAFF]  focus-within:shadow-[0_0_0_3px_#84daff] h-[54px]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default CustomInput;
