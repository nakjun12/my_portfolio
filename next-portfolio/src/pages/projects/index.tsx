import React from "react";
import { GetStaticPropsContext } from "next";
import { TOKEN, DATABASE_ID } from "@/lib/ConfigHelper";
import Head from "next/head";
import ProjectItem from "@/components/projects/Project-item";

export interface Notion_properties {
  Description: any;
  youtube: any;
  WorkPeriod: any;
  Github: any;
  Tags: any;
  name: any;
}
export interface Notion_results {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: any;
  lsat_edited_by: any;
  cover: any;
  icon: null;
  parent: any;
  archived: boolean;
  properties: Notion_properties;
  url: string;
}

export default function index({ projects }: { projects: any }) {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-6  mb-10
    "
    >
      <Head>
        <title>준황 프로젝트</title>
        <meta name="description" content="포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="font-bold text-4xl sm:text-5xl">
        총 프로젝트 :
        <span className="pl-4 text-blue-500">{projects.results.length}</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 m-6 w-full">
        {projects.results.map((aProject: Notion_results) => {
          return <ProjectItem key={aProject.id} data={aProject} />;
        })}
      </div>
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "name",
          direction: "ascending",
        },
      ],
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
