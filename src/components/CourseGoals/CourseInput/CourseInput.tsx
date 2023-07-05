import { useState } from "react";
import { FormControl } from "./FormControl";
import { Button } from "../../UI/Button";

type CourseInputProps = {
  onAddGoal: (enteredValue: string) => void;
};

export const CourseInput = ({ onAddGoal }: CourseInputProps) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event: any) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: any) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    onAddGoal(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl $invalid={!isValid}>
        <label htmlFor="goal text">Course Goal</label>
        <input
          id="goal text"
          type="text"
          onChange={goalInputChangeHandler}
          value={enteredValue}
        />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};
