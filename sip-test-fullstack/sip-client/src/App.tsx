// import Home from "./components/page/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeTest from "./components/page/Home";

const queryCLient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryCLient}>
        <HomeTest />
      </QueryClientProvider>
    </>
  )
}
