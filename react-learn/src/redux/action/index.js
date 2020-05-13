import loginUserActionCreators from './loginUserAction'
import usersActionCreators from './usersAction'

export default {
  ...loginUserActionCreators,
  ...usersActionCreators,
}