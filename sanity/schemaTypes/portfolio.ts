
import {defineType, defineField} from 'sanity'

export const portfolio = defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',

  fields: [
    // PROFILE
    defineField({
      name: 'profile',
      title: 'Profile',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Full Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'title',
          title: 'Professional Title',
          type: 'string',
        }),
        defineField({
          name: 'headline',
          title: 'Headline',
          type: 'text',
          rows: 2,
        }),
        defineField({
          name: 'intro',
          title: 'Introduction',
          type: 'text',
          rows: 5,
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn URL',
          type: 'url',
        }),
        defineField({
          name: 'github',
          title: 'GitHub URL',
          type: 'url',
        }),
        defineField({
          name: 'location',
          title: 'Location',
          type: 'string',
        }),
        defineField({
          name: 'siteUrl',
          title: 'Website URL',
          type: 'url',
        }),
      ],
    }),

    // SERVICES
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        defineField({
          name: 'service',
          title: 'Service',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Service Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'stack',
              title: 'Technology Stack',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
            }),
            defineField({
              name: 'points',
              title: 'Key Achievements',
              type: 'array',
              of: [{type: 'string'}],
            }),
          ],
          preview: {
            select: {title: 'title', subtitle: 'stack'},
          },
        }),
      ],
    }),

    // WORK EXPERIENCE
    defineField({
      name: 'experience',
      title: 'Work Experience',
      type: 'array',
      of: [
        defineField({
          name: 'job',
          title: 'Position',
          type: 'object',
          fields: [
            defineField({
              name: 'role',
              title: 'Job Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'company',
              title: 'Company',
              type: 'string',
            }),
            defineField({
              name: 'period',
              title: 'Employment Period',
              type: 'string',
            }),
          ],
          preview: {
            select: {
              title: 'role',
              subtitle: 'company',
            },
          },
        }),
      ],
    }),

    // SKILLS
    defineField({
      name: 'skills',
      title: 'Skills',
      description: 'Add each skill as a separate item.',
      type: 'array',
      of: [{type: 'string'}],
    }),

    // RESULTS
    defineField({
      name: 'results',
      title: 'Results & Performance',
      type: 'object',
      fields: [
        defineField({
          name: 'beforeAfter',
          title: 'Before & After Metrics',
          type: 'array',
          of: [
            defineField({
              name: 'metric',
              title: 'Metric',
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Metric Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'before',
                  title: 'Before',
                  type: 'number',
                }),
                defineField({
                  name: 'after',
                  title: 'After',
                  type: 'number',
                }),
                defineField({
                  name: 'max',
                  title: 'Maximum Scale',
                  type: 'number',
                }),
                defineField({
                  name: 'unit',
                  title: 'Unit',
                  type: 'string',
                }),
              ],
              preview: {
                select: {title: 'label'},
              },
            }),
          ],
        }),
        defineField({
          name: 'gauges',
          title: 'Lighthouse Scores',
          type: 'array',
          of: [
            defineField({
              name: 'gauge',
              title: 'Score',
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Category',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                }),
                defineField({
                  name: 'value',
                  title: 'Score (0–100)',
                  type: 'number',
                  validation: (Rule) =>
                    Rule.min(0).max(100),
                }),
              ],
              preview: {
                select: {title: 'label', subtitle: 'value'},
                prepare({title, subtitle}) {
                  return {
                    title,
                    subtitle: subtitle == null
                      ? 'No score entered'
                      : `Score: ${subtitle}`,
                  }
                },
              },
            }),
          ],
        }),
      ],
    }),
  ],
})
