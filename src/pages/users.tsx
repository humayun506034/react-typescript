import AddUserModal from "@/components/module/users/addUserModal";
import UserCard from "@/components/module/users/userCard";
import { selectUser } from "@/redux/features/user/userSlice";
import { useAppSelector } from "@/redux/hook";

const Users = () => {
  const users = useAppSelector(selectUser);
  return (
    <div>
      <div className="flex items-center justify-end mr-20">
        <AddUserModal></AddUserModal>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mx-5">
        {
          users.map(user=><UserCard user={user} key={user.id}></UserCard>)
        }
      </div>
    </div>
  );
};

export default Users;
