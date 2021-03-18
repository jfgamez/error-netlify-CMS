const zQuote = {
    id: 'z-quote',
    label: 'Z-Quote',
    fields: [
        {
            name: 'quote',
            label: 'Quote',
            widget: 'string',
        },
        {
            name: 'author',
            label: 'Author',
            widget: 'string',
        },
    ],
    pattern: /^<z-quote quote="(.*?)" author="(.*?)"><\/z-quote>$/,
    fromBlock: match => {
        return {
            quote: match[1],
            author: match[2],
        };
    },
    toBlock: obj => {
        return `<z-quote quote="${obj.quote || ''}" author="${obj.author ||
            ''}"></z-quote>`;
    },
    toPreview: obj => {
        return `<figure><blockquote><p>${obj.quote}</p></blockquote><figcaption>${obj.author}</figcaption></figure>`;
    },
};

export default zQuote;
