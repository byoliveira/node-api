import User from '../models/User'

class UserController {
    async store(request, response) {
        const { id, name, email, provider} = await User.create(request.body)

        const userExists = await User.findOne({ where: { email: request.body.email }})

        if (userExists) {
            return response.status(400).json({ error: 'E-mail já cadastrado'})
        }

        return response.json({
            id, 
            name, 
            email, 
            provider
        })
    }
}

export default new UserController()