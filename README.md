Node.js

Agenda:
1. Understand Node.js
2. Setup, write and execute code in Node.js
3. Understand and use Node.js module system
4. Code organisation, exports and imports
5. Starting a web server using Node.js
6. Writing a command line utility

Prerequisites:
1. Working knowledge of JavaScript
2. Familiarity with Command Line

What is Node js?
- Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine.
- Difference between Language and Runtime.
- Origins of JavaScript - Initially it was just HTML and CSS, when JavaScript came it bought dynamic functionality to the websites.
- Design and Run the JavaScript language - Creating a new language (in 2 easy steps) - 1) Design the language, 2) Build something that runs it.
- Syntax - var a = b + c; then something needs to execute / run  this.
- any_file.js ——> JavaScript Engine (in Browser Context) ——> executes / runs the any_file.js file.
- This runtime, cannot run in Isolation, it needs some context. Takes the context from DOM.
- Different browsers have different implementations.
- Previously people used Chrome Browser’s V8 engine.
- V8 engine runs on only one context ——> DOM context.
- Now with Node.js JavaScript files can be run in the local OS inside Node.js context.
- Therefore, V8 engine in Node.js context.
Hence, Node.js is a runtime for V8 engine in your local OS, that also provides a whole lot of other functionalities like access to apis, etc.
- What’s the context here ? 
- Running on Node.js - 1) Access to system resources, 2) Memory, file system, I/O, network and more.

What is NVM?
- NVM stands for Node Version Manager.
- Manages various versions of node.js on your machine.
- Saves the problem of installing, uninstalling and reinstalling different versions of node.js as and when required.
- Prerequisites - git, curl of nvm from GitHub repo.
- Add the downloaded nvm files to .zshrc file.
- source ~/.zshrc
- nvm -v ——> gives version of nvm installed.
- nvm install node ——> installs the lates version of node.js
- nvm install node_version_number ——> installs a specific version of node.js
- nvm ls-remote ——> gives a list of all the available node.js version options available for your system

Node Modules
- One file can be executed inside another file using the require method.
- Some properties of one file can be executed inside another file by usingg exports method and receiving that method into an object via require method.
- Node Modules can also come in the form of apis in Node.js
- 'readline' is an api module in Node.js that helps to take user input in stdin and output the same through stdout.
- 'fs' - 'writeLine' is an api module in Node.js that writes some data to a specified file whethe or not it exists. If it exists then it overwrites, else creates a new file with the specified name and writes the data to it. 

What is NPM ?
- Previously NPM was supposed to be a Node Package Manager.
- It helps in usage of thir party packages / modules in Node.js
- It comes pre-installed along with Node.js installation.
- Package Manager helps you to add third party packages from all different third party websites in your Node.js project directory, without the hessle of downloading them from the third party websites.
- It also is helps in saving the memory, by not downloading the packages.
- NPM has a repository / registry that is online and is managed by npm Inc.
- All the third party websites put their third party packages onto this repository / registry.
- When you create a Node.js project using NPM, it creates a "package.json" file in your project directory, wherein you can add that details of all the third party dependancies / packages along with their versions, that you require for your project.
- NPM will then go to its repository / registry and fetch the exact specified thir party packages with their respective versions.
- "npm install" command does the process of looking at all the dependancies mentioned in "package.json" and then getting those dependancies from the npm repository / registry. 

Creating a Node.js project with NPM
- Create a project folder, and use the command "npm init".
- Fill the different input fields that it prompts as per your project requirement.
- Finally it creates a Node.js project with npm, that just has a single package.json file, which basically contains the information that you just filled, and this serves as the metadata for your project.
- Inorder to execute / run your project with the main file, you can create an alias "start" in "scripts" of "package.json", and provide it with the command of starting the main file, ex. "start" : "node index.js", here "index.js" is he main file of this Node.js project.
- Now the project can be run with a single command "npm start".
- Other aliases (aliases other than "start" and "test") can also be created inside "scripts", but need to run them using the command "npm run alias_name".

CallBacks
- Callback is a call that is made by Node.js runtime to the api that is called.
- There are two types of CallBacks - Synchronous and Asynchronous.
- Synchronous CallBack executes the commands in their original order synchronously one after the other.
- Asynchronous CallBack does not execute the commands in their original order that is one after the other, but rather executes the commands asynchronously, in any order.
- Node.js is a Single-Threaded runtime, so it has the Asynchronous CallBack flexibility, wherein it can halt one process, complete some other process and then get back to the original process, although Synchronous CallBack facility is also provided in Node.js, wherein all other process are kept on halt while the original process is getting executed, and once its completed the next process is started in their order.

To download all dependancies inside sub project folders, run "npm install", it will install all the dependancies mentioned inside package.json file dependancies field into node_modules folder.