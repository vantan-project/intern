<!DOCTYPE html5>
<html lang="ja">
<head>
    <title>追加ページ</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="flex flex-col items-center w-full p-12">
        <form class="w-[800px] bg-sky-100 p-10 rounded-lg" method="POST" action={{ route("task.store") }}>
            @csrf
            <div class="text-4xl text-center">追加ページ</div>
            <label>タスク名</label>
            <input class="w-full p-1 border" name="name" />

            <label>内容</label>
            <textarea class="w-full p-1 border h-96" name="content"></textarea>

            <div class="flex justify-end gap-2 pt-5">
            <a class="p-2 bg-sky-300 rounded-lg" href={{ route("task.index") }}>
                キャンセル
            </a>
            <button class="p-2 bg-sky-300 rounded-lg" type="submit">
                追加
            </button>
            </div>
        </from>
      </div>
</body>
</html>