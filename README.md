
# blapome-portfolio

ポートフォリオサイト（React + Tailwind CSS）

## 概要
このリポジトリは、ReactとTailwind CSSを用いて作成されたポートフォリオサイトです。Unity WebGLコンテンツも一部ページで表示しています。

## セットアップ
1. リポジトリをクローン
2. 依存パッケージをインストール
	```powershell
	npm install
	```
3. 開発サーバーを起動
	```powershell
	npm start
	```
	ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 主なディレクトリ構成

```
src/            # Reactコンポーネント・スタイル・データ
public/         # 静的ファイル・画像・Unity WebGLビルド
  DreamFootball/  # Unity WebGLコンテンツ
```

## 使用技術
- React
- Tailwind CSS
- Unity WebGL (一部ページ)

## ビルド
本番用ビルドは以下で作成されます。
```powershell
npm run build
```
`build` フォルダに成果物が出力されます。

## ライセンス・著作権
各コンテンツ・画像の著作権は制作者に帰属します。
