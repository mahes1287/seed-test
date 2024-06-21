import factory from '@adonisjs/lucid/factories'
import Blog from '#models/blog'
// import db from '@adonisjs/lucid/services/db'
import { faker } from '@faker-js/faker'
// const data = await db.from('users').select('id').exec()
// const ids = data.map((item) => {
//   return item.id
// })
// console.log(ids)
export const BlogFactory = factory
  .define(Blog, async () => {
    // console.log('It is running')
    return {
      id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraphs(5),
      tags: faker.lorem.word(),
    }
  })
  .build()
