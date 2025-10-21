import { cn } from "@/lib/utils";

export default function MultiFormProgressIndicator({
  sections,
  activeIndex = 0,
}: {
  sections: string[];
  activeIndex?: number;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      {sections.map((section, index) => {
        return (
          <div
          key={index}
            className={cn(
              "flex items-center gap-1",
              index != activeIndex ? "text-muted-foreground" : "text-primary font-semibold"
            )}
          >
            <div
              className={cn(
                "rounded-full w-8 h-8 font-semibold flex justify-center items-center text-lg",
                activeIndex != index ? "bg-muted text-muted-foreground" : "bg-primary text-primary-foreground"
              )}
            >
              {index + 1}
            </div>
            <span className="text-lg">{section}</span>
            {index !=  sections.length - 1 && <div className="w-6 h-0.5 bg-muted-foreground"></div>}
          </div>
        );
      })}
    </div>
  );
}
