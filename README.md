**What is angular elements?**

Angular elements are Angular components packaged as custom elements (also called Web Components), a web standard for defining new HTML elements in a framework-agnostic way. Read more [here](https://angular.io/guide/elements#browser-support-for-custom-elements)


**How to run?**

Go to `angular-elements` directory run `npm run build:elements` this will create an elements folder with all the required fields. Create an `index.html` file and add `styles.css` and `scripts.js` in the file. And use the element tag in body. Here `<fy-charts></fy-charts>`.

Since we can pass custom data to `fy-charts` component i.e `chartType` and `chartLegend` which is used to show a specific type of graph and whether to show legend or not respectively.

We can do this by using this line of html `<fy-charts chart-legend="true" chart-type="doughnut"></fy-charts>`

Now run the `elements/index.html` file on any browser.
