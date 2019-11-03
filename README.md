# Web-Crawler

A web crawler.
Recursively​ crawling popular blogging website ​ https://medium.com​ using Node.js and harvesting all possible
hyperlinks that belong to ​ medium.com​ and store them in a MongoDB database.

# Instructions to install on local machine 

    1. Run Command - git clone https://github.com/piyushverma955/web-crawler.git
    2. Run npm install
    3. node app.js

# Environment Variable
   1. PORT -- Port for running server (default: 3000)
   2. MONGO_URL  -- Url for mongo connection (default:  'mongodb://localhost:27017')
   3. DB -- Name of DataBase (default: "crawler")
   4. MONGO_RECONN_TRIES -- Mongo reconnection tries (default: 0)
   4. MONGO_RECONN_TIME -- Mongo reconnection time (default: 0)

# Docker Image 
 Building your image 
    1. docker build -t <your username>/node-web-app .
 Run your docker image
    2. docker run -p 3000:3000  --network host -d <your username>/node-web-app  

# To Retrieve the already parsed urls-
   Hit the URL in your browser - localhost:`${portOnWhichYourLocalServerIsRunning}`/getData

# To Start the Process of Scraping afresh-
   Hit the URL in your browser - localhost:`${portOnWhichYourLocalServerIsRunning}`/crawl

   And after 1-2 minutes again hit the URl - localhost:`${portOnWhichYourLocalServerIsRunning}`/getData
    to see the parsed urls
