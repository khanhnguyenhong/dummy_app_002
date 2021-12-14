import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  rulingNumberDb,
  RulingNumberDescriptionInterface,
  RulingNumberInterface,
} from '../../db/rulingNumberDB';

type Props = {
  route: any;
};

function getDescription(descriptions: RulingNumberDescriptionInterface[]) {
  let result = [];
  if (!descriptions || !descriptions.length) {
    return [];
  } else {
    for (let i = 0; i < descriptions.length; i++) {
      const newItem = {id: i, ...descriptions[i]};
      if (i > 0 && newItem.type == descriptions[i - 1].type) {
        newItem.type = '';
      }
      result.push(newItem);
    }
  }
  return result;
}

const RulingNumberScreen: React.FC<Props> = props => {
  const rNumber = props.route.params.rulingNumber;
  const rNumberData = rulingNumberDb.find(rN => rN.number == rNumber);
  const descriptions = getDescription(
    rNumberData == undefined ? [] : rNumberData.descriptions,
  );
  return (
    <SafeAreaView>
      <ScrollView>
        {descriptions.map(d => (
          <View style={d.type.length ? styles.mt_20 : null} key={d.id}>
            <Text style={styles.type}>{d.type}</Text>
            <Text style={styles.content}>{d.content}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  type: {
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 7,
  },
  content: {
    fontSize: 14,
    paddingLeft: 14,
    paddingRight: 14,
  },
  mt_20: {
    marginTop: 20,
  },
});

export default RulingNumberScreen;
