export const initialState = [
  {
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
  },
  {
      item: 'Pet all the puppos',
      completed: false,
      id: 4857295031
  },
  {
      item: 'Go see a movie',
      completed: false,
      id: 5692058332
  }
]

export const reducer = (state, action) => {
  // console.log(state, action);
  switch (action.type) {
      case 'ADD_TASK':
          return [
              ...state,
              {
                  item: action.payload,
                  completed: false,
                  id: Date.now()
              }
          ]
      case 'TOGGLE_TASK':
          return state.map(todo => {
              // console.log(todo.id, action.payload);
              if (todo.id === action.payload) {
                  return {...todo, completed: !todo.completed}     
              }else{
                  return todo;
              }
          })
      case 'CLEAR_TASK':
          return state.filter(todo => {
                  return !todo.completed     
              }
          )
      default:
          return state;
  }
}