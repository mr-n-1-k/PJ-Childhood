# 注意事項
* main・developブランチ上で作業はしないこと。
  * mainブランチはdevelopなどからのマージでのみ更新する。
  * developブランチでは新たに分岐を作りそれをマージする形で更新する。
* distディレクトリ内には新規フォルダやファイルを追加しないこと。
  * コンパイルする際に、既存ディレクトリ・ファイル以外は全て消去された後、ビルドされるため。
  * ただ、既存ディレクトリの配下には加えても問題ない。
* 新規ブランチを作りたい際はissueに追加したい内容を記載し、そのissueに紐づけたブランチ名で作成すること。


* コンパイル・バンドルする必要があるものはsrcディレクトリ下で作成すること。
<br>

開発前の環境構築について
1. git cloneで当プロジェクトをクローン
2. **npm i**　をコマンドラインにて実行
3. 開発開始 
<br>

## ブランチモデル
* mainブランチ
  * メインブランチ。基本的には現在サーバーで運用されているデータ。このブランチに直接コミットはせずに下のdevelopブランチをマージするだけ。

* developブランチ
  * 開発用メインブランチ。細かい修正がコミットされる

* featureブランチ
  * 機能追加・改修などを行う作業ブランチ。完了後はdevelopブランチにマージされて、featureブランチは削除される
  * 基本的に各ローカルで作成し、マージまで行うため共有する必要性は低い。
  * また、新規作成時にはissueと紐づけた命名にすること `$ git branch feature/#issue番号_動詞_機能`
  
<br>

