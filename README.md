# Remixで作成したポートフォリオ

## Web アプリケーションと自己の紹介用
- 自己を紹介したい際にこちらを見ていただく

## 使用技術とサイト構成
### 使用技術
  - TypeScript
  - Remix

### 当ポートフォリオの構成
  - remix(ファイルベースルーティング)
  - components
    - carousel
  - サイト内画像保管先
    - public/images/

### URL
  - URL元の転載などはお控えください

## こだわり
  - 階層的なコンポーネント構成をしており、コンポーネントの重複した記述を避けている
  - データをpamanent-dataディレクトリに配列で入れているので、データだけを見ることも可能
    - 環境さえ整えば誰でも同じ状態で閲覧出来る
    - seedファイルへの変更は検討中

## 当人紹介画像
- 上記に記載ありますが、サイト内で使用している画像は`/public/images/selef`に存在します
  - 当人作成のイラストや制作物なども置いています(ダウンロード後に他所への散布行為などはお控えください)

## 以下Remix手順
### 前提

- 前提として、npmが使用できることが最低条件となっています

### Development

環境設定

```sh

npm install
```

起動コマンド:

```sh
npm run dev
```

## 問題が起きた際に以下コマンドを実行してみてください
### 削除

- 上記コマンドで起動しなかった際の手順
  - node_modulsとpackage-lock.jsonを削除して再度 `npm install` をしてください。

### Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

#### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`

### Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
