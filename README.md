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
- NPM stands for Node Package Manager.
- It helps in usage of thir party packages / modules in Node.js

CallBacks

