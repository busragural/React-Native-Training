import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'QwitcherGrypen-Bold': require('./assets/fonts/QwitcherGrypen-Bold.ttf'),
  });
  
  const [goalText, setGoalText] = useState("");
  const [allGoals, setAllGoals] = useState([]);
  const isEmpty = false;
  const [isEmptyText, setEmptyText] = useState(false);


  function onChangeText(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalPress() {
    if (goalText.length > 0) {
      setAllGoals((current) => [...current, goalText]);
      setGoalText("");
      setEmptyText(false);
    } else {
      setEmptyText(true);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.textTitle, { fontFamily: 'QwitcherGrypen-Bold'}]}>My Goals</Text>
      {/* <Text style={{ fontFamily: 'QwitcherGrypen-Bold', fontSize: 30 }}>MyGoals</Text> */}
      <View style={styles.main}>
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          placeholder="Add a new goal!"
          value={goalText}
        />
        <Button color="#f28482" title="ADD" onPress={addGoalPress} />
        {isEmptyText && (
          <Text style={{ color: "red", textAlign: "center", paddingTop: 10 }}>
            Invalid!
          </Text>
        )}
      </View>

      {/* {allGoals.length > 0 && (
          <Text style={styles.goalsItemTitle}>CURRENT GOALS</Text>
        )}
        <ScrollView style={styles.goals}>
          {allGoals.length > 0 ? (
            allGoals.map((goal) => {
              return (
                <Text style={styles.goalsItem} key={goal}>
                  {goal}
                </Text>
              );
            })
          ) : (
            <Text style={styles.noGoalsText}>No goals yet!</Text>
          )}
        </ScrollView> */}

      <View
        style={[
          styles.goals,
          allGoals.length === 0 && styles.noGoalsBackground,
        ]}
      >
        {allGoals.length > 0 ? (
          <Text style={[styles.goalsItemTitle, { fontFamily: 'QwitcherGrypen-Bold'}]}>Current Goals</Text>
        ) : (
          <Text style={styles.noGoalsText}>No goals yet!</Text>
        )}
        <FlatList
          data={allGoals}
          contentContainerStyle={styles.flatListContent}
          keyExtractor={item => item.id}
          renderItem={(itemData) => {
            return (
              <View>
                <Text style={styles.goalsItem}>{itemData.item}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: "#f5cac3",
    height: "100%",
  },

  main: {
    paddingBottom: 10,
    paddingTop: 10,
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#f7ede2",
  },
  textTitle: {
    textAlign: "center",
    color: "#bc4749",
    fontSize: 50,
    paddingBottom: 10,
  },
  goals: {
    backgroundColor: "#84a59d",
    color: "#fff",
    marginTop: 10,
    flex: 1,
  },
  noGoalsBackground: {
    backgroundColor: "transparent",
   
  },
  goalsItem: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: "#f7ede2",
    borderRadius: 2,
    color: "#f7ede2",
  },
  goalsItemTitle: {
    margin: 5,
    padding: 2,
    textAlign: "center",
    color: "#bc4749",
    backgroundColor: "#f7ede2",
    fontSize: 32,
  },
  noGoalsText: {
    textAlign: "center",
    color: "#bc4749",
    backgroundColor: "#f6bd60",
  },
  flatListContent: {
    flexGrow: 1,
  },
});
