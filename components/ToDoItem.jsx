
import RemoveBtn from "./RemoveBtn";

const getTitle = async () => {
  const apiUrl = process.env.NEXTAPI_URL
  try {
    const res = await fetch(`${apiUrl}/api/todos`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch Todo items");
    }
    return res.json();
  } catch (error) {
    console.log("Error", error);
  }
};
export default async function ToDoItem() {
  const { titles } = await getTitle();
  return (
    <div>
      {titles.map((t,index)=>(
          
        <div key={index} className="mt-5 p-5 border border-gray-500 flex justify-between items-center rounded-lg">
          <div>{t.title}</div>
          <div>
            <RemoveBtn id={t._id} />
          </div>
        </div>
      ))}
</div>
  );
}
