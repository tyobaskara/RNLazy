import React, {Suspense} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {UseScene} from './hooks/UseScene';

const LazySceneA = React.lazy(() => import('./scenes/SceneA'));
const LazySceneB = React.lazy(() => import('./scenes/SceneB'));
const LazySceneC = React.lazy(() => import('./scenes/SceneC'));
const LazySceneD = React.lazy(() => import('./scenes/SceneD'));
const LazySceneE = React.lazy(() => import('./scenes/SceneE'));

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
          <LazySceneA />
        </Suspense>
      )}
      {scene === 'b' && (
        <Suspense fallback={<LoadingFallback />}>
          <LazySceneB />
        </Suspense>
      )}
      {scene === 'c' && (
        <Suspense fallback={<LoadingFallback />}>
          <LazySceneC />
        </Suspense>
      )}
      {scene === 'd' && (
        <Suspense fallback={<LoadingFallback />}>
          <LazySceneD />
        </Suspense>
      )}
      {scene === 'e' && (
        <Suspense fallback={<LoadingFallback />}>
          <LazySceneE />
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
