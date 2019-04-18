# Nginx-App
A Hello World Node.js app with nginx load balancing

## Basic setup required for project to run:
### Installations:
  1.	Node.js [https://nodejs.org/en/]
  2.	Express (Web framework for Node.js) [https://expressjs.com/]
  3.	PM2 (Node.js process manager) [http://pm2.keymetrics.io/]
  4.	Nginx  [http://nginx.org/en/docs/windows.html]

## Steps to run the project
1)	Go into the folder where `pm2.json` exists. Run the following command: `pm2 start pm2.json` This starts the multiple instances of the app on different ports provided as arguments.
2)	Go to the folder that contains `nginx.exe` and run the following command on the terminal: `start nginx`. You can check if nginx is running using the following command: `tasklist /fi “imagename eq nginx.exe”`
3)	Open a web browser and go to localhost. The first output will be Hello World from localhost:4001. On every refresh of the page the port will change showing that the requests are being load balanced over the three servers specified in the nginx.conf file.
