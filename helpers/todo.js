import { log } from "console";
import { db } from "../db/index.js";
import { todosTable } from "../db/schema.js";
import { ilike, eq } from "drizzle-orm";

const getAllTodo = async () => {
  const todos = await db.select().from(todosTable);
  return todos;
};

const createTodo = async (todo) => {
//   todo = JSON.parse(todo);
  if (!todo.title) {
    throw new Error("Title is required");
  }

  const [result] = await db
    .insert(todosTable)
    .values({
      title: todo.title,
      description: todo.description || "",
      completed: todo.completed || false,
      created_at: new Date(),
      updated_at: new Date(),
    })
    .returning({
      id: todosTable.id,
    });

  return result.id;
};

const searchTodo = async (search) => {
  const todos = await db
    .select()
    .from(todosTable)
    .where(ilike(todosTable.title, `%${search}%`));
  return todos;
};

const updateTodo = async (todo) => {
    todo = JSON.parse(todo);
    const id = todo.id
    delete todo.id
    await db.update(todosTable).set(todo).where(eq(todosTable.id, id))
}

const deleteTodoById = async (id) => {
  await db.delete(todosTable).where(eq(todosTable.id, id));
};

export { getAllTodo, searchTodo, createTodo, deleteTodoById, updateTodo };
