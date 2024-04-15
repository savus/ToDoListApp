import { ComponentProps } from "react";

export type TTask = {
  id: number;
  content: string;
  isCompleted: boolean;
};

export type InputProps = ComponentProps<"input">;
