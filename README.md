# バックエンド

---

- ### 目的：
  ハンズオン学習：
  web アプリケーションを一気通貫で作成することで、理解が浅い分野を細部まで調べる機会を得る。また資格勉強だけでは得ることができない体系的な知識を学ぶ。
  ポートフォリオサイト：
  スケジュール管理アプリや健康管理アプリなどの IoT アプリや、使用した技術スタックをアウトプットした qiita や zen などの記事を制作したいと思っており、それらの成果物をまとめ、自分用に記録しておくことができるサイト。
  外向けアピール：
  ポートフォリトサイトを作成することで、自分の技術力が形として残り他者から評価を受ける機会を増やすことができる。
- ### 要件：
  上記の目的を考慮し今回作成するアプリケーションの要件を以下に記載する。
  ・汎用性が高くモダンな以下の技術スタックを採用する。
  　・react
  　・tailwindcss
  　・node.js
  　・RESTAPI
  ・notion の DB 機能を使用した to-do アプリを利用する。
  ・認証機能を実装しセキュリティを堅牢にする。
  ・Form 機能を実装する。
- ### 実装：
  ■reactfolio
  view:
  jsx
  tailwindcss
  model:
  redux
  react.state
  json
  controller:
  react.router
  react.memo
  react.ref
  react.effect
  ■serverfolio
  routes:
  express.Router
  controller:
  routes→validation(middleware),services 間のつなぎ、post で取得したデータ保持
  services:
  notionAPI に POST
  ![alt text](image.png)
- ### 導入：
  > ```
  > git clone https://github.com/yoshik-00/reactfolio.git
  >
  > ```

---
