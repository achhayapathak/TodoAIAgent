# TodoAIAgent

TodoAIAgent is a smart AI agent that can manage your tasks by adding, retrieving, updating, and deleting todos purely based on natural language processing. The AI assistant follows a structured approach with START, PLAN, ACTION, OBSERVATION, and OUTPUT states to interact with the user and manage tasks in a PostgreSQL database.

## Features

- Add new todos
- Retrieve all todos
- Update existing todos
- Delete todos by ID
- Search todos by keyword

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/achhayapathak/TodoAIAgent.git
    cd TodoAIAgent
    ```

2. Install dependencies:
    ```sh
    pnpm install
    ```

3. Set up the PostgreSQL database using Docker:
    ```sh
    docker-compose up -d
    ```

4. Generate the database schema:
    ```sh
    pnpm run generate
    ```



## Usage

1. Start the application:
    ```sh
    pnpm start
    ```

2. Interact with the AI assistant through the command line:
    ```sh
    >> Add a task for shopping groceries
    >> Show all tasks
    >> Update task with ID 1
    >> Delete task with ID 2
    ```

## Available Tools

- `getAllTodo()`: Returns all the todos from the database
- `createTodo()`: Creates a new todo in the database and returns the ID of the todo
- `deleteTodoById(id: string)`: Deletes the todo by ID given in the database
- `searchTodo(query: string)`: Searches for all todos matching the query using `ilike` in the database
- `updateTodo()`: Updates the existing todo with the given ID in the input with the provided object

## Configuration

The project uses environment variables defined in the `.env` file. Make sure to configure the following variables in this file:
- DATABASE_URL: Postgres DB URL
- API_KEY: Google Gemini API Key

## Contributing

Feel free to open issues or submit pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.


