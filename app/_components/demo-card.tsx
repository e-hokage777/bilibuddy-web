import { cn } from "@/lib/utils";

export default function DemoCard({
  image,
  description,
  index,
}: {
  image: string;
  description: string;
  index: number;
}) {
  return (
    <div
      className={cn(
        "flex flex-1 flex-col items-center gap-4 md:max-w-[150px] lg:max-w-[270px]",
        index % 2 == 0 && "md:flex-col-reverse"
      )}
    >
      <p className="md:sm lg:text-lg">{description}</p>
      <img
        //   className="static"
        src={image}
        alt={description}
      />
    </div>
  );
}
