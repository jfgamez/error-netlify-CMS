/* eslint-disable react/jsx-filename-extension */

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
const React = require('react');

const HtmlAttributes = {
    lang: 'en',
};

const HeadComponents = [
    <link
        key="preconnect-fonts"
        rel="preconnect"
        href="https://fonts.gstatic.com"
    />,
    <link
        key="preload-fonts "
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
        rel="preload stylesheet"
        as="font"
    />,
];

const BodyAttributes = {};

exports.onRenderBody = ({
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes,
}) => {
    setHtmlAttributes(HtmlAttributes);
    setHeadComponents(HeadComponents);
    setBodyAttributes(BodyAttributes);
};
