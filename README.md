# PingSingleColumn
This is a FrontEnd Mentor project

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Specifically:

```
> npm create-react-app ping-project --template typescript
```

## Additional NPM installs:

This project requires the following two installs:

```
> npm install sass
> npm install react-icons
```

## General Architectural layout:

This project contains the following components:

	- src
		index.tsx //The primary react-app standard starting code and creates a flex-box to center the main UI
		App.tsx //Sets up, and contains the initial ParentLayout components 

		- Components
			ParentLayout //The <main> container which holds the HTML <header> <section> <figure> <footer> tags
				-	Within the <figure> tag, setting up the image also is contained in the ParentLayout styling
			TopTextInfo //The <header> element which styles the pages top text
			UserInput   //The <section> element which styles and evaluates the user's input data input fields.
			FooterInfo  //The <footer> element which styles the footer area and layouts the social icon links and copyright notice.

### Logic of the architecture

	Have the components which need to be worked through to iron out the layout isolated from the content.

	Then, have the components which display data isolated from issues with the overall layout of the primary page.

	Though this architecture and the number of components may seem overkill for this project, I want to start designing as if the project were larger.  Not certain this is the right concept at this point or not.

### Question/Concerns regarding the project.

	Still have some issues getting elements to center, left, or right justfy.

	Question:
		When using FlexBox and Grid but all the following properties do nothing to move an element's alighnment:
		* align-items
		* justify-items
		* align-content
		* justify-content
		* justify-self
		* align-self

	What is typically the issues you see developers are making when this is happening?

	Any input would be greaty appreciated as I run into this alot.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
