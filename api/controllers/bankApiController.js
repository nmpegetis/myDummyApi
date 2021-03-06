'use strict';

var mongoose = require('mongoose'),
  Transaction = mongoose.model('Transactions'),
  Account = mongoose.model('Accounts'),
  Branch = mongoose.model('Branches');

// Transactions
exports.list_all_transactions = function(req, res) {
  Transaction.find({}, function(err, transaction) {
    if (err) res.send(err);
    res.json(transaction);
  });
};

exports.create_a_transaction = function(req, res) {
  var new_transaction = new Transaction(req.body);
  new_transaction.save(function(err, transaction) {
    if (err) res.send(err);
    res.json(transaction);
  });
};

exports.read_a_transaction = function(req, res) {
  Transaction.findOne({ Id: req.params.id }, function(err, transaction) {
    if (err) res.send(err);
    res.json(transaction);
  });
};

exports.update_a_transaction = function(req, res) {
  Transaction.findOneAndUpdate(
    {
      Id: req.params.id
    },
    req.body,
    {
      new: true
    },
    function(err, transaction) {
      if (err) res.send(err);
      res.json(transaction);
    }
  );
};

exports.delete_a_transaction = function(req, res) {
  Transaction.remove(
    {
      Id: req.params.id
    },
    function(err, transaction) {
      if (err) res.send(err);
      res.json({
        message: 'Transaction successfully deleted'
      });
    }
  );
};

// Accounts
exports.list_all_accounts = function(req, res) {
  Account.find({}, function(err, account) {
    if (err) res.send(err);
    res.json(account);
  });
};

exports.create_an_account = function(req, res) {
  var new_account = new Account(req.body);
  new_account.save(function(err, account) {
    if (err) res.send(err);
    res.json(account);
  });
};

exports.read_an_account = function(req, res) {
  Account.findOne({ Id: req.params.id }, function(err, account) {
    if (err) res.send(err);
    res.json(account);
  });
};

exports.update_an_account = function(req, res) {
  Account.findOneAndUpdate(
    {
      Id: req.params.id
    },
    req.body,
    {
      new: true
    },
    function(err, account) {
      if (err) res.send(err);
      res.json(account);
    }
  );
};

exports.delete_an_account = function(req, res) {
  Account.remove(
    {
      Id: req.params.id
    },
    function(err, account) {
      if (err) res.send(err);
      res.json({
        message: 'Account successfully deleted'
      });
    }
  );
};

// Branches
exports.list_all_branches = function(req, res) {
  Branch.find({}, function(err, branch) {
    if (err) res.send(err);
    res.json(branch);
  });
};

exports.create_a_branch = function(req, res) {
  var new_branch = new Branch(req.body);
  new_branch.save(function(err, branch) {
    if (err) res.send(err);
    res.json(branch);
  });
};

exports.read_a_branch = function(req, res) {
  Branch.findOne({ Id: req.params.id }, function(err, branch) {
    if (err) res.send(err);
    res.json(branch);
  });
};

exports.update_a_branch = function(req, res) {
  Branch.findOneAndUpdate(
    {
      Id: req.params.id
    },
    req.body,
    {
      new: true
    },
    function(err, branch) {
      if (err) res.send(err);
      res.json(branch);
    }
  );
};

exports.delete_a_branch = function(req, res) {
  Branch.remove(
    {
      Id: req.params.id
    },
    function(err, branch) {
      if (err) res.send(err);
      res.json({
        message: 'Branch successfully deleted'
      });
    }
  );
};
