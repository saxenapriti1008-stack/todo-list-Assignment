
/*const readline = require("readline");

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

export {};*/

//Medium challenge:
//Add Done status:-

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let todos: Todo[] = [];

//Update Todo type

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

// Update addTodo

const createTodo = (text: string): Todo => {
  return {
    id: Date.now(),
    text: text.trim(),
    done: false,
  };
};

//Update listTodos to show done status

const showMenu = (): void => {
  console.clear();
  console.log("\n=== Todo List App ===");
  todos.forEach((todo: Todo) => {
    const status = todo.done ? "[✓]" : "[ ]";
    console.log(`${todo.id}. ${status} ${todo.text}`);
  });
  console.log("Commands: add, list, remove, done, exit\n");
  rl.question("> ", (command: string) => {
    handleCommand(command);
  });
};

//Update menu & command handler

const handleCommand = (command: string): void => {
  switch (command.toLowerCase()) {
    case "done":
      markDone();
      break;
    case "exit":
      rl.close();
      break;
    default:
      console.log("Unknown command\n");
      showMenu();
  }
};

//Add a new command → done

const markDone = (): void => {
  rl.question("Enter task ID to mark as done: ", (input: string) => {
    const id = parseInt(input);

    const todo = todos.find((t) => t.id === id);

    if (!todo) {
      console.log("Task not found!\n");
    } else {
      todo.done = true;
      console.log("✓ Task marked as done!\n");
    }

    showMenu();
  });
};

showMenu();



