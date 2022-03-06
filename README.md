# Typescript-basic-examples

Repository with commented examples about Typescript

## Basic knowledge

### Install globally
npm install -g typescript

### Trampile a ts file
Type on a terminal the next command to transpile a .ts file to a .js file
tsc app.ts 

### Generate a tsconfig.json file
tsc --init

After having a tsconfig.json file, we can just type tsc in the command line and every .ts file that matches the config criteria will be automatically transpile to a js file.

### Watch mode transpilation
This observable mode will keep watching every tsc file to transpile them to a js homonim when saved.

tsc --watch 
tsc -w
