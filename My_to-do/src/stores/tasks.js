import { defineStore } from "pinia";
import { v4 as uuidv4 } from 'uuid';  
export const useTasksStore = defineStore('tasks', {
    // state
    state: () => {
        return {
            tasks: JSON.parse(localStorage.getItem('tasks')) ||[]
            // task: {}
        }
    },
    
    // actions
    actions: {
        // Create a task
        createTask(title, description, enddate, startdate, priority){
            console.log(title, description, enddate, startdate, priority)
            this.tasks.push({title, description, enddate, startdate, priority,  id: uuidv4()});
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            alert("Task succesfully added...");
            console.log(this.tasks)
        },

        // Remove a task
        removeTask(taskId){
            this.tasks = this.tasks.filter((task) => task.id !== taskId);
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            localStorage.getItem('tasks')
            alert("Task successfully removed...")
        },

        // Display tasks
        getTasks(){
            var myTasks = JSON.parse(localStorage.getItem('tasks'));
            return myTasks;
        },

        // Update a task
        updateTasks(taskf){
            this.tasks[this.tasks.indexOf(this.tasks.find((task) => task.id == taskf.id))] = taskf
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
            alert("Task successfully updated...")
        },
        
    }
})