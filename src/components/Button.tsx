import { Button } from "antd";

type buttonProps = {
  text?: string;
  onClick?: () => void | null;
};

const CustomButton: React.FC<buttonProps> = ({ text, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="bg-[#EEF4FF] text-[#2970FF] font-semibold	rounded-lg border-0	"
    >
      {text}
    </Button>
  );
};

export default CustomButton;
