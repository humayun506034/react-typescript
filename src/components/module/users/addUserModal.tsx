import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addUser, DraftUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const AddUserModal = () => {
  const form = useForm();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // console.log(data);
    dispatch(addUser(data as DraftUser))
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add User</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="w-full text-center">Add User</DialogTitle>
            <DialogDescription className="sr-only"></DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input {...field} value={field.value || ""} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full ">
                Submit
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddUserModal;
