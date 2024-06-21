import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  async store({ request, response }: HttpContext) {
    const body = request.body()

    const user = await User.create(body)

    response.status(201)

    return {
      message: 'User created successfully!',
      data: user,
    }
  }

  async index() {
    const Users = await User.all()

    return {
      message: 'User Shown on Browser successful!',
      data: Users,
    }
  }
  async show({ params }: HttpContext) {
    const user = await User.find(params.id)

    return {
      data: user,
    }
  }
  async destroy({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)
    await user.delete()

    return {
      message: 'User deleted successfully!',
      data: user,
    }
  }
  async update({ params, request }: HttpContext) {
    const user = await User.findOrFail(params.id)

    const body = request.body()

    user.username = body.username
    user.phone = body.phone
    user.email = body.email
    user.password = body.password

    await user.save()

    return {
      message: 'User updated successfully!',
      data: user,
    }
  }
}
