//Cambiar delete and update por métodos que no usen el find para mayor desempeño.
"use strict";
const User = require('../models/user')
const Item = require('../models/item')
const ObjectID = require('mongodb').ObjectID;

module.exports = function(app) {

    //Users

    app.get('/users', function(req, res) {
        User.find(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
    });

    app.get('/users/:id', function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err)
                res.send(err);

            res.json(user);
        });
    });

    app.post('/users', function(req, res) {
        var user = new User();

        user.username = req.body.username;
        user.name = req.body.name;
        user.password = req.body.password;
        user.location = req.location;

        user.save(function(err) {
            if (err)
                return res.send(err);

            res.json(user);
        });
    });

    app.delete('/users/:id', function(req, res) {

        User.findByIdAndRemove(req.params.id, function(err) {
            if (err)
                res.send(err);

            res.json({message: 'User removed successfully!'});
        });
    });

    app.put('/users/:id', function(req, res) {
        User.findById(req.params.id, function(err, user) {
            if (err)
                res.send(err);

            user.username = req.body.username || user.username;
            user.name = req.body.name || user.name;
            user.password = req.body.password || user.password;
            user.location = req.location || user.location;;

            user.save(function(err) {
                if (err)
                    return res.send(err);

                res.json(user);
            });
        });
    });

    //Items

    app.get('/users/:userid/items', function(req, res) {
        Item.find({ creator: req.params.userid }, function(err, items) {
            if (err)
                res.send(err);

            res.json(items);
        });
    });

    app.get('/users/:userid/items/:itemid', function(req, res) {
        Item.findById(req.params.itemid, function(err, item) {
            if (err)
                res.send(err);

            res.json(item);
        });
    });

    app.post('/users/:userid/items', function(req, res) {
        var item = new Item();

        item.name = req.body.name;
        item.dueDay = req.body.dueDay;
        item.category = req.body.category;
        item.type = req.body.type;
        item.reminderDate = req.body.reminderDate;
        item.amount = req.body.amount;
        item.creator = new ObjectID(req.params.userid);

        item.save(function(err) {
            if (err)
                res.send(err);

            res.json(item);
        });
    });

    app.delete('/users/:userid/items/:itemid', function(req, res) {

        Item.findByIdAndRemove(req.params.itemid, function(err) {
            if (err)
                res.send(err);

            res.json({message: 'Item removed successfully!'});
        });
    });

    app.put('/users/:userid/items/:itemid', function(req, res) {
        Item.findById(req.params.itemid, function(err, item) {
            if (err)
                res.send(err);

            item.name = req.body.name || item.name;
            item.dueDay = req.body.dueDay || item.dueDay;
            item.category = req.body.category || item.category;
            item.type = req.body.type || item.type;
            item.reminderDate = req.body.reminderDate || item.reminderDate;
            item.amount = req.body.amount || item.amount;

            item.save(function(err) {
                if (err)
                    res.send(err);

                res.json(item);
            });
        });
    });
}
