import ChatContainer from "./components/ChatContainer";
import ChatInputs from "./components/ChatInputs";

function App() {
  return (
    <main className="h-screen">
      
      <section className="w-full h-[90vh] p-5 flex flex-col items-center justify-end">
        <ChatContainer />
        <ChatInputs />
      </section>
    </main>
  );
}

export default App;
