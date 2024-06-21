import factory from '@adonisjs/lucid/factories'
import User from '#models/user'
import { fakerEN_IN as faker } from '@faker-js/faker'

export const UserFactory = factory
  .define(User, async () => {
    return {
      id: faker.string.uuid(),
      username: faker.person.fullName(),
      phone: faker.phone.number(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    }
  })
  .build()
