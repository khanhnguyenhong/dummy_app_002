import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {LifePeak} from '../../db/lifePeakDB';

type Props = {
  route: any;
};

const LifePeakScreen: React.FC<Props> = props => {
  const lifePeaks: LifePeak[] = props.route.params.lifePeaks;

  return (
    <SafeAreaView>
      <ScrollView>
        {lifePeaks.map(lp => (
          <View style={styles.mt_20} key={lp.age}>
            <Text style={styles.h2}>{lp.age} tuổi: số {lp.number}</Text>
            {lp.descriptions.map(d => (
              <Text key={d.id} style={styles.content}>{d.content}</Text>
            ))}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  h2: {
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 14,
  },
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

export default LifePeakScreen;
