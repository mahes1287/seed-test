import factory from '@adonisjs/lucid/factories'
import Blog from '#models/blog'
// import db from '@adonisjs/lucid/services/db'
import { faker } from '@faker-js/faker'
import db from '@adonisjs/lucid/services/db'
// const data = await db.from('users').select('id').exec()
// const ids = data.map((item) => {
//   return item.id
// })
// console.log(ids)
export const BlogFactory = factory
  .define(Blog, async () => {
    const users = await db.from('users').select('id').exec()
    console.log({ users })
    // console.log('It is running')
    return {
      id: faker.string.uuid(),
      title: faker.lorem.sentence(),
      description: faker.lorem.paragraphs(5),
      tags: faker.lorem.word(),
      users: faker.helpers.arrayElement(users).id,
    }
  })
  .build()
