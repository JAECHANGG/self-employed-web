import Image from "next/image";
import food from "/public/asset/promotion/food.png";

interface Props {
  sx?: { height: string; width: string };
}

export const FoodIcon: React.FC<Props> = ({ sx }) => {
  return (
    <Image
      src={food}
      alt="food icon"
      style={sx || { height: "70px", width: "70px" }}
    />
  );
};
