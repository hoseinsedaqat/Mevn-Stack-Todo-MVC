<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-7 mx-auto">
          <div class="form-group my-5">
            <label for="task" class="my-2">Enter a New Task:</label>
            <input
              type="text"
              name="task"
              id="task"
              class="form-control"
              v-model="task"
            />
            <button
              class="btn btn-dark bg-dark text-white my-3 me-4"
              @click="newPostTask()"
            >
              Add Task
            </button>
            <button v-if="forUpdated" @click="cancelUpdate()" class="btn btn-primary">
              Cancel Update
            </button>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7 mx-auto">
          <h3 class="my-3">All Tasks:</h3>
          <ul
            class="list-group"
            v-for="(task, index) in getAllTasks"
            :key="(task, index)"
          >
            <li class="list-group-item p-3 d-flex flex-row justify-content-between my-1">
              <p>{{ task.task }}</p>
              <div>
                <i
                  @click="deleteTask(task._id)"
                  class="fa fa-trash me-4"
                  style="color: red; cursor: pointer"
                ></i>
                <i
                  @click="updatedTasks(index)"
                  class="fa fa-pencil me-4"
                  style="color: #666; cursor: pointer"
                ></i>
                <i
                  v-if="forUpdated"
                  class="fa fa-refresh"
                  style="cursor: pointer; color: skyblue"
                  @click="newUpdateTask(task)"
                ></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <footer class="py-3 mt-5 bg-dark text-white text-center">
      <p>Created By H∅3ein</p>
    </footer>
  </div>
</template>

<script>
// is exist for remember 😀
// import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {
      forUpdated: false,
      task: "",
    };
  },
  methods: {
    ...mapActions(["getTasks", "postTask", "deleteTask", "updateTasks"]),
    newPostTask() {
      // simple Validation
      if (this.task.trim() === "") {
        alert(`Please enter Task`);
      } else {
        this.postTask(this.task);
        this.task = "";
      }
    },
    updatedTasks(index) {
      this.forUpdated = true;
      const getTask = this.getAllTasks[index].task;
      this.task = getTask;
    },
    // is exist for remember 😀
    // newUpdateTask(task) {
    //   task.task = this.task;
    //   axios.put(`http://localhost:3000/api/task/${task._id}`, task);
    // },
    newUpdateTask(task) {
      this.forUpdated = false;
      const updTask = {
        _id: task._id,
        task: this.task,
      };
      this.updateTasks(updTask);
      this.task = "";
    },
    cancelUpdate() {
      this.forUpdated = false;
      this.task = "";
    },
  },
  computed: {
    ...mapGetters(["getAllTasks"]),
  },
  // for udpate page
  mounted() {
    this.getTasks();
  },
  // for update todoDB in moment
  updated() {
    this.getTasks();
  },
};
</script>

<style></style>
