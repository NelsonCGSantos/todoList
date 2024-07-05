const newTask = (title, description) => ({
  title,
  description,
  complete: false,

  logState() {
    console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
  },

  markCompleted() {
    this.complete = true;
  },
});

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();

console.log(tasks);
