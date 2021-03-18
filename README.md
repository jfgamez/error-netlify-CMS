# Site emulate error

================

# Gatsby + Netlify CMS Starter

This repo contains an website that is built with [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org):

## Prerequisites

-   Node (I recommend using v12.0.0 or higher)
-   [Gatsby CLI](https://www.gatsbyjs.org/docs/)
-   [Netlify CLI](https://github.com/netlify/cli)

### Access Locally

$ git clone repository
$ yarn install
$ yarn start

Running the site with a local cms

$ yarn && yarn develop:local-cms

## Styling

This site uses CSS Modules and SASS (scss).

-   **CSS Modules** allows us to have a independent file of styles for each component, without worries about class names collision. This is because the compiler creates a dynamic unique name for each declaration. Also it makes easy the code cleaning and deprecation as when you want to delete a component, you just need to delete the styles file that is only associated whit it. Gatsby supports this out of the box.
-   **SASS** brings to us the power of variables, mixins and functions to make our styles smarter ([Official website](https://sass-lang.com/)). For this we will use [Gatsby-plugin-sass](https://www.gatsbyjs.org/packages/gatsby-plugin-sass/?=gatsby-plugin-sass).

### Get started

1. Create a file at the same level of your component with this convention `componentName.module.scss`. Use the same name of the component to keep it organized.
2. Import the variables and mixins if you need them.


3. Then write your styling using [SCSS syntax](https://sass-lang.com/documentation/syntax).

### Debugging

-   When you are in develop mode go to the browser and inspect any html element.
-   There you will find a css class like `jobs-module--jobsPage--2rOYt` where `jobs` means the name of the scss file and `jobsPage` the name of the rule.

### Commit Lint

-   Following this standard https://github.com/conventional-changelog/commitlint
-   Use sentence case.
-   Finish using (dot). No spacing
-   Include the ticket at the end of the commit.
-   Don’t use spacing at the end of the dots.
-   Commit Lint will add a lint check
-   Example: feat: Adding commit lint, ZSITE-0.
