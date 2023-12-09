import User from '../model/usermodel.js '
import bcryptjs  from 'bcryptjs'
//import { errorhandler } from '../utils/error'

export const signIn = async (req,res,next) => {

    const { username ,email,password} = req.body
    const hashedPassword = bcryptjs.hashSync(password,10 )
    const newUser = new User ({username, email, password:hashedPassword})
    try {
          await newUser.save()
   res.status(201).json('user is created successfully')

    } catch (error) {
       next(error)
    }
 
}