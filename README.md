# solo_project：link_list 概要

この project は

・あのレクチャー見返したい・・・いつだっけ？（Viceroy で探す）

・sprint 中や lecture 内で紹介された URL、お気に入りに入れすぎてフォルダがパンパン・ぐちゃぐちゃ 😭

という悩みを解決するために作成しました。

Viceroy へのリンクと Github のレポジトリは BTC4 期生向けのため、関係者以外はリンク先へのアクセスができません。

あらかじめご承知おきください。

カテゴリーで分類しています。

※カテゴリーは別途記載

### アプリのプレビュー

リンクがカテゴリ順（カテゴリの中でさらに古い順）に並んでいます。

一番上のフォーム部分から追加することもできます。

![スクリーンショット 1](front/screenshot/screenshot1.png)

### セットアップと実行方法

1. このレポジトリを clone

1. `psql`で PostgreSQL を起動し、`CREATE DATABASE links;`で links データベースを作成

1. `\c links`で links データベースに移動し links データベースができていることを確認

1. clone したローカルのフォルダを開き、ターミナルで

   front ディレクトリ・back ディレクトリに遷移しそれぞれ npm install を実行
   `cd front`
   `npm install`
   `cd ../back`
   `npm install`

1. back ディレクトリで

   `npm run migrate`を実行しテーブルを作成したら次に

   `npm run seed`を実行しデフォルトデータを登録

1. back ディレクトリで`npm start` を実行し、localhost:3000 にアクセス

🌈front の編集をしたとき

front フォルダに編集を加えたときは、

ターミナルで front ディレクトリに入り`npm run build`を実行し

次に back ディレクトリに移動して`npm run start`を実行して

ブラウザで開いている localhost:3000 のページを更新することで内容を確認できます。

# Author

- saki

# License

This is Confidential.

# category 一覧　　（2023/6/9 現在）

Deploy

Git

JavaScript/CSS/HTML

Express

Knex/postgerSQL

React

TypeScript

テスト

エラー対処

便利ツール

気になる

その他
