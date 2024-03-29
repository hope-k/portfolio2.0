export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'The title of the project',
      type: 'string',


    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',

    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }]

    },
    {
      name: 'projectUrl',
      title: 'Project Url',
      type: 'url',

    },    
    {
      name: 'githubUrl',
      title: 'Github Url',
      type: 'url',

    },


  ],

}
