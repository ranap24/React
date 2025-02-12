import Accordion from "./components/Accordion/Accordion";

function App() {
  return (<>
  <h1>React Patterns & Practices</h1>
  <h2>Hello Accordion testing 1,2,3 .......</h2>
  <Accordion className = "accordion">
    <Accordion.Item
    id = '1'
    title = 'FirstAccordion'
    content = 'Hello this is first accordion. this is for testing purposes'
    />
      <Accordion.Item
    id = '2'
    title = 'SecondAccordion'
    content = 'Hello this is Second accordion. this is for testing purposes'
    />
  </Accordion>
  </>
  );


}

export default App;
