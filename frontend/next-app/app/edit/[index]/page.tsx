"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Tasks } from "@/app/top/page";

interface Props {
  params: Promise<{ index: string }>;
}

function Edit(props: Props) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const [index, setIndex] = useState<string | null>(null);
  const router = useRouter();

  // 非同期で`index`を取得
  useEffect(() => {
    props.params.then((params) => {
      setIndex(params.index);
    });
  }, [props.params]);

  // タスクの取得処理
  useEffect(() => {
    if (index !== null) {
      // `index`が設定されてから処理を行う
      const storedTasks = localStorage.getItem("tasks");
      if (storedTasks) {
        const tasks = JSON.parse(storedTasks);
        const task = tasks[index];
        if (task) {
          setName(task.name);
          setContent(task.content);
        } else {
          router.push("/top");
        }
      }
    }
  }, [index, router]); // `index`が変わるたびにタスクを取得

  return (
    <div className="flex flex-col items-center w-full p-12">
      <div className="w-[800px] bg-sky-100 p-10 rounded-lg">
        <div className="text-4xl text-center">編集ページ</div>
        <label>タスク名</label>
        <input
          className="w-full p-1 border"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>内容</label>
        <textarea
          className="w-full p-1 border"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="flex justify-end gap-2 pt-5">
          <button
            className="p-2 bg-sky-300 rounded-lg"
            onClick={() => router.push("top")}
          >
            キャンセル
          </button>
          <button
            className="p-2 bg-sky-300 rounded-lg"
            onClick={() => {
              const storedTasks = localStorage.getItem("tasks");
              if (storedTasks) {
                const tasks: Tasks = JSON.parse(storedTasks);
                const newTasks = tasks.map((task, i) =>
                  i === Number(index) ? { name, content } : task,
                );
                localStorage.setItem("tasks", JSON.stringify(newTasks));
              }
              router.push("top");
            }}
          >
            保存
          </button>
        </div>
      </div>
    </div>
  );
}

export default Edit;
