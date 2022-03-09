npx sequelize model:create --name User --attributes username:string,email:string,password:string,role:string

npx sequelize model:create --name UserBiodata --attributes first_name:string,last_name:string,gender:string,birthdate:date

npx sequelize migration:create --name add-userid-to-userbiodata

npx sequelize model:create --name UserHistory --attributes win:string,lose:string,draw:string

npx sequelize migration:create --name add-userid-to-userhistories
