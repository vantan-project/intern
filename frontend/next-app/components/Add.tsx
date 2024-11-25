import { Tasks } from "@/app/top/page";
import Image from "next/image";
import { useState } from "react";

interface Props {
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  setTasks: React.Dispatch<React.SetStateAction<Tasks>>;
}

function Add(props: Props) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  if (!props.show)
    return (
      <div className="fixed top-12 right-12 bg-white p-2 rounded-lg border">
        <button
          className="flex items-center"
          onClick={() => props.setShow(true)}
        >
          <Image width={24} height={24} src="/add.svg" alt="add" />
          タスクの追加
        </button>
      </div>
    );

  return (
    <div className="p-6 bg-sky-300 h-fit">
      <div className="flex justify-end">
        <Image
          width={24}
          height={24}
          src="/close.svg"
          alt="close"
          onClick={() => props.setShow(false)}
        />
      </div>
      <label className="p-1">タスク名</label>
      <input
        className="border p-1 w-full"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <label className="p-1">内容</label>
      <textarea
        className="w-full p-1 h-72"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="border bg-white p-1"
          onClick={() => {
            props.setTasks((task) => [...task, { name, content }]);
            setName("");
            setContent("");
          }}
        >
          追加
        </button>
      </div>
    </div>
  );
}

export default Add;
