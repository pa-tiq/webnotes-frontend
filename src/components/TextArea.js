import { useContext, useState } from 'react';
import styled from 'styled-components';
import { FeedContext } from '../store/feed-context';

const StyledTextArea = styled.textarea`
  width: 100%;
`;

const TextArea = (props) => {
  const feedContext = useContext(FeedContext);
  const [text, setText] = useState(feedContext.feed);

  const changeTextHandler = () => {
    
  }

  return <StyledTextArea value={text} onChange={changeTextHandler} />;
};

export default TextArea;
