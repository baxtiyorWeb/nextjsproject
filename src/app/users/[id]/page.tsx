import Getusers from "@/app/libs/getusers";
import Link from "next/link";

interface IParams {
  params: {
    id: number;
  };
}

export default async function userPage({ params }: IParams) {
  const userData = await Getusers(params.id);

  return (
    <div className="w-[90%] h-[50vh]">
      <div className="shadow shadow-slate-300 p-5">
        <h1 className="text-center text-[30px] text-[#161060]">
          {userData.name}
        </h1>
        <div className="w-[600px] h-[500px] border border-[#000111] m-5 relative">
          <table className="border-collapse">
            <thead>
              <tr className="text-[20px] font-light text-[#161060] underline underline-offset-2">
                <th>name</th>
                <th>username</th>
                <th>email</th>
                <th>city</th>
                <th>street</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-[#161060] text-center pt-[30px] border">
                <td>{userData.name}</td>
                <td>{userData.username}</td>
                <td>{userData.email}</td>
                <td>{userData.address.street}</td>
                <td>{userData.address.city}</td>
              </tr>
            </tbody>
          </table>

          <Link
            href={"/"}
            className="text-[30px] text-[#555] absolute right-[50%] top-[50%]"
          >
            Home{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
