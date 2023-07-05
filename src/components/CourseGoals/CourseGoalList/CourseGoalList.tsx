import { CourseGoalItem } from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

type CourseGoalListProps = {
  items: { id: string; text: string }[];
  onDeleteItem: (id: string) => void;
};

export const CourseGoalList = ({
  items,
  onDeleteItem,
}: CourseGoalListProps) => {
  return (
    <ul className="goal-list">
      {items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};
