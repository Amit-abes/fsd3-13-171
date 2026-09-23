localhost - URL
127.0.0.1 - IP address

ctrl+c - stop the server

every request from the client has a pair of {request,response}

npm - node package manager
used to install, run, uninstall any program/project and package
- npm install <packageName>
- npm uninstall <packageName>

to use npm, the project must be npm project,
to create npm project we can use
- npm init -y
- it creates a package.json file automatically
package.json holda all the information realted to install
package for npm
- update package.json,set type = 'module'
- it also creates a folder node_modules automatically
- node_modules holds the package/Library files
- generally we ignore the node_modules by .gitignore
Get- no parameter will pass to the server and he recevie all item
post-add record we pass the value from body section in JSON formate of API tester
Delete - to delete any product we pass parameter that is id of the product from url
Update- we pass id from url and data to update from body