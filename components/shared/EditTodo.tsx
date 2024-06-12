"use client";

import { edit } from "@/app/actions/actions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";
import Button from "../ui/Button";
import { todoType } from "@/types/schema";
import { useFormStatus } from "react-dom";

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div className="flex gap-5 items-center">
      <Button onClick={handleEdit} text={<BiEdit />} actionButton />

      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit} id={todo.id}>
          <Input name="inputId" value={todo.id} type="hidden" />
          <div className="flex justify-center">
            <Input
              required
              type="text"
              name="newTitle"
              placeholder="Edit Todo..."
              defaultValue={todo.title || ""}
            />

            <Button type="submit" text="Save" form={todo.id} />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
