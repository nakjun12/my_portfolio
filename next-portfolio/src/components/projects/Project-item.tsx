import type { Notion_results } from "@/pages/projects";
import Image from "next/legacy/image";
export default function ProjectItem({ data }: { data: Notion_results }) {
  const title = data.properties.name.title[0].plain_text;
  const github = data.properties.Github.url;
  const youtube = data.properties.youtube.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end || start;

  const calculatedPeriod = (start: string, end: string): number => {
    const startDateStringArray: string[] = start.split("-");
    const endDateStringArray: string[] = end.split("-");
    console.log(
      startDateStringArray,
      Number(startDateStringArray[1]) - 1,
      Number(startDateStringArray[1])
    );
    const startDate: Date = new Date(
      Number(startDateStringArray[0]),
      Number(startDateStringArray[1]) - 1,
      Number(startDateStringArray[2])
    );

    const endDate: Date = new Date(
      Number(endDateStringArray[0]),
      Number(endDateStringArray[1]) - 1,
      Number(endDateStringArray[2])
    );

    const diffInMs: number = Math.abs(endDate.getTime() - startDate.getTime());
    const result: number = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className="project-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        layout="responsive"
        objectFit="cover"
        quality={100}
        width="100"
        height="60"
      />
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <a href={github}>{github}</a>
        <a href={youtube}>{youtube}</a>
        <p className="my-1 ">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>
        <div className="flex items-start mt-2">
          {tags.map((aTag: any) => (
            <h1
              className="px-2 py-1s mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30"
              key={aTag.id}
            >
              {aTag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
