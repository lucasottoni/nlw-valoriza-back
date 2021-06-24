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