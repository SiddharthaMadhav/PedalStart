import tasks from "@/data";

export async function GET(request, id) {
  Response.json(tasks[id - 1]);
}
