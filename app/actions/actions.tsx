"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";

// Create a new Todo and associate it with a Project
export async function create(formData: FormData, projectId?: string) {
  const title = formData.get("input") as string;

  if (!title.trim() || !projectId) {
    return;
  }

  await prisma.todo.create({
    data: {
      title: title,
      projectId: projectId,
    },
  });

  revalidatePath(`/projects/${projectId}`);
}

// Edit a Todo within a Project
export async function edit(formData: FormData, projectId?: string) {
  const title = formData.get("newTitle") as string;
  const todoId = formData.get("inputId") as string;

  if (!title.trim() || !todoId || !projectId) {
    return;
  }

  await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      title: title,
    },
  });

  revalidatePath(`/projects/${projectId}`);
}

// Delete a Todo from a Project
export async function deleteTodo(formData: FormData, projectId?: string) {
  const todoId = formData.get("todoId") as string;
  console.log(todoId);
  
  if (!todoId || !projectId) {
    return;
  }

  await prisma.todo.delete({
    where: {
      id: todoId,
    },
  });

  revalidatePath(`/projects/${projectId}`);
}

// Toggle the completion status of a Todo within a Project
export async function toggleStatus(formData: FormData, projectId?: string) {
  const todoId = formData.get("todoId") as string;

  if (!todoId || !projectId) {
    return;
  }

  const todo = await prisma.todo.findUnique({
    where: {
      id: todoId,
    },
  });

  if (!todo) {
    return;
  }

  const updatedStatus = !todo.isCompleted;

  await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      isCompleted: updatedStatus,
    },
  });

  revalidatePath(`/projects/${projectId}`);
}

export async function todoStatus(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const todo = await prisma.todo.findUnique({
    where: {
      id: inputId,
    },
  });

  if (!todo) {
    return;
  }

  const updatedStatus = !todo.isCompleted;

  await prisma.todo.update({
    where: {
      id: inputId,
    },
    data: {
      isCompleted: updatedStatus,
    },
  });

  revalidatePath("/");

  return updatedStatus;
}
export async function editProjectTitle(formData: FormData, projectId?: string) {
  const newTitle = formData.get("title") as string;

  if (!newTitle.trim() || !projectId) {
    return;
  }

  try {
    await prisma.project.update({
      where: {
        id: projectId,
      },
      data: {
        title: newTitle,
      },
    });

    revalidatePath(`/projects/${projectId}`); // Adjust path as necessary
  } catch (error) {
    console.error('Error editing project title:', error);
  }
}
