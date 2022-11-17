POST /signup 
accepts: name, email , password , mobile, country,gender 

POST /login
   accepts: username password
   returns id, name of user


POST /logout 
  accepts:token
  returns:success

GET /profile
  returns name, email , password , mobile, country,gender 

GET /profile/:userid/feed

POST /profile/userid/feed
//extra