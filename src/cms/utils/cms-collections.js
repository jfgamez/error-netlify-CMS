const CMS_COLLECTIONS = [
    {
        name: 'pages',
        label: 'Pages',
        label_singular: 'Page',
        create: true,
        files: [
            {
                label: 'Home Page',
                name: 'home',
                file: '/src/cms/data/pages/home.md',
                fields: [
                    {
                        label: 'Title',
                        name: 'title',
                        widget: 'string',
                    },
                ],
            },
        ],
    },
];

export default CMS_COLLECTIONS;
