import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';

function App() {
  const  [selectedTab, setSelectedTab] = useState('components');

  function onTabSelect(tabName) {
    setSelectedTab(tabName);
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
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTab].title}</h3>
            <p>{EXAMPLES[selectedTab].description}</p>
            <code >{EXAMPLES[selectedTab].code}</code>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
