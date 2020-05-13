import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer"
import { createAddUserAction, createDeleteUserAction, createUpdateUserAction } from "./action/usersAction";
import { createSetLoginUserAction } from './action/loginUserAction'
import actionCreators from './action'
import uuid from 'uuid'

const store = createStore(reducer);

// console.log('actionCreators', actionCreators)

const boundActionCreators = bindActionCreators(actionCreators, store.dispatch)

// console.log('boundActionCreators', boundActionCreators)
console.log(store.getState());

boundActionCreators.createAddUserAction({
  id: uuid(),
  name: "abc",
  age: 10
})
// store.dispatch(createAddUserAction({
//   id: uuid(),
//   name: "abc",
//   age: 10
// }));
console.log('添加', store.getState());

// store.dispatch(createDeleteUserAction(1));
boundActionCreators.createDeleteUserAction(1)

console.log('删除', store.getState());

store.dispatch(createUpdateUserAction(2, {
  id: 2,
  name: "修改的用户",
  age: 22,
}
));

console.log('更新', store.getState());

store.dispatch(createSetLoginUserAction({
  id: 2,
  name: "张印",
  age: 22,
}
));

console.log('添加登录人', store.getState());