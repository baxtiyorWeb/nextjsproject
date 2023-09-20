import Link from "next/link";

export default function Home() {
  return (
    <div className=" p-0 m-0 box-border flex justify-center items-center flex-col w-full h-[100vh] max-h-screen bg-slate-900 text-[38px] text-[#fff]">
      <h1>Next Js Project</h1>
      <div>
        <Link href={"/users"}>Users </Link>
      </div>
    </div>
  );
}
