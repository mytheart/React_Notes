export const ADDUSER = Symbol("add-user");
export const DELETEUSER = Symbol("delete-user");
export const UPDATEUSER = Symbol("update-user");

export const createAddUserAction = (user) => ({
    type: ADDUSER,
    payload: user
})

export const createDeleteUserAction = (id) => ({
    type: DELETEUSER,
    payload: id
})

export const createUpdateUserAction = (id, newUserData) => ({
    type: UPDATEUSER,
    payload: {
        ...newUserData,
        id
    }
})

export default {
  createAddUserAction,
  createDeleteUserAction,
  createUpdateUserAction,
}