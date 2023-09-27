import Image from "next/image";
import fire from "/public/asset/fire-icon.png";

interface Props {
  sx?: any;
}

export const FireIcon: React.FC<Props> = ({ sx }) => {
  return <Image src={fire} alt="fire icon" style={sx} />;
};
