npx sequelize model:create --name User --attributes username:string,email:string,password:string,role:string

npx sequelize model:create --name UserBiodata --attributes first_name:string,last_name:string,gender:enum,birthdate:date

npx sequelize model:create --name UserHistory --attributes win:string,lose:string,draw:string
