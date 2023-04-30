'use strict';

var utils = require('../utils/writer.js');
var Reviews = require('../service/ReviewsService');

module.exports.reviewsGET = function reviewsGET (req, res, next, maxRating) {
  Reviews.reviewsGET(maxRating)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reviewsPOST = function reviewsPOST (req, res, next, body) {
  Reviews.reviewsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reviewsReviewIdGET = function reviewsReviewIdGET (req, res, next, reviewId) {
  Reviews.reviewsReviewIdGET(reviewId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
