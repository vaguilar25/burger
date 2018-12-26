# Eat-Da-Burger!

Is a restaurant app that lets users input the names of burgers they'd like to eat. Whenever a user submits a burger's name, your app will display the burger on the left side of the page -- waiting to be devoured.
Each burger in the waiting area also has a Devour it! button. When the user clicks it, the burger will move to the right side of the page.
The app will store every burger in a database, whether devoured or not.
## Topics that we have covered

* Use of Git: Creating a repository
```
    * clone 
    * add 
    * commit 
    * push
```

* Deploy to Heroky
```
    * git remote –v  
    * heroku create
    * git commit -am "<message>"
    * git push heroku master 
```

* Use of NodeJs, Express, JavaScript, Jquery,orm
```
    .
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars

``` 

* NPM Used
```

        npm install express
        npm install express-handlebars
        npm install body-parser
        npm install mysql
        
``` 


* Demo Server:

  https://friendfinder25vi.herokuapp.com/

## Built With

* [Visual Studio Code](https://code.visualstudio.com/) - The editor used
* [GitHub](https://github.com/) - Version Control
* [Heroku](https://heroku.com) - Deployment

## Versioning

I use [GitHub](https://github.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/vaguilar25/burger). 

## Authors

* **Vivian Aguilar** 

## Acknowledgments

* Jerome Chenette
* Sasha Pastel
* Jimmy Tu
