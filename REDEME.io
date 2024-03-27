BACKEDND :-

foodwalla APP => 
npm i 
npm start

API Call Through PostMan

create restaurant : 
      method : post 
      url  :  localhost:5000/api/v1/restaurants/create
      body : {
            "name": "foodwalla",
            "address": "Amravati MH , 48",
            "location": {
              "latitude":22.7195687,
              "longitude": 75.8577258
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

        
