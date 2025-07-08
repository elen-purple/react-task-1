import { ColorItem } from "./ColorItem";
export const ColorList = ({ colors }) => {
  return (
    <ul>
      {colors.map((color) => (
        <ColorItem text={color} />
      ))}
    </ul>
  );
};
