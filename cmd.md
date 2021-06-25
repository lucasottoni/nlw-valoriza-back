yarn init -y
yarn add typescript -D
yarn add express
yarn add @types/express -D
yarn add ts-node-dev -D

#together

yarn add typeorm reflect-metadata sqlite3
yarn typeorm migration:create -n CreateUsers
yarn typeorm migration:run
yarn typeorm migration:revert #to revert last migration
yarn typeorm entity:create -n User

#unidade

yarn typeorm migration:create -n CreateTags
yarn typeorm migration:run
yarn add express-async-errors

#embuscadeevolução

yarn add jsonwebtoken
yarn add @types/jsonwebtoken -D
yarn typeorm migration:create -n AlterUsersAddPassword
yarn typeorm migration:run
yarn add bcryptjs
yarn add @types/bcryptjs -D
yarn typeorm migration:create -n CreateCompliments

#legacy

yarn add class-transformer
yarn add cors
yarn add @types/cors -D

#juntos no proximo nivel
