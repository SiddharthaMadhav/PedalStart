import tasks from "@/data";

// export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request) {
  return Response.json({ tasks });
}

export async function POST(request) {
  const { title, description, dueDate } = request.body;
  const newTask = { id: tasks.length + 1, title, description, dueDate };
  tasks.push(newTask);
  Response.status(201).json(newTask);
}

export async function PUT(request) {
  const { title, description, dueDate } = request.body;
  const newTask = { id: tasks.length + 1, title, description, dueDate };
  tasks.push(newTask);
  Response.status(201).json(newTask);
}
