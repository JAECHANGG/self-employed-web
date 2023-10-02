import Image from "next/image";
import fire from "/public/asset/fire-icon.png";

interface Props {
  style?: {};
}

export const FireIcon: React.FC<Props> = ({ style }) => {
  return <Image src={fire} alt="fire icon" style={style} />;
};
