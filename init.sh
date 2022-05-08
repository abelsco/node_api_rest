npx sequelize model:create --name Cliente --attributes 'nome:string,cpf:string,dtNascimento:date,nomeMae:string,endereco:string' --force
npx sequelize model:create --name Exame --attributes 'protocolo:Integer,descricao:string' --force
npx sequelize model:create --name Plano --attributes 'nome:String,numCarteirinha:integer' --force
npx sequelize db:create
npx sequelize db:migrate