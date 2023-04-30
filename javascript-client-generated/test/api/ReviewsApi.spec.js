/*
 * FarmStall API
 *  An API for writing reviews about your favourite ( or worst ) farm stalls.  ![Picture of produce](https://farmstall.ponelat.com/img/produce-banner.jpg)  ---  # Auth  To create **Reviews** without being _anonymous_. You need to add a **MyUserToken** to the `Authorization` header.  To get a **MyUserToken**: 1. Create a **User** with [POST /users](#Users/post_users) 1. Get a **MyUserToken** by calling [POST /tokens](#Users/post_tokens) with your **User** credentials.  # Reviews Reviews are the heart of this API. <br/> Registered **Users** and anonymous users can both write reviews based on their experience at farm stalls. <br/>  Each review comes with a rating of between one and five stars inclusive.  - One star being the worst experience - Five stars being the best   ### Example Reviews    \"A wonderful time!\" &mdash; Bob McNally    <br/>   ![5 stars](https://farmstall.ponelat.com/img/rating-5.png)    \"An awful place\" &mdash; _Anonymous_    <br/>   ![1 star](https://farmstall.ponelat.com/img/rating-1.png)    \"A totally average place.\" &mdash; Jane Fair    <br/>   ![3 stars](https://farmstall.ponelat.com/img/rating-3.png)
 *
 * OpenAPI spec version: ch08-end
 * Contact: jponelat@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.42
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FarmStallApi);
  }
}(this, function(expect, FarmStallApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new FarmStallApi.ReviewsApi();
  });

  describe('(package)', function() {
    describe('ReviewsApi', function() {
      describe('reviewsGet', function() {
        it('should call reviewsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for reviewsGet call and complete the assertions
          /*
          var opts = {};

          instance.reviewsGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(FarmStallApi.InlineResponse200);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('reviewsPost', function() {
        it('should call reviewsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for reviewsPost call and complete the assertions
          /*
          var opts = {};

          instance.reviewsPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FarmStallApi.InlineResponse201);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('reviewsReviewIdGet', function() {
        it('should call reviewsReviewIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for reviewsReviewIdGet call and complete the assertions
          /*

          instance.reviewsReviewIdGet(reviewId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FarmStallApi.InlineResponse2001);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
