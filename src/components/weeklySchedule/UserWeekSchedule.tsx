import { useState } from "react";
import List from "./List";
import ProgressBar from "./ProgressBar";

interface UserWeeklyData {
  id: number;
  weekNumber: number;
  content: string;
}

interface PropsUserWeeklyData {
  data: Array<UserWeeklyData>;
}

function UserWeekSchedule({ data }: PropsUserWeeklyData): JSX.Element {
  const [step, setStep] = useState(1);
  return (
    <>
      <ProgressBar totalStep={12} nowStep={step} />
      <List data={data} />
    </>
  );
}

export default UserWeekSchedule;
