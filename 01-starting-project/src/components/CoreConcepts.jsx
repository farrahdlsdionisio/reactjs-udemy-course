import CoreConcept from "./CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from '../data.js';

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {/* OPTION 1  */}
            {CORE_CONCEPTS.map((conceptItem) => 
              <CoreConcept key={conceptItem.title} {...conceptItem}/>
            )}
          {/* OPTION 2 */}
            {/* title and description are called "props" <- receives all kinds of values */}
            {/* <CoreConcept {...CORE_CONCEPTS[0]}/>
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> */}
        </ul>
        </section>
    )
}