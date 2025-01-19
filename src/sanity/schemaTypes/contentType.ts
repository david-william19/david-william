import { defineArrayMember, defineField, defineType } from "sanity";

export const contentType = defineType({
    name: 'content',
    title: 'Content',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug'
        }),
        defineField({
            name: 'description',
            type: 'string'
        }),
        defineField({
            name: 'body',
            type: 'array',
            of: [
                {type: 'block'}
            ]
        }),
        defineField({
            name: "date",
            type: "datetime"
        }),
        defineField({
            name: "tags",
            type: 'array',
            title: 'Tags for tech stack',
            of: [
                defineArrayMember({
                    type: 'object',
                    name: 'tag',
                    fields: [
                        {
                            type: 'string', name: 'label',
                        },
                        {
                            type: 'string', name: 'value',
                        }
                    ]
                })
            ]
        })
    ]
})