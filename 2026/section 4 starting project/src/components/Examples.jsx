import { useState } from 'react';
import { EXAMPLES } from '../data.js';

import Tabs from './Tabs.jsx';
import TabButton from './TabButton.jsx';
import Section from './Section.jsx';

export default function () {
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

    return <Section id="examples" title="Examples">
        <Tabs ButtonWrapper="menu" buttons={
            <>
                <TabButton isSelected={selectedTab === "components"} onClick={() => onTabSelect('components')} >Components</TabButton>
                <TabButton isSelected={selectedTab === "jsx"} onClick={() => onTabSelect('jsx')}>JSX</TabButton>
                <TabButton isSelected={selectedTab === "props"} onClick={() => onTabSelect('props')}>Props</TabButton>
                <TabButton isSelected={selectedTab === "state"} onClick={() => onTabSelect('state')}>State</TabButton>
            </>
        }>
         {tabContent}
        </Tabs>
    </Section>
}