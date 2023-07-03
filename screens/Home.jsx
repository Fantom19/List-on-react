import axios from "axios";
import {
  Text,
  View,
  Alert,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Post } from "../components/Post";

export const Home = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = useState([]);

  const fetchPost = () => {
    setIsLoading(true);
    axios
      .get(
        "https://api.unsplash.com/photos/?client_id=896d4f52c589547b2134bd75ed48742db637fa51810b49b607e37e46ab2c0043"
      )
      .then(({ data }) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Ошибка", "Не удалось получить картинки");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(fetchPost, []);

  ////////////////////////////////////

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 15 }}>Загрузка...</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={fetchPost} />
        }
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Photo", {
                imageUrl: item.urls.thumb,
                title: item.alt_description,
              })
            }
          >
            <Post
              key={item.id}
              title={item.alt_description}
              imageUrl={item.urls.thumb}
              author={item.user.name}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
