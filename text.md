# Coding Challenge – Frontend Engineer @ CDON.COM

## The Challenge

This is supposed to be a quick coding challenge. Don’t view this as a test, per se, but more as a way for us to _get a feel for you as a developer, your development process and some insights into you as a creative problem solver_. 

The challenge is to build a responsive image gallery. 
The design should be based on the UX mockups https://xd.adobe.com/view/148f8db3-f150-4c2b-b041-d0a9812af6c0-41dc/specs/ (Assets for the logo and icons is found on the code symbol </> as are the colours and mesurments). 
Use your best judgement to decide how the desktop view should look like. In the gallery, you should fetch GIFs from Giphy and present them in a gallery. 
We’d like you to use HTML, CSS (SASS) and vanilla Javascript (ES6) to read from Giphy’s API and to present the images.

**Note:** Keep it simple. The challenge is not about how to set up and configure a web application. Simple and elegant solutions are prefered.

We highly recommend you to use  [CodePen](https://codepen.io/), [CodeSandbox](https://codesandbox.io/) or similar. 

**You can find the Giphy API here:** https://developers.giphy.com/docs/sdk

## The Design

**View 1: Loading state**
•	This is shown while the gallery is being populated with images and when new images are fetched as the user scrolls. 

**View 2: Gallery** 
•	Refresh-icon, which should reload the gallery and fetch new, randomized images when clicked. 

•	The images should be shown in their original proportions. 

•	Scrolling to the bottom should fetch new images and show them (infinite scroll).  

•	Clicking / tapping an image should open View 3.

**View 3: Image**
•	This view should show a larger version of the clicked / tapped image, while retaining the image’s proportions. 
It should also show the previous and next image from the gallery and clicking / tapping these should open the corresponding image. 
•	The close button should return the user to View 2. 


Please return the solution to us by sending us a link to a cloud service of your choice (i.e. codepen, code sandbox, google drive, github or similar). 
Best of luck!
