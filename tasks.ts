const tasks: {
    title: string;
    description: string;
    isComplete?: boolean;
}[] = [];

// add task with title "create project" & description "create facebook project" & isComplete false
tasks.push({
    title: "Create Project",
    description: "Create facebook Project",
    isComplete: false,
});

// add task with title "create login" & description "create feature login" & isComplete false
tasks.push({
    title: "Create login",
    description: "Create feature login",
    isComplete: false,
});

console.log(tasks);

// update task "create project" with isComplete true
const tasks1 = tasks.findIndex((Value) => {
    console.log("Value:", Value);
    return Value.title === "Create Project";
});

console.log("Index of Create Project:", tasks1);

if (tasks1 == -1) {
    console.log("Value not Found");
} else {
    tasks[tasks1].isComplete = true;
}

console.log("Task After Updating:", tasks[tasks1]);
