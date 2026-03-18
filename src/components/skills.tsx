import { DraggableItem } from "./draggableItem";

export const Skills = ({ constraintRef }: { constraintRef: any }) => {
  return (
    <DraggableItem constraintRef={constraintRef} initial={{ x: 0, y: 0 }}>
      <div className="gap-6 w-80 playful-card"></div>
    </DraggableItem>
  );
};
