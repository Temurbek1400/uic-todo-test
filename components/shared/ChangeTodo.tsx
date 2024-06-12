import { todoStatus } from "@/app/actions/actions";
import Form from "../ui/Form";
import Button from "../ui/Button";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { todoType } from "@/types/schema";
import dayjs from "dayjs";

const ChangeTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={todoStatus}>
      <input
        name="inputId"
        value={todo.id}
        className="border-gray-700 border"
        type="hidden"
      />

      <Button actionButton type="submit" text={<AiOutlineCheckCircle />} />
      <span className="pl-2">{dayjs(todo.createdAt).format("DD-MMM, HH-mm")}</span>
    </Form>
  );
};

export default ChangeTodo;
