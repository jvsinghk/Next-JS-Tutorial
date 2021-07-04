# Pre-rendering

*React vs Next Js*
By defaUlt, Next Js pre-renders every page in the application

*What does pre-render mean?*
Next Js generates HTML for each page in advance instead of having it all done by client-side JavaScript

**No Pre-rendering (Plain React.js app)**

*Initial Load*
App is not rendered -> JS Loads -> *Hydration* - React components are initialized and App becomes interactive

** Pre-rendering (Using Next.js) **

*Initial Load*
Pre-rendered HTML is displayed -> JS Loads -> *Hydration* React components initialized and App becomes interactive

- If your app has interactive components like <Link />, they'll be active after JS loads

- Pre-render just means render in advance of sending it to the browser

- Pre-rendering is done by default in a Next JS app