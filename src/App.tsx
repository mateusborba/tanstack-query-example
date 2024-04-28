import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "./service";
import { TodoType } from "./types";
import { Table } from "./components/table/Table";

function App() {
  const { data } = useQuery<TodoType[]>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return (
    <div className="w-full h-screen p-12">
      <Table data={data?.slice(0, 20) || []} />
    </div>
  );
}

export { App };
