import axios from "axios";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { Loading } from "../components/Loading";
import { Alert } from "react-native";

const PostImage = styled.Image`
  resizemode: cover;
  border-radius: 10px;
  width: 100%;
  height: 90%;
`;

const PostText = styled.Text`
  font-size: 18px;
  line-height: 24px;
`;

export const FullPostScreen = ({ route }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { imageUrl, title } = route.params;

  React.useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={{ padding: 20 }}>
      <PostImage
        source={{
          uri: imageUrl,
        }}
      />
      <PostText>{title}</PostText>
    </View>
  );
};
