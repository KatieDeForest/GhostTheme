# KatieDeForest Ghost theme

A unique tag-based [Ghost](https://github.com/TryGhost/Ghost) theme to arrange your publications into collections. Keep organized and let your readers explore your publications with beautifully designed tag columns.

**Demo: https://ghost.theflyingbirds.net**

# Instructions

1. [Download this theme](https://github.com/KatieDeForest/GhostTheme/archive/main.zip)
2. Log into Ghost, and go to the `Design` settings area to upload the zip file

# Development

Styles are compiled using Gulp/PostCSS to polyfill future CSS spec. You'll need [Node](https://nodejs.org/), [Yarn](https://yarnpkg.com/) and [Gulp](https://gulpjs.com) installed globally. After that, from the theme's root directory:

```bash
# Install
yarn

# Run build & watch for changes
yarn dev
```

Now you can edit `/assets/css/` files, which will be compiled to `/assets/built/` automatically.

The `zip` Gulp task packages the theme files into `dist/dope.zip`, which you can then upload to your site.

```bash
yarn zip
```
