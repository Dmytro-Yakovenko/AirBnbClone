


![](https://res.cloudinary.com/dr1ekjmf4/image/upload/v1694183056/Screen_Shot_2023-09-08_at_7.23.13_AM_wn1ogv.png)



All endpoints that require a current user to be logged in.

Request: endpoints that require authentication
Error Response: Require authentication
Status Code: 401

Headers:

Content-Type: application/json
Body:

{
  "message": "Authentication required",
  "statusCode": 401
}
All endpoints that require proper authorization
All endpoints that require authentication and the current user does not have the correct role(s) or permission(s).

Request: endpoints that require proper authorization
Error Response: Require proper authorization
Status Code: 403

Headers:

Content-Type: application/json
Body:

{
  "message": "Forbidden",
  "statusCode": 403
}
## Get the Current User 
 Get current user

* Require Authentication: true
* Require proper authorization: Spot must belong to the current user
* Request
  * Method: GET
  * URL: /api/session/
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    user:{
      "id":"1",
      "first_name":"Dmytro",
      "last_name":"Yakovenko",
      "user_name":"dmytroy",
      "user_image_url":"https://res.cloudinary.com/dr1ekjmf4/image/upload/v1673016570/samples/people/kitchen-bar.jpg",
      "created_at":"2023-08-27",
      "updated_at_at":"2023-08-27"
  }
    ```

## Log in user

logs in a current user with valid credentinal and return current user with valid information
    
* Require Authentication: false

* Request
  * Method: POST
  * URL: /api/session/
  * 
  Body: 
    ```json
  {
    "email":"dmytro.aa.io",
    "password":"password"
  }
  ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    user:{
      "id":"1",
      "first_name":"Dmytro",
      "last_name":"Yakovenko",
      "user_name":"dmytroy",
      "user_image_url":"https://res.cloudinary.com/dr1ekjmf4/image/upload/v1673016570/samples/people/kitchen-bar.jpg",
      "created_at":"2023-08-27",
      "updated_at_at":"2023-08-27"
  }
    ```

## Sign up user

signs up  a current user with valid credentinal and return current user with valid information
    
* Require Authentication: false

* Request
  * Method: POST
  * URL: /api/auth/
  * 
  Body: 
    ```json
  { 
      "first_name":"Dmytro",
      "last_name":"Yakovenko",
      "user_name":"dmytroy",
      "user_image_url":"https://res.cloudinary.com/dr1ekjmf4/image/upload/v1673016570/samples/people/kitchen-bar.jpg",
    "email":"dmytro.aa.io",
    "password":"password"
  }
  ```

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    user:{
      "id":"1",
      "first_name":"Dmytro",
      "last_name":"Yakovenko",
      "user_name":"dmytroy",
      "user_image_url":"https://res.cloudinary.com/dr1ekjmf4/image/upload/v1673016570/samples/people/kitchen-bar.jpg",
      "created_at":"2023-08-27",
      "updated_at_at":"2023-08-27"
  }
    ```



    ## Log out user

Logs out  a current user with valid credentinal 
    
* Require Authentication: true

* Request
  * Method: GET
  * URL: /api/logout/
  * 
  Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:none
  *message:"logged out"




## Get  all  Spots

Gets all spots .

* Require Authentication: false

* Request
  * Method: GET
  * URL: /api/spots
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
   [
    {
      "title": "Townhouse",
      "description": "2 bedroom 2 bath",
      "address": "355 London Street",
      "city": "San Francisco",
       "state": "California",
      "country": "United States",
     "lat": "5.6416",
      "long": "0.8764",
      "price":"100",
      "owner_id":"1",
      "images":["https://res.cloudinary.com/dr1ekjmf4/image/upload/v1684203061/pokerEventImages/Dmytro_real_estate_ea3dcef7-6358-4488-bcb3-e47362ec3c44_h9o6sx.png"]
    }
   ] 
    ```



## Get   Spot by id

Gets spot by id.

* Require Authentication: false

* Request
  * Method: GET
  * URL: /api/spots/:id
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
   
    {
        "id":"1",
      "title": "Townhouse",
      "description": "2 bedroom 2 bath",
      "address": "355 London Street",
      "city": "San Francisco",
       "state": "California",
      "country": "United States",
     "lat": "5.6416",
      "long": "0.8764",
      "price":"100",
      "owner_id":"1",
      "spot_image_url":["https://res.cloudinary.com/dr1ekjmf4/image/upload/v1673016575/samples/landscapes/architecture-signs.jpg"]
      
    }
   
    ```
  * Error response: Couldn't find a Spot with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Spot couldn't be found",
      "statusCode": 404
    }
    ```




## Create  Spot 

Creates spot.

* Require Authentication: true

* Request
  * Method: POST
  * URL: /api/spots/
  * Body: 
    ```json
   
    {
        
      "title": "Townhouse",
      "description": "2 bedroom 2 bath",
      "address": "355 London Street",
      "city": "San Francisco",
       "state": "California",
      "country": "United States",
     "lat": "5.6416",
      "long": "0.8764",
      "price":"100",
      "owner_id":"1",
      
    }

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
   
    {
        "id":"1",
      "title": "Townhouse",
      "description": "2 bedroom 2 bath",
      "address": "355 London Street",
      "city": "San Francisco",
       "state": "California",
      "country": "United States",
     "lat": "5.6416",
      "long": "0.8764",
      "price":"100",
      "owner_id":"1",
      "created_at":"2023-08-29",
      "updated_at":"2023-08-29",
    }




## Edit  Spot 

Edit spot.

* Require Authentication: true

* Request
  * Method: PUT
  * URL: /api/spots/:id
  * Body: 
    ```json
   
    {
        "id":"1",
      "title": "Townhouse",
      "description": "2 bedroom 2 bath",
      "address": "355 London Street",
      "city": "San Francisco",
       "state": "California",
      "country": "United States",
     "lat": "5.6416",
      "long": "0.8764",
      "price":"100",
      "owner_id":"1",
      
    }

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
   
    {
        "id":"1",
      "title": "Townhouse",
      "description": "2 bedroom 2 bath",
      "address": "355 London Street",
      "city": "San Francisco",
       "state": "California",
      "country": "United States",
     "lat": "5.6416",
      "long": "0.8764",
      "price":"100",
      "owner_id":"1",
      "created_at":"2023-08-29",
      "updated_at":"2023-08-29",
    }
   








## Delete a Spot

Deletes an existing spot.

* Require Authentication: true
* Require proper authorization: Spot must belong to the current user
* Request
  * Method: DELETE
  * URL: api/spots/:id
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted",
      "statusCode": 200 
    }
    ```

* Error response: Couldn't find a Spot with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Spot couldn't be found",
      "statusCode": 404
    }
    ```




    ## GET all bookings
Gets all bookings.

* Require Authentication: true
* Require proper authorization: Booking must belong to the current user
* Request
  * Method: GET
  * URL: api/bookings
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
   [ {
      "user_id": "1",
      "spot_id":"1",
      "check_in":"08-31-2023",
      "check_in":"09-01-2023",
      "spot":    {
        "id":"1",
      "title": "Townhouse",
      "description": "2 bedroom 2 bath",
      "address": "355 London Street",
      "city": "San Francisco",
       "state": "California",
      "country": "United States",
     "lat": "5.6416",
      "long": "0.8764",
      "price":"100",
      "owner_id":"1",
      "created_at":"2023-08-29",
      "updated_at":"2023-08-29",
    }
    }
    ]
    ```


    ## Get   booking by id

Gets booking by id.

* Require Authentication: false

* Request
  * Method: GET
  * URL: /api/bookings/:id
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
   {
      "user_id": "1",
      "spot_id":"1",
      "check_in":"08-31-2023",
      "check_in":"09-01-2023",
      "spot":    {
        "id":"1",
      "title": "Townhouse",
      "description": "2 bedroom 2 bath",
      "address": "355 London Street",
      "city": "San Francisco",
       "state": "California",
      "country": "United States",
     "lat": "5.6416",
      "long": "0.8764",
      "price":"100",
      "owner_id":"1",
      "created_at":"2023-08-29",
      "updated_at":"2023-08-29",
    }
    }
 
   
    ```
  * Error response: Couldn't find a booking with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Booking couldn't be found",
      "statusCode": 404
    }
    ```



    ## Create  Booking 

Creates booking.

* Require Authentication: true

* Request
  * Method: POST
  * URL: /api/bookings/
  * Body: 
    ```json
   
    {
        "user_id":1, 
        "spot_id":1,
        "check_in":"08-29-2023", 
        "spot_id":"08-30-2023",
    }

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
   
    {
        "id":"1",
       {
        "user_id":1, 
        "spot_id":1,
        "check_in":"08-29-2023", 
        "spot_id":"08-30-2023",
        "created_at":"2023-08-29",
         "updated_at":"2023-08-29",
    }
    }


      ## Update  Booking 

Updates booking.

* Require Authentication: true

* Request
  * Method: PUT
  * URL: /api/bookings/:booking_id
  * Body: 
    ```json
   
    {
        "user_id":1, 
        "spot_id":1,
        "check_in":"08-29-2023", 
        "check_out":"08-30-2023",
    }

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
   
    {
         "user_id":1, 
        "spot_id":1,
        "check_in":"08-29-2023", 
        "spot_id":"08-30-2023", 
        "created_at":"2023-08-29",
         "updated_at":"2023-08-29",
    
    }


    ## Delete a Booking

Deletes an existing spot.

* Require Authentication: true
* Require proper authorization: Spot must belong to the current user
* Request
  * Method: DELETE
  * URL: api/bookings/:id
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted",
      "statusCode": 200 
    }
    ```

* Error response: Couldn't find a Booking with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Booking couldn't be found",
      "statusCode": 404
    }
    ```








 


    ## Get   review by id

Gets review by id.

* Require Authentication: false

* Request
  * Method: GET
  * URL: /api/reviews/:id
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
   {
      "user_id": "1",
      "spot_id":"1",
      "review":"Good spot",
      "rating":"5",
      "created_at":"2023-08-29",
      "updated_at":"2023-08-29",
    }
 
   
    ```
  * Error response: Couldn't find a review with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Review couldn't be found",
      "statusCode": 404
    }
    ```



    ## Create  Review

Creates booking.

* Require Authentication: true

* Request
  * Method: POST
  * URL: /api/reviewss/
  * Body: 
    ```json
   
    {
        "user_id":1, 
        "spot_id":1,
        "review":"Good spot", 
        "rating":"5",
    }

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
   
    {
        "id":"1",
        "user_id":1, 
        "spot_id":1,
        "review":"Good spot", 
        "rating":"5",
        "created_at":"2023-08-29",
         "updated_at":"2023-08-29",
    
    }



Updates Review.

* Require Authentication: true

* Request
  * Method: PUT
  * URL: /api/reviwes/:review_id
  * Body: 
    ```json
   
    {
        "user_id":1, 
        "spot_id":1,

        "review":"Great spot", 
        "rating":"5",
    }

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
   
    {
        "review_id":"1",
         "user_id":1, 
        "spot_id":1,
        "review":"Great spot", 
        "rating":"5", 
        "created_at":"2023-08-29",
         "updated_at":"2023-08-29",
    
    }



## Delete a review

Deletes an existing review.

* Require Authentication: true
* Require proper authorization: Spot must belong to the current user
* Request
  * Method: DELETE
  * URL: api/reviews/:id
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Successfully deleted",
      "statusCode": 200 
    }
    ```

* Error response: Couldn't find a review with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Review couldn't be found",
      "statusCode": 404
    }
    ```
