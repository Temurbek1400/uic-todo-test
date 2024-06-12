import { PrismaClient } from "@prisma/client";

import AddTodo from "@/components/shared/AddTodo";

import PushRoute from "@/components/shared/PushRoute";
import Todo from "@/components/shared/Todo";
import { projectType } from "@/types/schema";
import ProjectTitle from "@/components/shared/ProjectTitle";
import { PageProps } from "@/.next/types/app/page";

const prisma = new PrismaClient();
async function getData(props: PageProps) {
  const projectId = props.searchParams.project;

  // @ts-ignore
  const project: projectType = projectId
    ? await prisma.project.findUnique({
        where: {
          id: projectId,
        },
        include: {
          todos: true, // Include todos if you want to fetch associated todos as well
        },
      })
    : await prisma.project?.create({
        data: {
          title: "New todo",
          todos: {
            create: [],
          },
        },
      });

  return { project: project! };
}
const Home = async (props: PageProps) => {
  const { project } = await getData(props);

  return (
    <>
      <div className="w-screen py-20 flex justify-center flex-col items-center">
        <ProjectTitle project={project} />

        <div className="flex justify-center flex-col items-center w-[1000px] ">
          <AddTodo />
          <div className=" flex flex-col gap-5 items-center justify-center mt-10 w-full">
            {project?.todos?.map?.((todo, id) => (
              <div className="w-full" key={id}>
                <Todo todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <PushRoute project={project} />
    </>
  );
};

export default Home;
