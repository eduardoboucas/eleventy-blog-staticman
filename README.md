# eleventy-blog-staticman

A starter repository showing how to build a blog with the [Eleventy](https://github.com/11ty/eleventy) static site generator with a commenting system powered by [Staticman](https://staticman.net).

[![Deploy with Netlify button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/eduardoboucas/eleventy-blog-staticman)

## Getting Started

This example uses [Netlify Functions](https://www.netlify.com/products/functions/) to run Staticman, so while it's possible to run it on any deployment provider, the easiest way to get up and running is to [deploy with Netlify](https://app.netlify.com/start/deploy?repository=https://github.com/eduardoboucas/eleventy-blog-staticman).

You'll be asked for some parameters during setup:

- **GitHub access token**: A GitHub Personal Access Token used by Staticman to push new comments to your repository on your behalf. See [this guide](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/creating-a-personal-access-token) on how to create one.

- **Repository name**: The name of your GitHub repository, including your username or organization (e.g. `eduardoboucas/eleventy-blog-staticman`).

- **reCAPTCHA site key** and **reCAPTCHA site secret**: If you want to use [reCAPTCHA](https://www.google.com/recaptcha/about/) to protect your form against spam attacks, you should insert your site key and secret, which you can obtain [here](https://www.google.com/recaptcha/admin). If you don't want to use reCAPTCHA, you can leave these blank.

## Local Development

### 1. Clone this Repository

```
git clone https://github.com/eduardoboucas/eleventy-blog-staticman.git my-blog-name
```


### 2. Navigate to the directory

```
cd my-blog-name
```

Specifically have a look at `.eleventy.js` to see if you want to configure any Eleventy options differently.

### 3. Install dependencies

```
npm install
```

### 4. Edit _data/metadata.json

### 5. Run Eleventy

```
npx eleventy
```

Or build and host locally for local development
```
npx eleventy --serve
```

Or build automatically when a template changes:
```
npx eleventy --watch
```

Or in debug mode:
```
DEBUG=* npx eleventy
```

### Implementation Notes

* `about/index.md` shows how to add a content page.
* `posts/` has the blog posts but really they can live in any directory. They need only the `post` tag to be added to this collection.
* Add the `nav` tag to add a template to the top level site navigation. For example, this is in use on `index.njk` and `about/index.md`.
* Content can be any template format (blog posts needn’t be markdown, for example). Configure your supported templates in `.eleventy.js` -> `templateFormats`.
	* Because `css` and `png` are listed in `templateFormats` but are not supported template types, any files with these extensions will be copied without modification to the output (while keeping the same directory structure).
* The blog post feed template is in `feed/feed.njk`. This is also a good example of using a global data files in that it uses `_data/metadata.json`.
* This example uses three layouts:
  * `_includes/layouts/base.njk`: the top level HTML structure
  * `_includes/layouts/home.njk`: the home page template (wrapped into `base.njk`)
  * `_includes/layouts/post.njk`: the blog post template (wrapped into `base.njk`)
* `_includes/postlist.njk` is a Nunjucks include and is a reusable component used to display a list of all the posts. `index.njk` has an example of how to use it.
