# Why pre-render?

1. Pre-rendering improves performance
   - In a React app, you need to wait for the JavaScript to be executed
   - Perhaps fetch data from an external API and then render the UI
   - There is wait time for the user
   - With a pre-rendered page, the HTML is already generated and loads faster

2. Pre-rendering helps SEO
   - If you're building a blog or an e-commerce site, SEO is a concern
   - With a React app, if the search engine hits your page, it only sees a div tag with a id equal to root
   - If a search engine hits a pre-rendered page though, all the content is present in the source code which help index that page
   - If SEO id of concern for your app, pre-rendering is what you want