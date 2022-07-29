import React, {useEffect, useMemo, useState} from 'react';

const INITIAL_STATE = {
  isLoading: false,
  scene: '',
};

export const UseScene = () => {
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    const getScene = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({scene: 'a'});
        }, 1000);
      });

    const fetchData = async () => {
      setState({
        ...state,
        isLoading: true,
      });

      try {
        const result = await getScene();
        setState({
          ...state,
          isLoading: false,
          scene: result?.scene || '',
        });
        console.log('~ result', result);
      } catch (e) {
        setState({
          ...state,
          isLoading: false,
        });
        console.log('~ e', e);
      }
    };

    fetchData();
  }, []);

  return {scene: state.scene, isLoading: state.isLoading};
};
