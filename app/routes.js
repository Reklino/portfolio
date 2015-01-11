 // app/routes.js

// grab the project model we just created
var Project = require('./models/project');
var path = require('path');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/projects', function(req, res) {
            // use mongoose to get all projects in the database
            Project.find(function(err, projects) {

                // if there is an error retrieving, send the error. 
                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(projects); // return all projects in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../public/views', 'index.html')); // load our public/index.html file
        });

    };
