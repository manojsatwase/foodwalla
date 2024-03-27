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
          "name": "food walli",
          "business_email": " bhainsdehi@gmail.com",
          "logo": {
            "public_id": "abc123",
            "url": "logo url"
          },
          "address": "Bhainsdehi, Madhya Pradesh ",
          "pincode": 460220,
          "distance": 500, // Distance in meters (example: 500 meters)
          "location": {
                "latitude":21.643702,
                "longitude":21.643702
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



REQUEST :
method:post
url:localhost:5000/api/v1/saveuserapi
Body:
{
    "name": "manoj satwase",
    "age": "28",
    "gender": "male",
    "location": {
        "latitude":22.7195687,
        "longitude":75.8577258
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
