"use client";

import { useState } from "react";
import { MdAdd } from "react-icons/md";
import { useRouter } from "next/navigation";
export default function Additem() {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title)  {
      alert("title is required");
    }
    try {
      const res = await fetch("/api/todos", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      if (res.ok) {
        router.refresh();
        setTitle("");

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border border-gray-400 p-4 mt-5 rounded-lg">
      <form onSubmit={handleSubmit} className="flex justify-between">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="write something"
          className=" bg-gray-300 border-none rounded lg px-2 py-2  w-1/2 text-xl"
        />
        <button
          type="submit"
          className="bg-blue-800 rounded-lg px-2 py-2 font-bold text-white flex items-center"
        >
          <MdAdd size={24} />
          Add item
        </button>
      </form>
    </div>
  );
}
