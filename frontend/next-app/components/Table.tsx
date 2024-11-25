import { Tasks } from "@/app/top/page";
import { useRouter } from "next/navigation";

interface Props {
  tasks: Tasks;
  setTasks: React.Dispatch<React.SetStateAction<Tasks>>;
}

function Table(props: Props) {
  const router = useRouter();
  return (
    <table className="w-full border">
      <thead className="bg-sky-100">
        <tr>
          <td className="p-1 w-1/5">タスク名</td>
          <td className="p-1">内容</td>
          <td className="p-1 w-32"></td>
        </tr>
      </thead>
      <tbody>
        {props.tasks.map((task, index) => (
          <tr key={index}>
            <td className="p-1 border">{task.name}</td>
            <td className="p-1 border">{task.content}</td>
            <td className="p-1 border flex gap-2">
              <button
                className="p-2 bg-sky-300 rounded-lg"
                onClick={() => router.push(`/edit/${index}`)}
              >
                編集
              </button>
              <button
                className="p-2 bg-sky-300 rounded-lg"
                onClick={() =>
                  props.setTasks((tasks) => tasks.filter((_, i) => i != index))
                }
              >
                削除
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
