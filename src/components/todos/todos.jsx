import { useContext } from "react";
import { userContext } from "../../App";

function Todos() {
  let user = useContext(userContext);
  return (
    <>
      {user.map((user, index) => {
        return (
          <>
            <p
              className="flex w-[150px] bg-black m-[10px] p-[20px] rounded-xl justify-center text-center cursor-pointer hover:bg-slate-700 transition"
              key={index}
            >
              id ={user.id}
              <br />
              {user.name}
              <br />
              age = {user.age}
            </p>
          </>
        );
      })}
    </>
  );
}

export default Todos;
