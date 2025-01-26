import { integer, pgTable, varchar, text, boolean, timestamp } from "drizzle-orm/pg-core";

export const todosTable = pgTable("todos", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar().notNull(),
  description: text(),
  completed: boolean().notNull().default(false),
  created_at: timestamp().notNull().defaultNow(),
  updated_at: timestamp().$onUpdate(() => new Date()),
});
