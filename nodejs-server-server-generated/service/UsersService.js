'use strict';


/**
 * Create a new token
 *
 * body Tokens_body  (optional)
 * returns inline_response_201_2
 **/
exports.tokensPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "token" : "token"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new user
 *
 * body Users_body User details (optional)
 * returns inline_response_201_1
 **/
exports.usersPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "uuid" : "f7f680a8-d111-421f-b6b3-493ebf905078",
  "username" : "ponelat"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

