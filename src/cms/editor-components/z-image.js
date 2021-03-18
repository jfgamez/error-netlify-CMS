/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const zImage = {
    id: 'z-image',
    label: 'Z-Image',
    fields: [
        {
            name: 'image',
            label: 'Image',
            widget: 'image',
        },
        {
            name: 'altText',
            label: 'Alt Text',
            widget: 'string',
        },
        {
            name: 'title',
            label: 'Title',
            widget: 'string',
        },
        {
            name: 'caption',
            label: 'Caption',
            widget: 'string',
        },
    ],
    pattern: /^<z-image src="(.*?)" title="(.*?)" alt="(.*?)" caption="(.*?)"><\/z-image>$/,
    fromBlock: match => {
        return {
            image: match[1],
            title: match[2],
            altText: match[3],
            caption: match[4],
        };
    },
    toBlock: obj => {
        const isGif = obj.image && obj.image.match(/\.gif$/);

        if (isGif) {
            return `![${obj.altText || ''}](${obj.image || ''}${obj.title ||
                ''})`;
        }

        return `<z-image src="${obj.image || ''}" title="${obj.title ||
            ''}" alt="${obj.altText || ''}" caption="${obj.caption ||
            ''}"></z-image>`;
    },
    toPreview: ({ altText, image, title, caption }, getAsset, fields) => {
        const imageField =
            fields && fields.find(f => f.get('widget') === 'image');
        const src = getAsset(image, imageField);
        return (
            <figure>
                <img src={src || ''} alt={altText || ''} title={title || ''} />
                <figcaption>{caption || ''}</figcaption>
            </figure>
        );
    },
};

export default zImage;
