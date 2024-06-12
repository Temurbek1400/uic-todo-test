"use client";
import { editProjectTitle } from "@/app/actions/actions";
import { projectType } from "@/types/schema";
import { useState } from "react";
import { BiEdit } from "react-icons/bi";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";

const ProjectTitle = ({ project }: { project: projectType }) => {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleSubmit = () => {
    setEditing(false);
  };
  return (
    <div className="flex gap-2 items-center mb-3 ">
      {!editing && (
        <span className="text-3xl font-extrabold uppercase text-center">
          {project.title}
        </span>
      )}
      <Form action={editProjectTitle} onSubmit={handleSubmit}>
        {editing ? (
          <div className="flex justify-center">
            <Input
              required
              type="text"
              name="title"
              placeholder="Edit title..."
              defaultValue={project.title || ""}
            />

            <Button type="submit" text="Save" />
          </div>
        ) : null}
        {!editing && (
          <Button
            onClick={handleEdit}
            type={editing ? "button" : "submit"}
            text={<BiEdit />}
            actionButton
          />
        )}
      </Form>
    </div>
  );
};

export default ProjectTitle;
