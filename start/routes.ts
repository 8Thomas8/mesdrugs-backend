/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UserController = () => import('#controllers/user_controller')
const AuthController = () => import('#controllers/auth_controller')

router
  .group(() => {
    router
      .group(() => {
        router.post('auth/register', [AuthController, 'register'])
        router.post('auth/login', [AuthController, 'login'])
        router.post('auth/logout', [AuthController, 'logout'])
        router.get('/me', [UserController, 'me'])
      })
      .prefix('v1')
  })
  .prefix('api')
