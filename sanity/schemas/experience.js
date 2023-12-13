export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    },
    {
      name: 'companyImage',
      title: 'CompanyImage',
      type: 'image',
      options: {
        hotspot: true,
      }
    }, {
      name: 'companyName',
      title: 'CompanyName',
      type: 'string',
    }, {
      name: 'dateStarted',
      title: 'DateStarted',
      type: 'date',

    }, {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',

    }, {
      name: 'isCurrent',
      title: 'IsCurrent',
      type: 'boolean',

    }, {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'skill' } }]

    }, {
      name: 'description',
      title: 'Description',
      type: 'text',
      

    },

  ],

}
