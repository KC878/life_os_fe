import TextIcon from "@/components/TextIcon";
import { icons } from "@/constants/icons";


export default function Home() {
  return (
    <div className="p-4 space-y-4">

      {/* TOP GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 auto-rows-fr">

        {/* Left box */}
        <div className="bg-primary-foreground rounded-sm p-2 min-h-[300px]">
          <TextIcon icon={icons.gallery} text="Preview" />
        </div>

        {/* Right side grid */}
        <div className="rounded-sm lg:col-span-3">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 auto-rows-fr">
            <div className="bg-primary-foreground rounded-sm p-2 min-h-[250px]">Today</div>
            <div className="bg-primary-foreground rounded-sm p-2 min-h-[250px]">Habits</div>
            <div className="bg-primary-foreground rounded-sm p-2 min-h-[250px]">Tasks & Projects</div>
            <div className="bg-primary-foreground rounded-sm p-2 min-h-[250px]">Metrics</div>
          </div>
        </div>

      </div>

      {/* BOTTOM GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-fr">
        <div className="bg-primary-foreground rounded-sm p-2 min-h-[300px]">Goals</div>
        <div className="bg-primary-foreground rounded-sm p-2 min-h-[250px]">Goals Dashboard</div>
        <div className="bg-primary-foreground rounded-sm p-2 min-h-[250px]">Life Metrics</div>
      </div>

    </div>
  );
}
