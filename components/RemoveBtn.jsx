"use client";

import { useRouter } from "next/navigation";
import { MdDelete } from "react-icons/md";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTitle = async () => {
    const confirmed = confirm("are you sure ?")
    if (confirmed) {
      const res = await fetch(`/api/todos?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button onClick={removeTitle}>
      <MdDelete size={25} className="text-red-600" />
    </button>
  );
}
