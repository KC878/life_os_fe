import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from '../ui/checkbox';
import { Slider } from "@/components/ui/slider"
import TextIcon from '../text/TextIcon';
import { icons } from '@/constants/icons';



interface TaskDueCardsProps {
  tasksCheckBox?: string[];
  upcomingEvents?: string[];
  baseScore?: number;
  currentScore?: number;
  className?: string;
}
const TaskDueCard: React.FC<TaskDueCardsProps> = ({
  tasksCheckBox = ['test1', 'test2'], // sample default if not sample is given 
  upcomingEvents = ['EventSample1', 'EventSample2'],
  baseScore = 100,
  currentScore = 33,
  className,
}) => {
  return (
    <Card className='mt-4 rounded-sm'>
      <CardHeader className='flex flex-row justify-between items-center'>
        <CardDescription>Task Due</CardDescription>
        <CardTitle className='bg-emerald-700 rounded-md p-1 text-sm'>Solve</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col gap-2'>

        {/* CHECKBOX LIST */}
        {tasksCheckBox.map((item: string) => (
          <div key={item} className='flex flex-col'>
            <div className="items-top flex space-x-2">
              <Checkbox id="terms1" />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {item}
                </label>
              </div>
            </div>
          </div>
        ))}

        {/* SCORE SLIDER */}
        <Slider className="mt-2" defaultValue={[currentScore]} max={baseScore} step={1} />
      </CardContent>


      {/* another line */}
      <CardHeader className='flex flex-row justify-between items-center'>
        <CardDescription>Upcoming Events</CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col'>
        {upcomingEvents.map((event: string) => (
          <TextIcon
            icon={icons.todo}
            text={event}
          />
        ))}
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card >

  )
}

export default TaskDueCard;