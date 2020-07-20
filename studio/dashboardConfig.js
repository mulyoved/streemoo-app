export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages',
      },
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f1314cb3bb4129d48733c9e',
                  title: 'Streemoo CRM - Sanity Studio',
                  name: 'streemoo-crm',
                  apiId: '860969ea-617a-4d97-9887-f54ea6c290aa',
                },
                {
                  buildHookId: '5f1314cb15a867e3215a2ee5',
                  title: 'Streemoo',
                  name: 'streemoo',
                  apiId: 'f5197d6b-43c0-4109-b7b2-f26832b1afe3',
                },
              ],
            },
          },
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mulyoved/sanity-nextjs-landing-pages',
            category: 'Code',
          },
          { title: 'Frontend', value: '', category: 'apps' },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' },
    },
  ],
}
