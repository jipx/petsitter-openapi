'use strict';


/**
 * Get a list of reviews
 *
 * maxRating BigDecimal  (optional)
 * returns List
 **/
exports.reviewsGET = function(maxRating) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "rating" : 1,
  "message" : "Hello from over here",
  "uuid" : "uuid",
  "userId" : "userId"
}, {
  "rating" : 1,
  "message" : "Hello from over here",
  "uuid" : "uuid",
  "userId" : "userId"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a new Review
 *
 * body Reviews_body  (optional)
 * returns inline_response_201
 **/
exports.reviewsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "rating" : 5,
  "message" : "An awesome time for the whole family.",
  "userId" : "f7f680a8-d111-421f-b6b3-493ebf905078",
  "uuid" : "f7f680a8-d111-421f-b6b3-493ebf905078"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a single review
 *
 * reviewId String 
 * returns inline_response_200_1
 **/
exports.reviewsReviewIdGET = function(reviewId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "rating" : 5,
  "message" : "An awesome time for the whole family.",
  "userId" : "f7f680a8-d111-421f-b6b3-493ebf905078",
  "uuid" : "f7f680a8-d111-421f-b6b3-493ebf905078"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

