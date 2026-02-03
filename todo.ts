
const readline = require("readline");

interface Todo {
  id: number;
  text: string;
}

let todos: Todo[] = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const listTodos = (): void => {
  console.clear();
  console.log("\n=== Todo List App ===");
  console.log("Commands: add, list, remove, exit\n");

  if (todos.length === 0) {
    console.log("No todos yet!\n");
  } else {
    console.log("Your Todos:");
    todos.forEach((todo: Todo) => {
      console.log(`${todo.id}. ${todo.text}`);
    });

    // Done Easy Feature:-
    
    console.log("\nTotal todos: " + todos.length);
  }

  process.stdout.write("> ");
  rl.question("", (command: string) => {
    handleCommand(command);
  });
};

const handleCommand = (command: string): void => {
   console.log("Command entered:", command);
};

listTodos();

export {};
