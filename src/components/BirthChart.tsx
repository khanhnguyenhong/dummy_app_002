import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  birthNumbers: string[];
  nameNumbers: string[];
};

const BirthChart: React.FC<Props> = props => {
  return (
    <View style={styles.chart}>
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.birthNumber}>{props.birthNumbers[3]}</Text>
          <Text style={styles.nameNumber}>{props.nameNumbers[3]}</Text>
        </View>

        <View style={styles.cell}>
          <Text style={styles.birthNumber}>{props.birthNumbers[6]}</Text>
          <Text style={styles.nameNumber}>{props.nameNumbers[6]}</Text>
        </View>

        <View style={styles.cell}>
          <Text style={styles.birthNumber}>{props.birthNumbers[9]}</Text>
          <Text style={styles.nameNumber}>{props.nameNumbers[9]}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.birthNumber}>{props.birthNumbers[2]}</Text>
          <Text style={styles.nameNumber}>{props.nameNumbers[2]}</Text>
        </View>

        <View style={styles.cell}>
          <Text style={styles.birthNumber}>{props.birthNumbers[5]}</Text>
          <Text style={styles.nameNumber}>{props.nameNumbers[5]}</Text>
        </View>

        <View style={styles.cell}>
          <Text style={styles.birthNumber}>{props.birthNumbers[8]}</Text>
          <Text style={styles.nameNumber}>{props.nameNumbers[8]}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.birthNumber}>{props.birthNumbers[1]}</Text>
          <Text style={styles.nameNumber}>{props.nameNumbers[1]}</Text>
        </View>

        <View style={styles.cell}>
          <Text style={styles.birthNumber}>{props.birthNumbers[4]}</Text>
          <Text style={styles.nameNumber}>{props.nameNumbers[4]}</Text>
        </View>

        <View style={styles.cell}>
          <Text style={styles.birthNumber}>{props.birthNumbers[7]}</Text>
          <Text style={styles.nameNumber}>{props.nameNumbers[7]}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chart: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    flex: 1,
    width: '100%',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cell: {
    flex: 1,
    borderColor: 'black',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 50,
  },
  birthNumber: {
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameNumber: {
    color: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default BirthChart;
