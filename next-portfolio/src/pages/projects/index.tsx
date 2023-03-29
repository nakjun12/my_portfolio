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
    <>
      <Head>
        <title>준황 프로젝트</title>
        <meta name="description" content="포트폴리오" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>총 프로젝트 : {projects.results.length}</h1>
      {projects.results.map((aProject: Notion_results) => {
        console.log(aProject);
        return <ProjectItem key={aProject.id} data={aProject} />;
      })}
    </>
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
