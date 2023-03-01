import { createContext, useEffect, useState } from 'react';
import { URLs } from '../constants/URLs';
import useHttp from '../hooks/use-http';
import openSocket from 'socket.io-client';

export const FeedContext = createContext({
  feed: '',
  isLoading: false,
  error: null,
  getFeed: async () => {},
  putFeed: async () => {},
});

const FeedContextProvider = (props) => {
  const [feed, setFeed] = useState('');
  const httpObj = useHttp();

  useEffect(()=>{
    openSocket('http://localhost:8080');
    return function cleanup(){

    }
  });

  const getFeed = async () => {
    const getConfig = {
      url: URLs.feed_url,
      method: 'GET',
    };
    const createTask = (response) => {
      console.log(response);
    };
    await httpObj.sendRequest(getConfig, createTask);
    if (httpObj.error) {
      throw new Error(httpObj.error);
    }
  }  
  
  const putFeed = async () => {
    
  }

  return (
    <FeedContext.Provider value={{ 
      feed: feed, 
      isLoading: httpObj.isLoading,
      error: httpObj.error,
      getFeed: getFeed,
      putFeed: putFeed
      }}>
      {props.children}
    </FeedContext.Provider>
  );
};

export default FeedContextProvider;
