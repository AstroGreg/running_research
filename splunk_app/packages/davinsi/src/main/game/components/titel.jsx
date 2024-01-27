
import React from 'react';
import Anchor from '@splunk/react-ui/Anchor';
import Heading from '@splunk/react-ui/Heading';
import P from '@splunk/react-ui/Paragraph';
import { lorem } from '@splunk/react-ui/fixtures/text';

const shortLorem = `${lorem.split('.').slice(0, 4).join('.')}.`;
function Title() {
    return (
        <>
            <Heading level={1}>
                <Anchor name="Heading 1">Heading 1</Anchor>
            </Heading>
      
        </>
    );
}

export default Title;