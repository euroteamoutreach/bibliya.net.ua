# bibliya.net.ua

> [bibliya.net.ua][bibliya] is the official web site for the Ukrainian edition of [Bible First][biblefirst], a distance-learning course based on the book of Genesis.

![bibliya.net.ua screenshot][screenshot]

## Overview

This site is a universal [Vue.js][vue] application built with [Nuxt.js][nuxt], and is deployed as a pre-generated static site on [Amazon S3][aws-s3]. In addition to Vue and Nuxt, several noteworthy supporting technologies have been used, including the following:

* [Tailwind CSS][tailwind]
* [Purgecss][purgecss]
* [Vuelidate][vuelidate]
* [Font Awesome 5 (Vue component)][fa5]

## Requirements

* [Node >= 12.x][node]
* [Yarn 1.x][yarn]
* [Gulp 4.x][gulp]

## Setup

To get started, clone/fork the repo, cd into it, and install the dependencies.

``` bash
$ yarn install
```

## Development

Nuxt uses [Webpack as its build tool][nuxt-assets], and is also pre-configured for [hot module replacement][hmr]. To begin, start the development server on `localhost:3000`:

```bash
$ yarn dev
```

## Static Build

In addition to deploying server-rendered apps, Nuxt also works great as a [static site generator][static-gen]. That's how we're using it here. To pre-render the entire site as static HTML, CSS, and JavaScript files, run this command:

```bash
$ yarn generate
```

The generated site will be output to the `dist/` folder.

## Local HTTP Server

Sometimes in development it can be helpful to run the statically generated site with a local web server, simulating a production environment. I have found [http-server][] to be a great choice. Here's how I build and serve the static site on my local machine.

First, install http-server globally if you don't already have it.

```bash
$ npm install http-server -g
```

Next, build the site as explained in the previous section.

```bash
$ yarn generate
```

Finally, move into the `dist/` folder and start the server.

```bash
$ cd dist/
$ http-server -p 8080
```

Visit `http://localhost:8080` and check out the site!

## Environment-specific Builds

Nuxt allows you to [define environment variables][env-property] which can be accessed at compile time by calling `process.env.YOUR_VARIABLE`. This is particularly useful for generating builds with specifics that differ between, for example, production and staging environments.

To generate a production build, run:

```bash
$ APP_ENV=production yarn generate
```

This will, among other things, set the robots meta tag to `index,follow`. If `APP_ENV` is set to anything else, the robots tag will be set to `noindex,nofollow`.

## Deployment

Our preferred deployment solution for static sites is [Amazon S3][aws-s3]. It's super cheap, and provides lots of nice extras like a CDN with [CloudFront][aws-cloudfront] and a [free SSL certificate][aws-ssl]. The Nuxt docs provide a detailed guide to [deployment with S3 + Cloudfront][nuxt-s3-deploy].

Individual deploys are handled with the `bin/deploy` script, which calls the `gulp deploy` task provided by [gulp-awspublish][gulp-awspublish].  The `bin/deploy` script expects the environment to be passed as an argument.

```bash
# Deploy to development
$ bin/deploy dev

# Deploy to production
$ bin/deploy prod
```

For more information on deployment with Nuxt, [visit their FAQ page][nuxt-faq].

## Acknowledgments

This site was developed in tandem with [dobroizlo.com.ua][dobroizlo-src] and these two projects were my first using Vue.js and Nuxt.js. In learning these technologies, I consulted a variety of blog posts, online tutorials, and video courses — some paid, others free. By the far the most thorough and effective for me were two courses on Udemy by [Maximilian Schwarzmüller][max-s]:

* [Vue JS 2 - The Complete Guide (incl. Vue Router & Vuex)][vue-course]
* [Nuxt.js - Vue.js on Steroids][nuxt-course]

If you want to learn Vue/Nuxt, I highly recommend these courses. Max is a great instructor, very thorough and engaging. His lessons are informative and a real pleasure to listen to. Thank you Max!

## Legal

Bible First is a registered trademark of [Euro Team Outreach, Inc][eto].

&copy; 2018 Euro Team Outreach, Inc. Software is licensed under [MIT][license].

[aws-cli]: https://aws.amazon.com/cli/
[aws-cloudfront]: https://aws.amazon.com/cloudfront/
[aws-s3]: https://aws.amazon.com/getting-started/projects/host-static-website/
[aws-ssl]: https://aws.amazon.com/blogs/aws/new-aws-certificate-manager-deploy-ssltls-based-apps-on-aws/
[biblefirst]: https://getbiblefirst.com/
[bibliya]: https://bibliya.net.ua/
[dobroizlo-src]: https://github.com/euroteamoutreach/dobroizlo.com.ua
[env-property]: https://nuxtjs.org/api/configuration-env#the-env-property
[eto]: https://euroteamoutreach.org/
[fa5]: https://fontawesome.com/how-to-use/on-the-web/using-with/vuejs
[gulp-awspublish]: https://yarnpkg.com/en/package/gulp-awspublish
[gulp]: https://gulpjs.com/
[hmr]: https://webpack.js.org/concepts/hot-module-replacement/
[http-server]: https://www.npmjs.com/package/http-server
[license]: https://github.com/euroteamoutreach/bibliya.net.ua/blob/master/LICENSE
[max-s]: https://www.udemy.com/user/academind/
[node]: https://nodejs.org/en/
[nuxt-assets]: https://nuxtjs.org/guide/assets
[nuxt-course]: https://www.udemy.com/share/10012G/
[nuxt-faq]: https://nuxtjs.org/faq
[nuxt-s3-deploy]: https://nuxtjs.org/faq/deployment-aws-s3-cloudfront
[nuxt]: https://nuxtjs.org/
[purgecss]: https://www.purgecss.com/
[screenshot]: https://d2ppgd6w5akw3v.cloudfront.net/images/bibliya.net.ua-screenshot-2018-1200w.jpg
[standard]: https://standardjs.com/
[static-gen]: https://www.staticgen.com/nuxt
[tailwind]: https://tailwindcss.com/
[vue-course]: https://www.udemy.com/share/10005w/
[vue]: https://vuejs.org/
[vuelidate]: https://monterail.github.io/vuelidate/
[yarn]: https://yarnpkg.com/en/docs/install
