import { Request, Response } from 'express';
import { User } from '../models/user.model';
import jwt from 'jsonwebtoken'
import { ENV_VARS } from '../index'


const token_secret = process.env.TOKEN_SECRET

async function create(req: Request, res: Response) {

  const { email, password } = req.body;

  const userExists = await User.findOne({ email })

  if (!userExists) {
    return res.status(403).json({
      message: 'Não foi possível autenticar'
    })
  }

  const isValid = await userExists.comparePassword(password)

  const accessToken = createAccessToken(userExists._id)

  if (!isValid) {
    return res.status(401).json({
      message: 'Não foi possível autenticar'
    })
  }

  return res.status(201).json({
    user: {
      id: userExists._id,
      name: userExists.name
    },
    accessToken
  });
}

function createAccessToken(userId: string) {

  const token = ENV_VARS.token_secret as string

  const accessToken = jwt.sign(
    {
      id: userId
    },
    token,
    {
      expiresIn: 900
    }
  )

  return accessToken

}

export { create };