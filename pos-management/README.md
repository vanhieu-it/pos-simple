## Bước 1: Thiết lập dự án Node.js

1.1 Tạo thư mục dự án
```
mkdir pos-management
cd pos-management
```
  
1.2 Khởi tạo dự án Node.js
```
npm init -y
```
1.3 Cài đặt các gói cần thiết
```
npm install express pg sequelize sequelize-cli body-parser cors
```
## Bước 2: Cấu hình Sequelize và PostgreSQL
2.1 Cài đặt Sequelize CLI
```
npx sequelize-cli init
```
2.2 Cấu hình tệp config/config.json

```
{
  "development": {
    "username": "your_db_username",
    "password": "your_db_password",
    "database": "your_db_name",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "your_db_username",
    "password": "your_db_password",
    "database": "your_db_name_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "your_db_username",
    "password": "your_db_password",
    "database": "your_db_name_prod",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```

2.3 Tạo các model
```
npx sequelize-cli model:generate --name User --attributes username:string,email:string,password_hash:string,role:string
npx sequelize-cli model:generate --name Customer --attributes name:string,email:string,phone:string,address:text
npx sequelize-cli model:generate --name Product --attributes name:string,description:text,price:decimal
npx sequelize-cli model:generate --name Employee --attributes name:string,position:string,email:string,phone:string,hire_date:date
npx sequelize-cli model:generate --name Order --attributes customer_id:integer,employee_id:integer,order_date:date,total_amount:decimal,status:string,created_by:integer
npx sequelize-cli model:generate --name OrderItem --attributes order_id:integer,product_id:integer,quantity:integer,unit_price:decimal,total_price:decimal
npx sequelize-cli model:generate --name Inventory --attributes product_id:integer,quantity:integer,last_updated:date
```
2.4 Chạy lệnh migrate để tạo các bảng trong cơ sở dữ liệu
```
  npx sequelize-cli db:migrate
```
...
## Chạy chương trình
```
node app.js
```
