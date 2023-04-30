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
import {ApiClient} from './ApiClient';
import {InlineResponse200} from './model/InlineResponse200';
import {InlineResponse2001} from './model/InlineResponse2001';
import {InlineResponse201} from './model/InlineResponse201';
import {InlineResponse2011} from './model/InlineResponse2011';
import {InlineResponse2012} from './model/InlineResponse2012';
import {ReviewsBody} from './model/ReviewsBody';
import {TokensBody} from './model/TokensBody';
import {UsersBody} from './model/UsersBody';
import {ReviewsApi} from './api/ReviewsApi';
import {UsersApi} from './api/UsersApi';

/**
* An_API_for_writing_reviews_about_your_favourite___or_worst__farm_stalls__Picture_of_produce_httpsfarmstall_ponelat_comimgproduce_banner_jpg____AuthTo_create_Reviews_without_being__anonymous___You_need_to_add_a_MyUserToken_to_the_Authorization_header_To_get_a_MyUserToken1__Create_a_User_with__POST_users_Userspost_users1__Get_a_MyUserToken_by_calling__POST_tokens_Userspost_tokens_with_your_User_credentials__ReviewsReviews_are_the_heart_of_this_API__brRegistered_Users_and_anonymous_users_can_both_write_reviews_based_on_their_experience_at_farm_stalls__brEach_review_comes_with_a_rating_of_between_one_and_five_stars_inclusive___One_star_being_the_worst_experience__Five_stars_being_the_best_Example_Reviews__A_wonderful_time_mdash_Bob_McNally___br___5_stars_httpsfarmstall_ponelat_comimgrating_5_png__An_awful_place_mdash__Anonymous____br___1_star_httpsfarmstall_ponelat_comimgrating_1_png__A_totally_average_place__mdash_Jane_Fair___br___3_stars_httpsfarmstall_ponelat_comimgrating_3_png.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var FarmStallApi = require('index'); // See note below*.
* var xxxSvc = new FarmStallApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new FarmStallApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new FarmStallApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new FarmStallApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version ch08-end
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200,

    /**
     * The InlineResponse2001 model constructor.
     * @property {module:model/InlineResponse2001}
     */
    InlineResponse2001,

    /**
     * The InlineResponse201 model constructor.
     * @property {module:model/InlineResponse201}
     */
    InlineResponse201,

    /**
     * The InlineResponse2011 model constructor.
     * @property {module:model/InlineResponse2011}
     */
    InlineResponse2011,

    /**
     * The InlineResponse2012 model constructor.
     * @property {module:model/InlineResponse2012}
     */
    InlineResponse2012,

    /**
     * The ReviewsBody model constructor.
     * @property {module:model/ReviewsBody}
     */
    ReviewsBody,

    /**
     * The TokensBody model constructor.
     * @property {module:model/TokensBody}
     */
    TokensBody,

    /**
     * The UsersBody model constructor.
     * @property {module:model/UsersBody}
     */
    UsersBody,

    /**
    * The ReviewsApi service constructor.
    * @property {module:api/ReviewsApi}
    */
    ReviewsApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};