import { WorkoutsContext } from "../context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error("uWC must be used inside an WCP");
  }

  return context;
};
