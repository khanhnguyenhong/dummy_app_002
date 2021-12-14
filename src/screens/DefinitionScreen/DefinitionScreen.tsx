import React from 'react';
import {View, Text, StyleSheet, Button, ScrollView, SafeAreaView} from 'react-native';
import BirthChart from '../../components/BirthChart';
import SpecialNumberService from '../../services/SpecialNumberService';

type Props = {
  navigation: any;
  route: any;
};

const DefinitionScreen: React.FC<Props> = props => {
  const dateString = props.route.params.dateString;
  const dateArr = props.route.params.dateArr;
  const nameNumbers: string[] = ['', '', '', '', '', '', '', '', '', ''];
  const birthNumbers: string[] = ['', '', '', '', '', '', '', '', '', ''];
  const rulingNumber = SpecialNumberService.calculateRulingNumber(
    dateString.replaceAll('/', ''),
  );
  const lifePeaks = SpecialNumberService.constructLifePeaks(
    dateArr[0],
    dateArr[1],
    dateArr[2],
    rulingNumber,
  );
  const {navigation} = props;

  for (let index = 0; index < dateString.length; index++) {
    const number = dateString.charAt(index);
    birthNumbers[number] += number;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={[styles.birthdayText, styles.mt_20]}>{dateString}</Text>
          <Text style={[styles.mt_20, styles.h2]}>Số chủ đạo</Text>
          <Text style={styles.rulingNumber}>{rulingNumber}</Text>
          <Button
            title="Xem ý nghĩa số chủ đạo"
            onPress={() =>
              navigation.navigate('RulingNumber', {
                rulingNumber: rulingNumber,
              })
            }
          />
          <Text style={[styles.mt_20, styles.h2]}>Biểu đồ ngày sinh</Text>
          <View style={styles.birthChart}>
            <BirthChart
              nameNumbers={nameNumbers}
              birthNumbers={birthNumbers}></BirthChart>
          </View>
          <Text style={[styles.mt_20, styles.h2]}>4 đỉnh cao</Text>
          {lifePeaks.map(lp => (
            <Text key={lp.age}>
              {lp.age} tuổi: số {lp.number}
            </Text>
          ))}
          <Button
            title="Xem ý nghĩa các đỉnh"
            onPress={() =>
              navigation.navigate('LifePeak', {
                lifePeaks: lifePeaks,
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rulingNumber: {
    fontSize: 72,
    color: 'red',
  },
  birthdayText: {
    fontSize: 18,
  },
  birthChart: {
    height: 150,
    width: '75%'
  },
  mt_20: {
    marginTop: 20,
  },
  mb_20: {
    marginBottom: 20,
  },
  h2: {
    fontSize: 24,
    alignSelf: 'center',
    marginBottom: 14,
  },
});

export default DefinitionScreen;
