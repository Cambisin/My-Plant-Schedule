import React from 'react';
import styled from 'styled-components'

const TextBackground = styled.div`
background: whitesmoke;
padding: 0.4em 1em;
width: 40%;
margin-top:40px;
`
const Paragraph = styled.p`
border: 1px solid grey;
padding: 10px;
color: #2B5419;
`
const Click = styled.a`
text-decoration: none !important;
color: inherit;
font-weight: bold;
&:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

`

const MoreInformation = () => {
return (
<TextBackground>
<Paragraph>
This app was created for all us green finger amateurs who love plants
but aren't the best plant parents! Use this app to
make yourself notes on which plants you need to water and when,
which plants may need some fertilizer and also find 
some inspiration from our Explore plant page to figure out who 
will be next to join your plant family.
</Paragraph>
<Paragraph>
The more plants you add, the wider the explore page becomes for other avid plant parents.
</Paragraph>
<Paragraph>
If you have any feedback or ideas on how we can take this to the next level, 
contact Aishah on <Click href="https://twitter.com/AishahCodes">Twitter</Click> or Cameron!
</Paragraph>
<Paragraph>
See the code here on <Click href="https://github.com/Cambisin/My-Plant-Schedule">Github</Click>.
</Paragraph>
</TextBackground>
)
}

export default MoreInformation;