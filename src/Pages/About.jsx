import React from "react";
import { Link,Outlet} from "react-router-dom";

export default function About() {
  return (
    <>
      <div className="bg-yellow-100 h-screen w-full flex gap-4 flex-col justify-center items-center">
        <h1 className="text-5xl">This is my About</h1>
        <button className="p-3 bg-blue-500 rounded-lg text-white">
          <Link to="Ourteam">OurTeam</Link>
        </button>
      </div>
      <Outlet/>
    </>
  );
}
