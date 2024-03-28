Reactjs Assignment
Requirements
Create a react js application ( Any version ) which have following functionality :
- Create a form which ask for name, age, gender and pick user’s browser location and
able to submit the form
- On submitting the form, call the <saveuserapi> mentioned in the next section.
- If the response is OK, show the following message : “Thank you for visiting restaurant”
Design the below solution in Node Js that allows following :
1. Create a restaurant collection and add a dummy restaurant with following data :
- Restaurant name, Restaurant address, Restaurant location
2. Based on the data received from the user from the angular form, If the user location is within 500m from restaurant location. Save that the user has visited the restaurant and send a success response.
How to complete this challenge :
1. Complete the design and code as defined to the best of your abilities
2. Place notes in your code to help with clarity where appropriate. Make it readable enough to present to the IQ interview team
3. Complete your work and send the results as zip file to us
What are we looking for? What does this prove?
1. Assumptions you make given limited requirements 2. Code quality and expertise
3. Identify areas of your strengths



# foodwalla

BACKEDND :-

foodwalla APP => 
npm i 
npm start

API Call Through PostMan

create restaurant : 
      method : post 
      url  :  localhost:5000/api/v1/restaurants/create
      body : {
              "name": "egg Wall",
              "business_email":"egg@gmail.com",
              "logo": {
                "public_id": "abc123",
                "url": "logo url"
              },
              "address": "egg amravati, maharashtra",
              "rating": 4,
              "price": 400,
               "description": "This is a Edge Wall restaurant . Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              "pincode": 444705,
              "distance": 500, // Distance in meters (example: 500 meters)
              "openAt": "08:00",
              "location": {
                    "latitude":23.291671374452143,
                    "longitude":77.59502748692049
                }
            }


Response :
{
    "success": true,
    "message": "Restaurant created successfully",
    "restaurant": {
        "name": "El Celler de Can Roca",
        "address": "Can Sunyer, 48",
        "location": {
            "type": "Point",
            "coordinates": [
                75.8577258,
                22.7195687
            ]
        },
        "_id": "660322d34063b93b20ab2743",
        "__v": 0
    }
}

------------------------------------------
GET ALL NEAREST RESTUARANTS

REQUEST : 
   method:post,
   url:localhost:5000/api/v1/nearest-restaurants 
   body:{
    "distance":500, // dynamic pass
    "location": {
        "longitude":21.643702,
        "latitude":21.643702
    }  
}

RESPONSE:
{
    "success": true,
    "restaurant": [
        {
            "_id": "6604d0de3016a7776888b6a1",
            "name": "Biryani Wall",
            "business_email": "biryaniwall@gmail.com",
            "logo": {
                "public_id": "abc123",
                "url": "logo url"
            },
            "description": "This is a Biryani Wall restaurant . Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "rating": 4.5,
            "price": 300,
            "address": "Bhainsdehi, Madhya Pradesh",
            "pincode": 444604,
            "openAt": "08:00",
            "location": {
                "type": "Point",
                "coordinates": [
                    21.643702,
                    21.643702
                ]
            },
            "__v": 0,
            "dist": {
                "calculated": 0
            }
        }
    ]
}

-------------------------------------------
User Visit Restuarant
REQUEST :
method:post
url:localhost:5000/api/v1/saveuserapi
Body:
{
    "name": "manoj satwase",
    "age": "28",
    "gender": "male",
     "distance":5000,
    "location": {
        "longitude":23.2402017,
        "latitude": 77.5390127
    }
}

get all restaurant
REQUEST :
method:get
url:localhost:5000/api/v1/restaurants 

RESPONSE :
{
    "success": true,
    "message": "All restaurants retrieved successfully",
    "restaurants": [
        {
            "location": {
                "type": "Point",
                "coordinates": [
                    75.8577258,
                    22.7195687
                ]
            },
            "_id": "6603b583e5582b7f1e566086",
            "name": "foodwalla",
            "address": "Amravati MH , 48",
            "__v": 0
        }
    ]
}

----------------------------------------------------------

FRONTEND :
cd frontend
frontend >
         npm i  
         npm run dev

        


Create API for Find Nearest Store

1. Search nearby store using Latitude and Lonitude.
2. Fetch all store according by nearest.



User Login and Registration

router.route("/register")
      .post(register);
router.route("/login")
      .post(login);
router.route("/logout")
      .get(logout)
router.route("/me")
      .get(isAuthenticated,myProfile)
      .post(isAuthenticated,updateProfile);
router.route("/update-password")
       .post(isAuthenticated,updatedPassword);
router.route("/admin/users")
       .get(isAuthenticated,restrictToAdmin,getAllUsers);

---------------------------------------------------------

Restaurant :-

router.route("/restaurants/create").post(createRestaurant);
router.route("/restaurants").get(getAllRestaurants);
router.route("/nearest-restaurants").post(findNearestRestaurant);


Save User Visit Restaurant
router.route("/saveuserapi").post(createUserVisitInfo);