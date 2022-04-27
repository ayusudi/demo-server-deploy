<h1 style="color:#1c42a0"> W1D3 Deploy (Start - End) </h1>

<h2 style="color:tomato">🦊 Agenda</h2>

### ✐ Deploy Server with Heroku
```
prerequisite : Install Heroku CLI & Account Heroku
```
#### Heroku 
https://www.heroku.com/
https://devcenter.heroku.com/articles/getting-started-with-nodejs

#### Step by step
```
1. Login Heroku CLI
2. Create Heroku App
3. Add Database Postgres to Heroku App 
4. Setup Code for Deploy Heroku 
  - Procfile 
  - PORT 
  - package.json
  - config.json (sequelize production mode)
5. Upload to Heroku by git 
6. Check Log
7. Setup ENV 
8. Inisialisasi Tabel Database
```

#### 1. Login Heroku CLI
```bash
heroku login
```  
Dari terminal akan redirect ke web untuk login ke heroku

#### 2. Create Heroku App
```bash
heroku create <NAMA_APLIKASI_YANG_DIINGINKAN> 

contoh 
heroku create 8gag-app-ayusudi
```
Response dari heroku cli jika berhasil 
```bash
Creating ⬢ 8gag-app-ayusudi... done
https://8gag-app-ayusudi.herokuapp.com/ | https://git.heroku.com/8gag-app-ayusudi.git
```

#### 3. Add Database Postgres to Heroku App 
```bash
heroku addons:create heroku-postgresql:hobby-dev --app NAMA_APLIKASI
```
Response dari heroku cli
```bash
Creating heroku-postgresql:hobby-dev on ⬢ NAMA_APLIKASI free
Database has been created and is available
 ! This database is empty. If upgrading, you can transfer
 ! data from another database with pg:copy
Created postgresql-xxxx-xxxxx as DATABASE_URL
```
#### 4. Setup Code for Deploy Heroku 
- Procfile  
  https://devcenter.heroku.com/articles/getting-started-with-nodejs#define-a-procfile
- package.json
  ```
  "scripts": {
    "dev": "NODE_ENV=development npx nodemon app.js",
    "start": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
  ```
- config.json (sequelize production mode)
  https://devcenter.heroku.com/articles/heroku-postgresql
  ```
  {
    "production": {
      "use_env_variable": "DATABASE_URL",
      "ssl": true,
      "dialect": "postgres",
      "protocol": "postgres",
      "dialectOptions": {
        "ssl": {
          "require": true,
          "rejectUnauthorized": false
        }
      }
    }
  }
  ```
- PORT

#### 5. Upload to Heroku by git 
Tapi sebelum itu check dahulu git remote yang dimiliki

```
git remote -v
heroku git:remote --app NAMA_APLIKASI
```

Push ke branch main git heroku
```
git push heroku NAMA_BRANCH_SAAT_INI:main
```


#### 6. Check Log

```
heroku logs -t
```

#### 7. Setup ENV 

#### 8. Inisialisasi Tabel Database
#### 8.1 Run Bash on Cloud Server Heroku
 