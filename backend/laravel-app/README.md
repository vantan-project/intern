# コメントが書かれてるところが大事なところです！

```bash
.
├── Dockerfile
├── docker-compose.yml
└── laravel-app
    ├── README.md
    ├── app
    │   ├── Http
    │   │   └── Controllers
    │   │       ├── Controller.php
    │   │       └── TaskController.php # タスクコントローラーファイル
    │   ├── Models
    │   │   ├── Task.php # タスクモデルファイル
    │   │   └── User.php
    │   └── Providers
    │       └── AppServiceProvider.php
    ├── artisan
    ├── bootstrap
    │   ├── app.php
    │   ├── cache
    │   │   ├── packages.php
    │   │   └── services.php
    │   └── providers.php
    ├── composer.json
    ├── composer.lock
    ├── database
    │   ├── database.sqlite
    │   ├── factories
    │   │   └── UserFactory.php
    │   ├── migrations
    │   │   ├── 0001_01_01_000000_create_users_table.php
    │   │   ├── 0001_01_01_000001_create_cache_table.php
    │   │   ├── 0001_01_01_000002_create_jobs_table.php
    │   │   └── 2024_11_25_082742_create_tasks_table.php # タスクマイグレーションファイル
    │   └── seeders
    │       └── DatabaseSeeder.php
    ├── package.json
    ├── phpunit.xml
    ├── postcss.config.js
    ├── public
    │   ├── favicon.ico
    │   ├── index.php
    │   └── robots.txt
    ├── resources
    │   ├── css
    │   │   └── app.css
    │   ├── js
    │   │   ├── app.js
    │   │   └── bootstrap.js
    │   └── views
    │       ├── task
    │       │   ├── create.blade.php # タスク追加ページ
    │       │   ├── edit.blade.php # タスク編集ページ
    │       │   └── index.blade.php # タスク一覧ページ
    │       └── welcome.blade.php
    ├── routes
    │   ├── console.php
    │   └── web.php # ルーティングファイル
    ├── tailwind.config.js
    ├── tests
    │   ├── Feature
    │   │   └── ExampleTest.php
    │   ├── TestCase.php
    │   └── Unit
    │       └── ExampleTest.php
    └── vite.config.js
```
