### Install packages
npm install
### Make a copy of .env-example and rename it as .env
cp .env-example .env (or do it manually)
### Add your mongoDB connection url
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.g29ki.mongodb.net/<dbName>?retryWrites=true&w=majority
### Run the application
npm run start:dev
### Go to http://localhost:8080/
