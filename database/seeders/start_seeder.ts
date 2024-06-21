import { UserFactory } from '#database/factories/user_factory'
import User from '#models/user'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { faker } from '@faker-js/faker/locale/en_IN'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        id: faker.string.uuid(),
        username: 'admin',
        email: 'admin@example.com',
        phone: '+919438598353',
        password: 'admin',
      },
      {
        id: faker.string.uuid(),
        username: 'puneet',
        email: 'puneet@example.com',
        phone: '+919385763478',
        password: 'puneet',
      },
      {
        id: faker.string.uuid(),
        username: 'mahesh',
        email: 'mahesh@example.com',
        phone: '+919920200022',
        password: 'mahesh',
      },
      {
        id: faker.string.uuid(),
        username: 'rahul',
        email: 'rahul@example.com',
        phone: '+919438943722',
        password: 'rahul',
      },
      {
        id: faker.string.uuid(),
        username: 'ritika',
        email: 'ritika@example.com',
        phone: '+919438757239',
        password: 'ritika',
      },
    ])
    await UserFactory.createMany(5)
  }
}
