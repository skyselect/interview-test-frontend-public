# SkySelect Frontend Assessment

Hello! We've prepared a small task so that you can demonstrate your CSS and JS knowledge.

You have several files in the [src/](src/) directory: `index.html`, `style.scss` and `script.js`. 
Everything inside [src/](src/) is yours and you can modify the files any way you want.

You can use 3rd party libraries if needed, but you **are not allowed** to use any 
full-fledged JS frameworks like React, Vue or Angular. 

You have one hour to complete this task. Within this hour, please try to implement as much as possible, 
but it's fine if you don't finish all the tasks below.

Don't hesitate to use Google - like you do in your normal daily work environment.

---

### How to run the project

In project root folder, install dependencies using `npm install` and run the project using `npm run start`. 
Now start editing the files and you should be good to go!

The site will be accessible at [http://localhost:3000](http://localhost:3000)

--- 

#### 1. Create a card element

Your first task is to create a card element. The design is provided in [src/design.png](src/design.png) 
and mock data for the card is available in `script.js`. 

You need to make sure the result looks nice and all elements are positioned according to design.
  

#### 2. Feed the card with real data from the API

By now, you have a nice-looking card element, but it only shows hardcoded mock data.
Please connect the element to an API endpoint to get real data and make it dynamic.

API endpoint URL: [http://localhost:18181/api/v1/card-data](http://localhost:18181/api/v1/card-data)

Response schema:

```json
{
    "card_number": String,
    "card_company": String,
    "due_in": Number,
    "created_at": String,
    "card_status": String
}
```


#### 3. Dynamic status updates

It appears that cards are updated frequently, and their status changes approximately every 5 seconds. 
A card can have 3 different statuses: `low`, `medium`, `high`.


We have a separate API endpoint that contains the latest status for the cards.
 Please use it to update your card correspondingly.
  
Also please change the background color of the *Priority* field according status: 
*high* priority should be marked in *red* and *medium* priority in *yellow*.


URL: [http://localhost:18181/api/v1/card-status](http://localhost:18181/api/v1/card-status)

Response schema:

```json
{
  "card_status": String
}
``` 
