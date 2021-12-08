import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addTask: (state, task) => {
      state = [...state, task];
    },
    removeTask: (state, removeThisTask) => {
      state = state.filter((task) => {
        return task.taskName !== removeThisTask.taskName;
      });
    },
  },
});
