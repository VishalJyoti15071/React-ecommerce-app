In this project, let's build a **React eCommerce app** app by applying the concepts we have learned till now.

<br/>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- When the **Home** link in the header is clicked, then the page should navigate back to the `Home`
- When the **Products** link in the header is clicked, then the page should navigate to the `Products`
- When the **ProductDetails** link in the header is clicked, then the page should navigate to the `ProductDetails`
- When the **Cart** link in the header is clicked, then the page should navigate to the `Cart`
- When an undefined path is provided in the URL, then the page should navigate to the `NotFoundRoute`

</details>

### Important Note

<details>
<summary>Click to view</summary>

<br/>

**The following instructions are required for the tests to pass**

- `Home` should consist of "/" in the URL path
- `Products` should consist of "/products" in the URL path
- `ProductDetails` should consist of "/products/id" in the URL path
- No need to use the `BrowserRouter` in `App.js` as we have already included in `index.js` file

</details>

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
