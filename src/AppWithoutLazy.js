import React, {Suspense} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {UseScene} from './hooks/UseScene';

import SceneA from './scenes/SceneA';
import SceneB from './scenes/SceneB';
import SceneC from './scenes/SceneC';
import SceneD from './scenes/SceneD';
import SceneE from './scenes/SceneE';

const App = () => {
  const {scene, isLoading} = UseScene();

  const LoadingFallback = () => (
    <View style={styles.loadingContainer}>
      <Text style={styles.loadingText}>Loading..</Text>
    </View>
  );

  const Scene = () => (
    <>
      {scene === 'a' && (
        <Suspense fallback={<LoadingFallback />}>
          <SceneA />
        </Suspense>
      )}
      {scene === 'b' && (
        <Suspense fallback={<LoadingFallback />}>
          <SceneB />
        </Suspense>
      )}
      {scene === 'c' && (
        <Suspense fallback={<LoadingFallback />}>
          <SceneC />
        </Suspense>
      )}
      {scene === 'd' && (
        <Suspense fallback={<LoadingFallback />}>
          <SceneD />
        </Suspense>
      )}
      {scene === 'e' && (
        <Suspense fallback={<LoadingFallback />}>
          <SceneE />
        </Suspense>
      )}
    </>
  );

  return (
    <SafeAreaView>
      <StatusBar barStyle={'light-content'} />

      {isLoading && <LoadingFallback />}
      {!isLoading && <Scene />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    backgroundColor: 'tomato',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {fontSize: 30, color: 'white'},
});

export default App;
