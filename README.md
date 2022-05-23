# Logistics-inventory-CRUD

<h4>Logistics Inventory Tracker is a simple-to-use web application to keep track on different items stored in a database.</h4>

<h1>Create an item</h1>

To create an item simply click on 'Create item' location on top in the navigation bar. Then fill out the form to create an item. Make sure all fields are written with the exception of 'Description.' Make sure to respect the requirements or else the item will not be created successfully.

<ul><b>Requirements/Info:</b>
  <br>
  <li>Names must be atleast 3 characters. They can hold letters, numbers, and special characters</li>
  <li>Names are required</li>
  <li>Descriptions are optional</li>
  <li>Quantity must be atleast '1'</li>
  <li>Weight is expressed in kilos and must be atleast 0.01 kg</li>
  <li>Quantity and Weight must be a number</li>
  </ul>

<h1>Edit an item</h1>

If you wish to edit an item, click on the edit item link associated with the item. Upon doing this, you will be redirected to the edit item page, which is similar to
the create item page. The requirements are the same for the edit page.


<h1>Delete an item</h1>

Deleting an item is easier than editing. All there is to do is to click on the delete button associated with the item.

<h2>Where are the items stored?</h2>

Using the API server with NodeJS, we can send request to mongoose Atlas database. Mongoose is a very straightforward and user-friendly database-type dependency. Using Mongoose, one can send many different type of files. For this project, the Schema object is used to store the items. Schemas are very similar to JSON objects and Mongoose provides many different methods in Schemas, such as: find() (returns all instances of the Schema object present in the database), findById() (returns Schema object by id), findOne (find the first instance of a Schema object given object's parameters), and so on. Requests to the Mongoose database use a custom 'API Key,' which is provided by them and stored in the host's environment variables.

<h2>API Key</h2>
If you wish to use your own Mongoose API Key, it is recommanded to change it in the .env_sample file. Once this is done, make sure to rename the file to .env.

