# Rick and Morty Search Filter 🤖

I knew this API would come in handy! I took this project as an opportunity to practice making API requests using Axios. Working with this API was a lot of fun, which ultimately motivated me to keep working.

I also learned how to create glass morphism effects on desktop and mobile, which had been on my to do list for a while. Rick and Morty plus glass morphism, who would have thought!

**Desktop View**  

![Rick and Morty Search Filter (Desktop View)](/readme/rick-and-morty-01.png)  

**Mobile View**  

<p align="center">
<img src="/readme/rick-and-morty-03.png" alt="Rick and Morty Filter (Mobile View)" width="444" height="auto">
</p>  

# Tech Stack

* HTML, CSS, JavaScript, JSX
* [Rick and Morty API](https://rickandmortyapi.com/)
* Axios
* ReactJS
* Nginx

# How to Navigate this App

The heart of this project is located in the ```src``` file. There you'll find a folder called ```components``` containing information for the search and topbars, as well as our ```App.js```, ```app.css```, and ```index.js``` files.

The ```public``` folder contains our site images, as well as our ```index.html``` file.

In the root lies all of our necessary config files.

# Challenges

I learned a lot about live search while completing this project. It forced me to really think about how to design the UI, in order for the search bar's behavior to feel intuitive.

I ran into some issues programming the open and close functionality for the search results. Ultimately, I decided to have the results open and close on input click, or by pressing the return key. I also installed a helpful package called ```react-click-outside-hook``` which closes the results when a user clicks outside of the input field.

# Room for Improvement

By default, this API paginates responses. Axios is capable of making concurrent HTTP requests using the method ```axios.all()```. Implementing this method would add greater variety to the pool of responses, currently capped at 20. 

It would also be nice if search results linked to a page for each individual's character data.

# Live Demo

[View the demo here.](https://dev.chiarawilden.com/rick-and-morty/)
