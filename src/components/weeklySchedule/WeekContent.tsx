import { useState } from "react";
import List from "./List";
import ProgressBar from "./ProgressBar";

interface UserWeeklyData {
  id: number;
  weekNumber: number;
  content: string;
  done: boolean;
}

interface PropsUserWeeklyData {
  data: Array<UserWeeklyData>;
  onDone: (id: number) => void;
  onRemove: (id: number) => void;
}

function WeekContent({
  data,
  onDone,
  onRemove,
}: PropsUserWeeklyData): JSX.Element {
  const [step, setStep] = useState(1);
  return (
    <>
      <ProgressBar totalStep={data.length} nowStep={step} />
      <List data={data} onDone={onDone} onRemove={onRemove} />
    </>
  );
}

export default WeekContent;
