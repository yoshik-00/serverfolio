# バックエンド

---

- ### 目的

  ##### ハンズオン学習

  ウェブアプリケーションを一気通貫で作成することで、理解が浅い分野を細部まで調べる機会を得る。また資格勉強だけでは得ることができない体系的な知識を学ぶ。

  ##### ポートフォリオサイト

  開発や研修等に関わるスケジュールを todo で管理、今まで経験したプロジェクトの記録、今まで使用した技術スタックの記録を視覚的にまとめ自分で振り返る、または他者にアピールすることができるポートフォリオサイトの作成。

  ##### アピール

  ポートフォリトサイトを作成することで、自分の技術力が形として残り他者から評価を受ける機会を増やすことができる。

- ### 要件
  上記の目的を考慮し今回作成するアプリケーションの要件を以下に記載する。
  - 汎用性が高くモダンな以下の技術スタックを採用する。
    - react
    - tailwindcss
    - node.js
    - RESTAPI
    - docker
  - notion の DB 機能を使用した to-do アプリを利用する。
  - 認証機能を実装しセキュリティを堅牢にする。
  - フォーム機能を実装する。
- ### 実装

  ##### システムアーキテクチャ図

  ![alt text](architecture.png)

  - ##### serverfolio

    <img src="https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" />
    <img src="https://img.shields.io/badge/nodemon%20-76D04B?style=for-the-badge&logo=nodemon&logoColor=white" />

    ###### routes

      <img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" />

    ###### controller

      <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white" />
      <img src="https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white" />
      <img src="https://img.shields.io/badge/google_libphonenumber-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" />

    ###### services

      <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white" />

- ### 導入
  > ```
  > git clone https://github.com/yoshik-00/reactfolio.git
  >
  > npm install
  >
  > npm run dev
  > ```

---
