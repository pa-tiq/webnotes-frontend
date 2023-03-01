import { useState } from 'react';
import styled from 'styled-components';

const StyledTextArea = styled.textarea`
  width:100%;
`

const TextArea = (props) => {
  const [text,setText] = useState(props.text);

  return (
    <StyledTextArea value={text}/>
  )
}