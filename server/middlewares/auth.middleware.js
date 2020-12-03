import jwt from 'jsonwebtoken'
import aysncHandler from 'express-async-handler'
import User from '../models/user.model.js'

export const protect = aysncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
      try {
          token = req.headers.authorization.split(' ')[1]
          const decoded = jwt.verify(token, process.env.JWT_SECRET)
          next()
      } catch (error) {
          res.status(401)
          throw new Error('invalid token')
      }
  }
  if (!token) {
    res.status(401)
    throw new Error('not auth')
  }
})