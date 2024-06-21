import { BaseSeeder } from '@adonisjs/lucid/seeders'
import db from '@adonisjs/lucid/services/db'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    const data = await db.from('user_blogs').select('id', 'user_id', 'blog_id').exec()
    console.log(data)
  }
}
