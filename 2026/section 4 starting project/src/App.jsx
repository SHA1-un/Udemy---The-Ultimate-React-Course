import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {
  const [selectedTab, setSelectedTab] = useState();

  function onTabSelect(tabName) {
    setSelectedTab(tabName);
  }

  // This is a better approach than having a ternary expression in your jsx code.
  // This is an example of a standard pattern in React called using Computed values.
  let tabContent = <p>Select an example!</p>;
  if (selectedTab) {
    tabContent = <div id="tab-content">
      <h3>{EXAMPLES[selectedTab].title}</h3>
      <p>{EXAMPLES[selectedTab].description}</p>
      <pre>
        <code >{EXAMPLES[selectedTab].code}</code>
      </pre>
    </div>
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul >
            {CORE_CONCEPTS.map((coreConcept) => {
              return (
                <CoreConcept {...coreConcept} />
              );
            })}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onClick={() => onTabSelect('components')} isActive={selectedTab === "components"} >Components</TabButton>
            <TabButton onClick={() => onTabSelect('jsx')} isActive={selectedTab === "jsx"}>JSX</TabButton>
            <TabButton onClick={() => onTabSelect('props')} isActive={selectedTab === "props"}>Props</TabButton>
            <TabButton onClick={() => onTabSelect('state')} isActive={selectedTab === "state"}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
