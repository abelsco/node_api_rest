npx sequelize model:create --name Cliente --attributes 'nome:string,cpf:string,dtNascimento:date,nomeMae:string,endereco:string'
npx sequelize model:create --name Exame --attributes 'protocolo:Integer,descricao:string'
npx sequelize model:create --name Plano --attributes 'nome:String,numCarteirinha:integer'
npx sequelize db:create
npx sequelize db:migrate
yarn run dev