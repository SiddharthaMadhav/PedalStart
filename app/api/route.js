import tasks from "@/data";

// export const dynamic = "force-dynamic"; // defaults to auto
export async function GET(request) {
  return Response.json({ tasks });
}

export async function POST(request) {
  const body = request.body;
  const stitle = body.newobj.title;
  const sdescription = body.newobj.description;
  const sdueDate = body.newobj.dueDate;
  const newTask = {
    id: tasks.length + 1,
    title: stitle,
    description: sdescription,
    dueDate: sdueDate,
  };
  tasks.push(newTask);
  return Response.json(newTask);
}

export async function PUT(request) {
  const body = request.body;
  const sid = body.newobj.id;
  const stitle = body.newobj.title;
  const sdescription = body.newobj.description;
  const sdueDate = body.newobj.dueDate;
  tasks[id - 1] = {
    id: sid,
    title: stitle,
    description: sdescription,
    dueDate: sdueDate,
  };
  return Response.json(tasks);
}

export async function DELETE(request) {
  const id = request.body;
  newtasks = tasks.filter((t) => t.id != id);
  return Response.json(newtasks);
}
