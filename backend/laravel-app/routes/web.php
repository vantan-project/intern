<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;

Route::get("/", function () {
    return view("welcome");
});

Route::prefix("task")->group(function () {
    Route::get("/", [TaskController::class, "index"])->name("task.index"); // タスク一覧
    Route::get("/create", [TaskController::class, "create"])->name("task.create"); // タスク作成フォーム
    Route::post("/", [TaskController::class, "store"])->name("task.store"); // 新規タスク保存
    // Route::get("{id}", [TaskController::class, "show"]); // タスク詳細
    Route::get("{id}/edit", [TaskController::class, "edit"])->name("task.edit"); // タスク編集フォーム
    Route::put("{id}", [TaskController::class, "update"])->name("task.update"); // タスク更新
    Route::delete("{id}", [TaskController::class, "destroy"])->name("task.destroy"); // タスク削除
});
