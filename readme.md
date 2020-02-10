### Mongodb

Mongodb 屬 NoSQL 一種， 有豐富的數據表達索引，最類似數據庫，支持查詢語言豐富
數據結構由`key : value`對組而成
無**事物機制**，為了是使用`json`格式方便讀寫，所以要在Node中仔細將其`CRUD`的功能詳細表達

#### 應用場境
適合使用如文章、評論、緩存DB
1. 數據通常用於模糊處理，全文搜尋、機器學習
2. 海量資訊增長速度難預期

#### 緩存DB 
首先明確是不是一定要上緩存，了解當前架構瓶頸後最追加緩存以減少DB的負荷
使用者 -> DB緩存 (if MongoDB有 則返回) -> DB(MySQL if DB緩存無 則此返回)

---
此範例專案僅有 `Mongodb` 預先安裝 `docker` `node`
#### 使用方式
1. `docker-compose up -d` 後大概等個5秒繼續下一動作
2. `npm i`
3. `npm start`

專案系統相關 URL
mongodbURL : mongodb://admin:admin@127.0.0.1:27017/todos
mongodb-express: http://localhost:8081
express: http://localhost:3000

(專案只有Todo的範例)