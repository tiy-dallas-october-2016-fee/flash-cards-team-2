

## Setup

`$ npm install`


## Running the Project

```
$ gulp
```

## Things I Found Useful

These are some things that I found useful while building this.

* [Passport documentation](http://passportjs.org/)
* [Easy Node Authentication: Setup and Local](https://scotch.io/tutorials/easy-node-authentication-setup-and-local)
* [Understanding passport serialize deserialize](http://stackoverflow.com/questions/27637609/understanding-passport-serialize-deserialize)
* [How to pass data to every view in Express 3?](http://stackoverflow.com/questions/12658175/how-to-pass-data-to-every-view-in-express-3)
* [Change Express view folder based on where is the file that res.render() is called](http://stackoverflow.com/questions/21885377/change-express-view-folder-based-on-where-is-the-file-that-res-render-is-calle)

## Mongo Stuff

You will need to install MongoDB to run this project. Download it, put it somewhere (I put it in my dev folder but that is not required), and run it. Here is a sample shell script to do that.

```
~/dev/mongo/mongodb-osx-x86_64-3.4.1/bin/mongod --dbpath ~/dev/data/flashcards --port 28018
```

* The first part specifies the `mongod` commmand, which runs it.
* The second part specified where the actual data is stored on your hard drive.
* The last bit specifies which port Mongo will run on.
