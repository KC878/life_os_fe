import TaskDueCard from "@/components/cards/TaskDueCard";
import TaskPreviewCard from "@/components/cards/TaskPreviewCard";
import IconTextBlock from "@/components/text/IconTextBlock";
import TextIcon from "@/components/text/TextIcon";
import { icons } from "@/constants/icons";

export default function Home() {
  return (
    <div className="p-4 space-y-4">
      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 auto-rows-fr">
        {/* Left box */}
        <div className="bg-primary-foreground rounded-sm p-4 min-h-[300px]">
          <TextIcon icon={icons.gallery} text="Preview" />
          <IconTextBlock
            icon={icons.fire}
            descOne="Focus Goal"
            descTwo="Deep Work Finish homepage UI"
          />
          <TaskDueCard />

          <div
            className="
              mt-4 overflow-auto h-[30vh]  
              [scrollbar-width:thin]
              [&::-webkit-scrollbar]:w-1
            [&::-webkit-scrollbar-thumb]:bg-gray-400
              [&::-webkit-scrollbar-thumb]:rounded
             "
          >
            <div>Preview</div>
            {[1, 2, 3, 4, 5, 6, 7].map((item: number) => (
              <TaskPreviewCard key={item} icon={icons.camera} />
            ))}
          </div>
        </div>

        {/* Right side grid */}
        <div className="rounded-sm lg:col-span-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 auto-rows-fr">
            <div className="bg-primary-foreground rounded-sm p-2 min-h-[450px]">
              Today
            </div>
            <div className="bg-primary-foreground rounded-sm p-2 min-h-[450px]">
              Habits
            </div>
            <div className="bg-primary-foreground rounded-sm p-2 min-h-[450px]">
              Tasks & Projects
            </div>
            <div className="bg-primary-foreground rounded-sm p-2 min-h-[450px]">
              Metrics
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-fr">
        <div className="bg-primary-foreground rounded-sm p-2 min-h-[300px]">
          Goals
        </div>
        <div className="bg-primary-foreground rounded-sm p-2 min-h-[250px]">
          Goals Dashboard
        </div>
        <div className="bg-primary-foreground rounded-sm p-2 min-h-[250px]">
          Life Metrics
        </div>
      </div>
    </div>
  );
}
