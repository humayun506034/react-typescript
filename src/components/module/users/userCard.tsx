import { Button } from "@/components/ui/button";
import { deleteUser } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import { IUser } from "@/types";

interface userType {
  user: IUser;
}

const UserCard = ({ user }: userType) => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800 ">{user.name}</h2>
        <Button
          onClick={() => dispatch(deleteUser(user.id))}
          className="bg-white shadow-none hover:bg-white"
        >
          🗑️
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
