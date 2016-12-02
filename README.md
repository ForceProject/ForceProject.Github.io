# Read Me

This is the official website for the still yet to be released Force app.

There are still many things that need to be done:

### For anyone @ The Magic Lab UTS
The branch for the web-app I am working on is the ForceJS-React-Port branch.
Probably no need to explain this, but FYI to anyone out there who is reading this:
*To run my web-app dev server:*
- You must have **npm** installed first.
- Clone the branch into a folder.
- Change directory into the ForceJS folder.
- Run the following to install all of the dependencies
```bash
npm install
```
- Run the following to run the webpack-dev-server.
```bash
npm start
```
The program is set to try to connect to the PR2 when it starts up, via **ROS Bridge**.

At the moment, the program loads the initial controller from a **JSON** file named **DemoController.json**, which configures all of the information about the tiles, and also contains information about which ROS Topic it should publish to.

Currently the data that is to be sent should be stored as a JSON object in the dictionary **send**. You will notice that there is a string in each that looks like ```"<this(Float64)>"```, which is actually a placeholder for the data from the tile/UI element to be inserted.
As you can see, *this* refers to the tile containing the ROS information.
Later on, I will add the ability so that ```"<foreignTag(String)>"``` will be able to pull data from another tile.

I believe, currently, adding tiles via the UI may be currently broken, as I was modifying code to be better and suitable for reading from a file, or other sources.

#### The Website
- [ ] Fix broken links
- [ ] Correct some CSS for the website which may cause the page to render funny.

#### The iOS App
- [ ] Update to Swift 3
- [ ] Beta test the updated version for bugs
- [ ] Add Bonjour functionality
- [ ] Potentialy migrate to WebSockets for web compatibility

#### ForceJS
- [ ] Properly implement and test ROS bridge functionality
- [ ] Add settings for each tile
- [ ] Add more tiles such as dials, joysticks, labels, etc
- [ ] Create basic settings for an end-user to be able to the web-app
- [ ] Create more comprehensive settings for more professional users
- [ ] Add WebSockets functionality

#### Server
- [ ] Create a server
- [ ] Add account creation with Firebase
- [ ] Allow storage of controllers on the server per user
- [ ] Store documentation on the server, so all clients are up to date
- [ ] Create the ability to share and publish controllers (WebSockets)
- [ ] For ROS Bridge controllers, make private controllers an additional feature
