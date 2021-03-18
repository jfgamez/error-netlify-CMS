const visit = require('unist-util-visit');

const { fluid } = require(`gatsby-plugin-sharp`);

const OPTIONS = {
    maxWidth: 1000,
    wrapperStyle: ``,
    backgroundColor: `white`,
    linkImagesToOriginal: true,
    showCaptions: false,
    markdownCaptions: false,
    withWebp: false,
    withAvif: false,
    tracedSVG: false,
    loading: `lazy`,
    disableBgImageOnAlpha: false,
    disableBgImage: false,
};

module.exports = async ({ files, markdownAST, reporter, cache }) => {
    const zImages = [];

    visit(markdownAST, 'html', node => {
        const isZimage = node.value.includes('<z-image');
        if (!isZimage) {
            return;
        }

        zImages.push(node);
    });
    if (zImages) {
        await Promise.all(
            zImages.map(async node => {
                try {
                    const zImage = node;
                    const [, src, title, alt, caption] = zImage.value.match(
                        /^<z-image src="(.*?)" title="(.*?)" alt="(.*?)" caption="(.*?)">$/
                    );

                    const imagePath = zImage.value.match(/src="(.*?)"/)[1];

                    const imageNode = files.find(file => {
                        if (file && file.absolutePath) {
                            return file.absolutePath.includes(imagePath);
                        }

                        return false;
                    });

                    const fluidResult = await fluid({
                        file: imageNode,
                        args: OPTIONS,
                        reporter,
                        cache,
                    });

                    zImage.value = `<z-image src='${src ||
                        ''}' title='${title || ''}' alt='${alt ||
                        ''}' caption='${caption || ''}' fluid='${
                        fluidResult ? JSON.stringify(fluidResult) : ''
                    }'></z-image>`;

                    return fluidResult;
                } catch (err) {
                    console.log(err);
                }

                return node;
            })
        ).catch(err => console.log(`error remark z image :::::: ${err}`));
    }

    return markdownAST;
};
