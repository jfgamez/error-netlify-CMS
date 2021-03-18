const path = require('path');
const pxtorem = require('postcss-pxtorem');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const netlifyCmsConfig = {
    resolve: 'gatsby-plugin-netlify-cms',
    options: {
        manualInit: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
        customizeWebpackConfig: (config, { plugins }) => {
            config.plugins.push(
                plugins.define({
                    'process.env.GATSBY_CMS_DEPLOYMENT_ENV': JSON.stringify(
                        process.env.GATSBY_CMS_DEPLOYMENT_ENV
                    ),
                    'process.env.GATSBY_CMS_DEPLOYMENT_BRANCH': JSON.stringify(
                        process.env.GATSBY_CMS_DEPLOYMENT_BRANCH
                    ),
                    'process.env.NETLIFY_APP_ID': JSON.stringify(
                        process.env.NETLIFY_APP_ID
                    ),
                })
            );
        },
    },
};

const myCustomBreakPoints = {};

module.exports = {
    pathPrefix: process.env.PATH_PREFIX || '/',
    assetPrefix: process.env.ASSETS_PREFIX,
    plugins: [
        {
            resolve: `gatsby-plugin-recaptcha`,
            options: {
                async: false,
                defer: false,
                args: `?render=${process.env.GATSBY_GOOGLE_SITE_KEY}`,
            },
        },
        'gatsby-plugin-react-helmet',
        process.env.GATSBY_CMS_DEPLOYMENT_ENV !== 'production'
            ? netlifyCmsConfig
            : 'babel-plugin-jsx-remove-data-test-id',
        {
            resolve: 'gatsby-plugin-alias-imports',
            options: {
                alias: {
                    '@assets': 'src/assets',
                    '@cms': 'src/cms',
                    '@images': 'src/images',
                },
                extensions: ['js', 'jsx', 'scss'],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/static/uploads`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: `${__dirname}/src/pages`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'cms',
                path: `${__dirname}/src/cms/data`,
            },
        },
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-plugin-sharp',
            options: {
                defaultQuality: 80,
            },
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1600,
                        },
                    },
                    'gatsby-remark-z-image',
                    'gatsby-remark-copy-linked-files',
                ],
            },
        },

        {
            resolve: 'gatsby-plugin-sass',
            options: {
                data: '@import "utils/_index.scss";',
                includePaths: [path.resolve(__dirname, './src/assets/scss')],
                postCssPlugins: [
                    pxtorem({
                        propList: ['*'],
                        selectorBlackList: [/^html$/],
                    }),
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-minify-classnames',
            options: {
                dictionary:
                    'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ0123456789',
                enableOnDevelopment: false,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: path.resolve(__dirname, 'src/components/Icons'),
                },
            },
        },
        'gatsby-plugin-eslint',
        {
            resolve: 'gatsby-plugin-breakpoints',
            options: {
                queries: myCustomBreakPoints,
            },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: path.resolve(__dirname, 'src/components/Icons'),
                },
            },
        },
        {
            resolve: 'gatsby-plugin-hubspot',
            options: {
                trackingCode: process.env.HUBSPOT_TRACKING_ID || '',
                productionOnly:
                    process.env.GATSBY_CMS_DEPLOYMENT_BRANCH === 'master',
            },
        },
        {
            resolve: `gatsby-plugin-linkedin-insight`,
            options: {
                partnerId: process.env.LINKEDIN_TRACKING_ID || '',
                includeInDevelopment:
                    process.env.GATSBY_CMS_DEPLOYMENT_BRANCH === 'master',
            },
        },
        {
            resolve: `gatsby-plugin-facebook-analytics`,
            options: {
                appId: process.env.FACEBOOK_TRACKING_ID || '',
                version: `v3.3`,
                xfbml: true,
                cookie: false,
                includeInDevelopment:
                    process.env.GATSBY_CMS_DEPLOYMENT_BRANCH === 'master',
                debug: false,
                language: `en_US`,
            },
        },
        {
            resolve: `gatsby-plugin-twitter-pixel`,
            options: {
                pixelId: process.env.TWITTER_TRACKING_ID || '',
            },
        },
        {
            resolve: 'gatsby-plugin-google-tagmanager',
            options: {
                id: process.env.GOOGLE_TAG_MANAGER_ID,
                includeInDevelopment: false,
            },
        },
    ].filter(x => x),
};
