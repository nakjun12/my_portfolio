import type { Notion_results } from "@/pages/projects";

export default function ProjectItem({ data }: { data: Notion_results }) {
  const title = data.properties.name.title[0].plain_text;
  const github = data.properties.Github.url;
  const youtube = data.properties.youtube.url;
  const description = data.properties.Description.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  const start = data.properties.WorkPeriod.date.start;
  const end = data.properties.WorkPeriod.date.end;
  return (
    <div className="p-6 m-3 bg-slate-400 rounded-md">
      <h1>{data.properties.name.title[0].plain_text}</h1>
    </div>
  );
}
