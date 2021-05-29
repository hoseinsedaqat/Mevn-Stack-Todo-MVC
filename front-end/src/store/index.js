import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  // state
  state: {
    allTasks: [],
  },
  // actions
  actions: {
    async getTasks({ commit }) {
      const response = await axios.get('http://localhost:3000/api/task');
      commit('pushTask', response.data);
    },
    async postTask({ commit }, task) {
      const response = await axios.post('http://localhost:3000/api/task', {
        task
      })
      commit('addTask', response.data);
    },
    async deleteTask({ commit }, index) {
      await axios.delete(`http://localhost:3000/api/task/${index}`)
      commit('removeTask', index);
    },
    async updateTasks({ commit }, updTask) {
      const response = await axios.put(`http://localhost:3000/api/task/${updTask._id}`, updTask);
      commit('changeTask', response.data);
      console.log(response.data)
    }
  },
  mutations: {
    pushTask: (state, tasks) => {
      state.allTasks = tasks;
    },
    addTask: (state, task) => {
      state.allTasks.push(task);
    },
    removeTask: (state, index) => {
      state.allTasks.filter(task => task._id !== index)
    },
    changeTask: (state, updTasks) => {
      state.allTasks.filter(tasks => {
        if (tasks._id === updTasks._id) {
          tasks.task = updTasks.task
        }
      })
    }
  },
  getters: {
    getAllTasks: (state) => state.allTasks
  }
})
