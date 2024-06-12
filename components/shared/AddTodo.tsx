import { create } from "@/app/actions/actions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";

const AddTodo = () => {
  return (
    <Form action={create} className="w-1/2 m-auto">
      <div className="flex">
        <Input required name="input" type="text" placeholder="Add Todo..." className="w-full" />
        <Button type="submit" text="Add" />
      </div>
    </Form>
  );
};

export default AddTodo;
