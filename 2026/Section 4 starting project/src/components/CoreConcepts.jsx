import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from './CoreConceptItem.jsx';
import Section from './Section.jsx';

export default function () {
    return <Section id='core-concepts' title="Core Concepts">
        <ul >
            {CORE_CONCEPTS.map((coreConcept) => {
                return (
                    <CoreConcept {...coreConcept} />
                );
            })}
        </ul>
    </Section>
}