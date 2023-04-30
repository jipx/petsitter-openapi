# FarmStallApi.UsersApi

All URIs are relative to *https://virtserver.swaggerhub.com/designing-apis/part-one/ch08-end*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tokensPost**](UsersApi.md#tokensPost) | **POST** /tokens | 
[**usersPost**](UsersApi.md#usersPost) | **POST** /users | 

<a name="tokensPost"></a>
# **tokensPost**
> InlineResponse2012 tokensPost(opts)



Create a new token

### Example
```javascript
import {FarmStallApi} from 'farm_stall_api';

let apiInstance = new FarmStallApi.UsersApi();
let opts = { 
  'body': new FarmStallApi.TokensBody() // TokensBody | 
};
apiInstance.tokensPost(opts, (error, data, response) => {
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
 **body** | [**TokensBody**](TokensBody.md)|  | [optional] 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersPost"></a>
# **usersPost**
> InlineResponse2011 usersPost(opts)



Create a new user

### Example
```javascript
import {FarmStallApi} from 'farm_stall_api';

let apiInstance = new FarmStallApi.UsersApi();
let opts = { 
  'body': new FarmStallApi.UsersBody() // UsersBody | User details
};
apiInstance.usersPost(opts, (error, data, response) => {
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
 **body** | [**UsersBody**](UsersBody.md)| User details | [optional] 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

