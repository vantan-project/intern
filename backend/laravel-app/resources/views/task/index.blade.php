<!DOCTYPE html5>
<html lang="ja">
<head>
    <title>一覧ページ</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="p-12 flex flex-col gap-4 items-center w-full">
        <div class="text-4xl">TODOリスト</div>
        <table class="w-full border">
            <thead class="bg-sky-100">
              <tr>
                <td class="p-1 w-1/5">タスク名</td>
                <td class="p-1">内容</td>
                <td class="p-1 w-32"></td>
              </tr>
            </thead>
            <tbody>
                @foreach($tasks as $task)
                <tr>
                    <td class="p-1 border">{{$task["name"]}}</td>
                    <td class="p-1 border">{{$task["content"]}}</td>
                    <td class="p-1 border">
                        <div class="flex gap-2">
                            <a class="p-2 bg-sky-300 rounded-lg h-fit" href={{ route("task.edit", ["id" => $task["id"]]) }}>
                                編集
                            </a>
                            <form method="POST" action={{ route("task.destroy", ["id" => $task["id"]]) }}>
                                @method("DELETE")
                                @csrf
                                <button class="p-2 bg-sky-300 rounded-lg" type="submit" >
                                    削除
                                </button>
                            </form>
                        </div>    
                    </td>
                </tr>    
                @endforeach    
            </tbody>
        </table>
        <div class="flex justify-end w-full p-2">
            <a class="p-2 bg-sky-300 rounded-lg" href={{ route("task.create") }}>
                新規作成
            </a>
        </div>
    </div>
</body>
</html>
