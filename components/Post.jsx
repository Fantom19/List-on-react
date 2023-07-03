import styled from "styled-components/native";
import React from "react";

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;

const PostImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  margin-right: 12px;
`;

const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostAuthor = styled.Text`
  font-size: 14px;
  color: #888;
`;

const truncateTitle = (str) => {
  if (str && str.length >= 20) {
    return str.substring(0, 20) + "...";
  }
  return str;
};

export const Post = ({ title, imageUrl, author }) => {
  return (
    <PostView>
      <PostImage source={{ uri: imageUrl }} />
      <PostDetails>
        <PostTitle>{truncateTitle(title)}</PostTitle>
        <PostAuthor>author: {author}</PostAuthor>
      </PostDetails>
    </PostView>
  );
};
