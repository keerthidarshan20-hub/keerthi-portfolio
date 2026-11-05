
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

    defineField({
      name: 'content',
      title: 'Site Content',
      type: 'object',
      fields: [
        defineField({
          name: 'navigation',
          title: 'Navigation',
          type: 'object',
          fields: [
            defineField({name: 'expertise', title: 'Expertise Label', type: 'string'}),
            defineField({name: 'experience', title: 'Experience Label', type: 'string'}),
            defineField({name: 'contact', title: 'Contact Label', type: 'string'}),
          ],
        }),
        defineField({name: 'availabilityText', title: 'Availability Text', type: 'string'}),
        defineField({
          name: 'hero',
          title: 'Hero',
          type: 'object',
          fields: [
            defineField({name: 'ctaLabel', title: 'Primary CTA Label', type: 'string'}),
            defineField({name: 'resumeLabel', title: 'Resume CTA Label', type: 'string'}),
            defineField({
              name: 'meta',
              title: 'Hero Metadata',
              type: 'array',
              of: [{type: 'string'}],
            }),
          ],
        }),
        defineField({
          name: 'focusAreas',
          title: 'Focus Areas',
          type: 'array',
          of: [
            defineField({
              name: 'focusArea',
              title: 'Focus Area',
              type: 'object',
              fields: [
                defineField({name: 'number', title: 'Number', type: 'string'}),
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'detail', title: 'Detail', type: 'text', rows: 3}),
              ],
              preview: {select: {title: 'title', subtitle: 'number'}},
            }),
          ],
        }),
        defineField({
          name: 'sections',
          title: 'Section Text',
          type: 'object',
          fields: [
            defineField({name: 'expertiseKicker', title: 'Expertise Kicker', type: 'string'}),
            defineField({name: 'expertiseTitle', title: 'Expertise Title', type: 'string'}),
            defineField({name: 'expertiseIntro', title: 'Expertise Introduction', type: 'text', rows: 3}),
            defineField({name: 'resultsKicker', title: 'Results Kicker', type: 'string'}),
            defineField({name: 'resultsTitle', title: 'Results Title', type: 'string'}),
            defineField({name: 'resultsHeading', title: 'Results Heading', type: 'string'}),
            defineField({name: 'resultsDescription', title: 'Results Description', type: 'text', rows: 3}),
            defineField({name: 'lighthouseTitle', title: 'Lighthouse Title', type: 'string'}),
            defineField({name: 'experienceKicker', title: 'Experience Kicker', type: 'string'}),
            defineField({name: 'experienceTitle', title: 'Experience Title', type: 'string'}),
            defineField({name: 'skillsLabel', title: 'Skills Accessibility Label', type: 'string'}),
            defineField({name: 'contactKicker', title: 'Contact Kicker', type: 'string'}),
            defineField({name: 'contactTitle', title: 'Contact Title', type: 'string'}),
            defineField({name: 'contactAccent', title: 'Contact Accent', type: 'string'}),
            defineField({name: 'contactDescription', title: 'Contact Description', type: 'text', rows: 3}),
            defineField({name: 'contactCta', title: 'Contact CTA', type: 'string'}),
            defineField({name: 'footerTagline', title: 'Footer Tagline', type: 'string'}),
          ],
        }),
        defineField({name: 'beforeLabel', title: 'Before Metric Label', type: 'string'}),
        defineField({name: 'afterLabel', title: 'After Metric Label', type: 'string'}),
        defineField({name: 'themeLightLabel', title: 'Light Theme Accessibility Label', type: 'string'}),
        defineField({name: 'themeDarkLabel', title: 'Dark Theme Accessibility Label', type: 'string'}),
      ],
    }),
  ],
})
