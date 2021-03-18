import CMS, { init } from 'netlify-cms-app';
import { zImage, zQuote, zIframe } from './editor-components';
import CMS_COLLECTIONS from './utils/cms-collections';

const env = process.env.GATSBY_CMS_DEPLOYMENT_ENV || 'master';
const branch = process.env.GATSBY_CMS_DEPLOYMENT_BRANCH || 'master';

CMS.registerEditorComponent(zImage);
CMS.registerEditorComponent(zQuote);
CMS.registerEditorComponent(zIframe);

init({
    config: {
        slug: {
            clean_accents: true,
        },
        backend: {
            name: 'bitbucket',
            repo: 'test',
            branch,
            auth_type: 'implicit',
            app_id: process.env.NETLIFY_APP_ID,
        },
        media_folder: 'static/uploads',
        public_folder: '/uploads',
        publish_mode: 'editorial_workflow',
        local_backend: env === 'local',
        collections: CMS_COLLECTIONS,
    },
});
