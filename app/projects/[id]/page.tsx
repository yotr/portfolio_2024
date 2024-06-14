"use client";
import { projectsData } from "@/lib/data";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Loader from "@/components/loader";

interface paramsProps {
  params: {
    id: number;
  };
}

interface projectType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl: any;
  images: any[];
}

function Project({ params: { id } }: paramsProps) {
  const [project, setProject] = useState<projectType | null>(null);
  const [loading, setLoading] = useState<Boolean>(true);

  const getProjectById = async () => {
    setLoading(true);
    // get project data
    const response: any = await projectsData[id];

    if (response) {
      // set response if exist
      setProject(response);
      setLoading(false);
    } else {
      // call not found if no project exist
      // setLoading(true);
      notFound();
    }
  };

  useEffect(() => {
    getProjectById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (project === null && loading) return notFound();

  return (
    <div className="flex flex-col items-center justify-center">
      {/* title */}
      <h1 className="mb-10 mt-4 px-4 text-2xl font-medium sm:text-4xl">
        {project?.title}
      </h1>
      {/* tags */}
      <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
        {project?.tags.map((tag, index) => (
          <li
            className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
            key={index}
          >
            {tag}
          </li>
        ))}
      </ul>
      {/* images grid */}
      {!loading ? (
        <div className="my-5 mx-auto columns-1 gap-x-10 px-10 md:columns-2 lg:columns-3">
          {/* image box */}
          {project?.images.length != 0 ? (
            project?.images.map((img, index) => (
              <div className="w-full mb-3" key={index}>
                <Image
                  src={img}
                  quality={95}
                  alt="project-image"
                  width={1920}
                  height={1080}
                  className="max-w-full rounded-2xl"
                />
              </div>
            ))
          ) : (
            // no images founded
            <div className="flex justify-center items-center h-full">
              <h1 className="my-20 px-4 text-xl font-medium sm:text-xl">
                No Images Provided 😃
              </h1>
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          {/* <Loader /> */}
        </div>
      )}
    </div>
  );
}

export default Project;
