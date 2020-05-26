import React, { Component } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import CardFlip from "react-native-card-flip";

import { UDACITY_BLUE } from "../../../utils/colors";
import Button from "../Button/Button";

class Question extends Component {
  state = {
    frontSideUp: true
  };

  constructor(props) {
    super(props);

    this.cardFlipRef = React.createRef();
    props.cardRef(this.cardFlipRef);
  }

  handleCardFlip() {
    this.cardFlipRef.current.flip();
    this.props.cardFlipped();
  }

  render() {
    const { questionData } = this.props;

    const { question, answer } = questionData;

    return (
      <View style={styles.container}>
        <CardFlip style={styles.cardContainer} ref={this.cardFlipRef}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.card}
            isShowing={this.state.frontSideUp}
            onPress={() => this.handleCardFlip()}
          >
            <Text style={styles.label}>{question}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={[styles.card, styles.answer]}
            isShowing={!this.state.frontSideUp}
            onPress={() => this.handleCardFlip()}
          >
            <Text style={styles.label}>{answer}</Text>
          </TouchableOpacity>
        </CardFlip>

        <Text style={{ color: "lightgray", margin: 10 }}>
          Tap the flashcard to flip it!
        </Text>

        <Button
          style={{
            marginTop: 10,
            borderColor: UDACITY_BLUE,
            borderWidth: 1,
            width: "90%"
          }}
          innerColor={UDACITY_BLUE}
          text="Show answer"
          onPress={() => this.handleCardFlip()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  cardContainer: {
    width: Math.round(Dimensions.get("window").width) - 70,
    minHeight: 200,
    alignContent: "center"
  },
  card: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    padding: 20,
    backgroundColor: UDACITY_BLUE,
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.5,
    justifyContent: "center"
  },
  answer: {
    backgroundColor: "#18b300"
  },
  label: {
    textAlign: "center",
    fontSize: 22,
    fontFamily: "System",
    color: "#ffffff",
    backgroundColor: "transparent"
  }
});

export default Question;
