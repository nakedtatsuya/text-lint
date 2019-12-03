# 概要
管理画面で文言の設定をしておき、Figma上のテキストの表現を統一するLint機能です。

# 環境構築
```
git clone git@github.com:tatsuyafukui/text-lint.git
```

```$xslt
npm i
```

```$xslt
npx webpack --mode=development --watch
```

Figma上でローカルのプラグインを読み込む手順
・plugin -> dev -> new -> manifest.jsonをドラッグ

プラグインを実行

# 仕組み
最終的にはdist/配下のcode.jsとui.htmlが読み込まれます。
webpackを使って、bundleしているので、開発ではsrc/配下のファイルを触りましょう。

code.ts以外はReactです。
src/配下のフォルダを編集すると`npx webpack --mode=development --watch`
が監視してくれるので、自動でdist/配下のファイルも更新されます。

# Lint

ESlintでsrc/配下のファイルのコードをチェック。引っかかるとエラーが出ます。
ルールは.eslintrc.jsonのrulesをみてください。

```$xslt
npm run eslint
```

エラーを修正

```$xslt
npm run eslint:fix
```

または、prettier使って（ESlintと競合するかもだけど）

```$xslt
npm run prettier
```

でコードがフォーマットされます。