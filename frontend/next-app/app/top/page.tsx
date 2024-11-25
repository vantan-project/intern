"use client";

import Add from "@/components/Add";
import Table from "@/components/Table";
import { useEffect, useState } from "react";

export type Tasks = Array<{ name: string; content: string }>;

function Top() {
  const [tasks, setTasks] = useState<Tasks>([]);
  const [show, setShow] = useState(false);
  const [initFlg, setInitFlg] = useState(false);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
    setInitFlg(true);
  }, []);

  useEffect(() => {
    if (initFlg) localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className={`grid-cols-[3fr_1fr] gap-4 p-12 ${show && "grid"}`}>
      <div className="flex flex-col gap-4 items-center w-full">
        <div className="text-4xl">TODOリスト</div>
        <div className="overflow-auto max-h-[600px] w-full">
          <Table tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
      <Add show={show} setShow={setShow} setTasks={setTasks} />
    </div>
  );
}

export default Top;
