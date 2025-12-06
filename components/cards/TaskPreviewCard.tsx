import { LucideIcon } from "lucide-react";
import React, { ElementType } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface TaskPreviewCardProps {
  icon: LucideIcon | ElementType;
  headerText?: string;
  description?: string;
  action?: string;
  taskStatus?: string;
  key: number | string;
}
const TaskPreviewCard: React.FC<TaskPreviewCardProps> = ({
  key,
  icon,
  headerText = "SampleHeader",
  description = "Sample Description",
  action = "Action",
  taskStatus = "#2a2a2a",
}) => {
  const IconComponent = icon;
  const colorStatus = `bg-[${taskStatus}]`;
  return (
    <Card key={key} className="mt-2 rounded-sm p-2">
      <CardContent className="flex gap-2 items-center justify-between bg-gray-300 rounded-sm p-4">
        <div className="flex flex-row gap-2 items-center">
          <IconComponent />
          <div className="flex flex-col">
            <CardTitle>{headerText}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="rounded-full h-2 w-2 bg-amber-300"></div>
          <div className="text-sm text-gray-500">{action}</div>
          <div className={`rounded-full h-2 w-2 ${colorStatus}`}></div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TaskPreviewCard;
