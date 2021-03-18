/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

const zIframe = {
    id: 'z-iframe',
    label: 'Z-Iframe',
    fields: [
        {
            name: 'iframe',
            label: 'Iframe Code',
            widget: 'text',
        },
        {
            name: 'caption',
            label: 'Caption',
            widget: 'string',
        },
    ],
    pattern: /^<z-iframe caption="(.*?)">(.*?)<\/z-iframe>$/,
    fromBlock: match => {
        return {
            caption: match[1],
            iframe: match[2],
        };
    },
    toBlock: ({ iframe, caption }) => {
        return `<z-iframe caption="${caption || ''}">${iframe ||
            ''}</z-iframe>`;
    },
    toPreview: ({ iframe, caption }) => {
        return (
            <figure>
                <div
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                        __html: iframe || '',
                    }}
                />
                <figcaption>{caption || ''}</figcaption>
            </figure>
        );
    },
};

export default zIframe;
