import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  entities: {},
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: (state, action) => {
      let newTodo = action.payload;
      state.entities[newTodo.id] = newTodo;
    },
    todoToggled: (state, action) => {
      let updatedTodo = action.payload;
      let foundTodo = state.entities[updatedTodo.id];
      foundTodo.completed = !foundTodo.completed;
    },
    todoColorSelected: {
      reducer: (state, action) => {
        const { color, todoId } = action.payload;
        state.entities[todoId].color = color;
      },
      prepare: (todoId, color) => {
        return {
          payload: { todoId, color },
        };
      },
    },
    todoDeleted: (state, action) => {
      delete state.entities[action.payload];
    },
    allTodosCompleted: (state, action) => {
      Object.values(state.entities).forEach((todo) => {
        todo.completed = true;
      });
    },
    allTodosCleared: (state, action) => {
      Object.values(state.entities).forEach((todo) => {
        if (todo.completed) {
          delete state.entities[todo.id];
        }
      });
    },
    todosLoading: (state, action) => {
      state.status = "loading";
    },
    todosLoaded: (state, action) => {
      const newEntities = {};
      action.payload.forEach((todo) => {
        newEntities[todo.id] = todo;
      });
      state.entities = newEntities;
      state.status = "idle";
    },
  },
});

const selectTodoEntities = (state) => state.todos.entities;

export const selectAllTodos = createSelector(selectTodoEntities, (entities) =>
  Object.values(entities)
);

export const selectTodoById = (todoId) => (state) => state.entities[todoId];

export const {
  todoAdded,
  todoToggled,
  todoColorSelected,
  todoDeleted,
  allTodosCleared,
  allTodosCompleted,
  todosLoading,
  todosLoaded,
} = todosSlice.actions;

export default todosSlice.reducer;
