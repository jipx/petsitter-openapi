# FarmStallApi.ReviewsApi

All URIs are relative to *https://virtserver.swaggerhub.com/designing-apis/part-one/ch08-end*

Method | HTTP request | Description
------------- | ------------- | -------------
[**reviewsGet**](ReviewsApi.md#reviewsGet) | **GET** /reviews | 
[**reviewsPost**](ReviewsApi.md#reviewsPost) | **POST** /reviews | 
[**reviewsReviewIdGet**](ReviewsApi.md#reviewsReviewIdGet) | **GET** /reviews/{reviewId} | 

<a name="reviewsGet"></a>
# **reviewsGet**
> [InlineResponse200] reviewsGet(opts)



Get a list of reviews

### Example
```javascript
import {FarmStallApi} from 'farm_stall_api';

let apiInstance = new FarmStallApi.ReviewsApi();
let opts = { 
  'maxRating': 1.2 // Number | 
};
apiInstance.reviewsGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **maxRating** | **Number**|  | [optional] 

### Return type

[**[InlineResponse200]**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="reviewsPost"></a>
# **reviewsPost**
> InlineResponse201 reviewsPost(opts)



Create a new Review

### Example
```javascript
import {FarmStallApi} from 'farm_stall_api';
let defaultClient = FarmStallApi.ApiClient.instance;

// Configure API key authorization: MyUserToken
let MyUserToken = defaultClient.authentications['MyUserToken'];
MyUserToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//MyUserToken.apiKeyPrefix = 'Token';

let apiInstance = new FarmStallApi.ReviewsApi();
let opts = { 
  'body': new FarmStallApi.ReviewsBody() // ReviewsBody | 
};
apiInstance.reviewsPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ReviewsBody**](ReviewsBody.md)|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

[MyUserToken](../README.md#MyUserToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reviewsReviewIdGet"></a>
# **reviewsReviewIdGet**
> InlineResponse2001 reviewsReviewIdGet(reviewId)



Get a single review

### Example
```javascript
import {FarmStallApi} from 'farm_stall_api';

let apiInstance = new FarmStallApi.ReviewsApi();
let reviewId = "reviewId_example"; // String | 

apiInstance.reviewsReviewIdGet(reviewId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reviewId** | **String**|  | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

