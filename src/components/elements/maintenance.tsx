import AnimatedShinyText from "../ui/animated-shiny-text";
import { cn } from "@/lib/utils";

const Maintenance = () => {
  return (
    <div className="z-10 flex py-4 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-gray-800/25 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-gray-100 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 text-sm transition ease-out hover:text-gray-700 hover:duration-300 hover:dark:text-neutral-400">
          <span>👷‍♂️⚒️✨ Our Website is Currently Under Maintenance ✨⚒️👷‍♂️</span>
        </AnimatedShinyText>
      </div>
    </div>
  );
};

export default Maintenance;
