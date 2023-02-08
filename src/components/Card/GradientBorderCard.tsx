import type { GradientBorderCardProps } from "./types";
import type { Tag } from "@/lib/types";

const GradientBorderCard = ({
  dateTime,
  href,
  title,
  tags,
}: GradientBorderCardProps) => {
  const date = "2023-02-06T09:17:04.241Z";
  return (
    <article className="animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-[length:400%_400%] p-0.5 shadow-xl transition [animation-duration:_6s] hover:shadow-sm">
      <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
        <time dateTime={dateTime} className="block text-xs text-gray-500">
          {date}
        </time>

        <a href={href}>
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">{title}</h3>
        </a>

        <div className="mt-4 flex flex-wrap gap-1">
          {tags.map((tag: Tag) => (
            <span
              key={tag}
              className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default GradientBorderCard;
