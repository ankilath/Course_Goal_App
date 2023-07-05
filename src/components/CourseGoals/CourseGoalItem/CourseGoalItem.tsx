import React from "react";
import "./CourseGoalItem.css";

type CourseGoalItemProps = {
  id: string;
  onDelete: (id: string) => void;
  children: React.ReactNode;
};

export const CourseGoalItem = ({
  id,
  onDelete,
  children,
}: CourseGoalItemProps) => {
  const deleteHandler = () => {
    onDelete(id);
  };

  return (
    <li className="goal-item">
      {children}
      <button onClick={deleteHandler}>Delete</button>
    </li>
  );
};
