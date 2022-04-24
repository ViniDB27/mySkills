import React, { useState } from "react";
import { Text, StyleSheet, SafeAreaView, FlatList } from "react-native";

import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { SkillCard } from "../components/SkillCard";

export function Home() {
  const [newSkill, setNewSkill] = useState("");
  const [skills, setSkills] = useState([]);

  function handleAddNewSkill() {
    setSkills((odlSkills) => [...odlSkills, newSkill]);
  }

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.title}>Welcome, Vinicio</Text>
      <Input value={newSkill} onChangeText={setNewSkill} />

      <Button onPress={handleAddNewSkill} />

      <Text style={[style.title, { marginVertical: 20 }]}>My Skills</Text>

      <FlatList
        style={style.list}
        data={skills}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <SkillCard key={item} skill={item} />}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121015",
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  list: {
    flex: 1,
  },
});
