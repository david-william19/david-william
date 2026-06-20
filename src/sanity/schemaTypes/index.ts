import { type SchemaTypeDefinition } from 'sanity'
import { contentType } from './contentType'
import { projectType } from './projectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    contentType,
    projectType,
  ],
}
