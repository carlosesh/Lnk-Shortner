
# [Link Shortener](https://less-lnk.herokuapp.com/) :computer:

This application will let you create a short url for your links, which you will be able to share with anyone you want, also, it will keep the track of the visits and the last time visited.

# Features

* Login -> Email and password validation
* Add links  -> Validation for links through a defined schema which will always make sure that your link is a valid one
	* Once the link is created it will provide you with a short version of the link such as -> https://less-lnk.herokuapp.com/jX9fichmv (this works! -> it will redirect you to [https://stackedit.io/](https://stackedit.io/))
	* Track visits
	* Copy functionality
	* Hide/Unhide links
* View hidden links

Available here! -> https://less-lnk.herokuapp.com/

Follow the next steps in order tu run the app locally:

1. https://www.meteor.com/install -> Install meteor
2. Open your directory where you have this app unziped
3. Run the following command from your terminal:
	* npm ci
	* meteor run
4. App should be launched and it will be listening on localhost:3000
