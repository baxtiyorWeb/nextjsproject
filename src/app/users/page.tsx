import Image from "next/image";
import Link from "next/link";
import React from "react";

const Users = async () => {
  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }

  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await users.json();

  return (
    <table className="border-collapse shadow-md  w-[95%] m-auto">
      <thead>
        <tr className="odd:bg-blue-500 text-white text-[18px] h-[40px]">
          <th>#</th>
          <th>name</th>
          <th>username</th>
          <th>email</th>
          <th>address</th>
          <th>street</th>
          <th>suite</th>
          <th>city</th>
          <th>phone</th>
          <th>website</th>
          <th>name</th>
          <th>catchPhrase</th>
          <th>bs</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className="even:bg-blue-400 bg-[#8fc2ff] text-[#fff] text-center"
          >
            <td>{item.id}</td>
            <td>
              <Link href={`/users/${item.id}`}>{item.name}</Link>
            </td>
            <td>
              <Link href={`/users/${item.id}`}>{item.username}</Link>
            </td>
            <td>{item.email}</td>
            <td>{item.address.street}</td>
            <td>{item.address.suite}</td>
            <td>{item.address.city}</td>
            <td>{item.address.zipcode}</td>
            <td>{item.phone}</td>
            <td>{item.website}</td>
            <td>{item.company.name}</td>
            <td>{item.company.catchPhrase}</td>
            <td>{item.company.bs}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;
