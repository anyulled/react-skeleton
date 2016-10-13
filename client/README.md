**POC-CLIENT**

This is a client app repository for the React PoC project.

**RUNNING THE PROJECT**

In order to run the project please first run

`npm install`

`npm install http-server -g`

to download all the required dependencies. If during the install process you run into a permission
or 404 errors, please run

`git config --global url."https://".insteadOf git://`

This will allow access to github.com repos from behind a proxy / firewall.

After installing the dependencies please run

`npm install http-server -g`

In order to instal the web server. Then run

`npm start`

This will start:

- webpack in "watch" mode, which will compile the bundle when any changes are
made in the app source code,
- http-server which will serve the app stored in `./dist` folder.

The app should be now accessible at `http://localhost:8080/`

**CALCULATING CODE COVERAGE**

This operation can be started by running the command
`npm run cover`

The `coverage` folder will contain an html page with coverage metrics

**SOCKET.IO TESTING**
a second server is setup in port 3001 with a socket listener.
to enable grids fetching user data for this server, change the dispatch actions from usersLoadAjax() to usersLoad()
