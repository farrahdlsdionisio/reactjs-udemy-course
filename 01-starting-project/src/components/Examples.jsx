import { useState } from 'react';
import TapButton from "./TapButton.jsx";
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import { EXAMPLES } from '../data.js'

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState(); // always set into 2 val

    function handleSelect(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelectedTopic(selectedButton)
        console.log(selectedTopic)
    }

    let tabContent = <p>Please select a topic.</p>

    if (selectedTopic) {
        tabContent = <div id="tab-content">
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                        {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                    </div>
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs buttons={
                <>
                    <TapButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TapButton>
                    <TapButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TapButton>
                    <TapButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TapButton>
                    <TapButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TapButton>
                </>
            }>{tabContent}</Tabs>
        {/* OPTION 1 */}
        {/* {!selectedTopic ?  <p>Please select a topic.</p> : 
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code>
            {EXAMPLES[selectedTopic].code}
            </code>
            </pre>
        </div>} */}
        {/* OPTION 2 */}
        {/* {!selectedTopic &&  <p>Please select a topic.</p>} */}
        {/* {selectedTopic && <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
            <code>
            {EXAMPLES[selectedTopic].code}
            </code>
            </pre>
        </div>} */}
        {/* OPTION 3 */}
        </Section>
    )
}