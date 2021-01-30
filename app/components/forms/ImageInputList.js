import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputList({imageUris = [], onAddImage, onRemoveImage}) {
  const scrollView = useRef();

  //scrollview always takes up entire screen, to prevent this you wrap it in view which size is always determined by its components
  return (
    <View> 
      <ScrollView horizontal ref={scrollView} onContentSizeChange={() => scrollView.current.scrollToEnd()}>
        <View style={styles.container}>
            {imageUris.map((uri,i) => <View key={i} style={styles.imageWrapper}>
              <ImageInput imageUri={uri} onChangeImage={() => onRemoveImage(uri)}/>
            </View>)}
            <ImageInput imageUri={null} onChangeImage={(uri) => onAddImage(uri)}/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  imageWrapper: {
    marginRight: 10
  }
});

export default ImageInputList;