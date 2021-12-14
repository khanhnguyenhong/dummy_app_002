import React from 'react';
import {TextInput, Text, View, Button, StyleSheet} from 'react-native';

type MyProps = {
  navigation: any;
};
type MyState = {
  resultText: string;
  inputText: string;
  isValidDate: boolean;
};
const errText = 'Nhập theo định dạng dd/mm/yyyy nhe';
const okiText = 'oki';

const checkDate = (dateString: string) => {
  for (let index = 0; index < dateString.length; index++) {
    if (
      dateString.charCodeAt(index) - 48 > 10 &&
      dateString.charAt(index) != '/'
    ) {
      return errText;
    }
  }
  let arr = dateString.split('/');
  if (arr.length != 3) {
    return errText;
  } else {
    const year = parseInt(arr[2], 10);
    const month = parseInt(arr[1], 10) - 1;
    const date = parseInt(arr[0], 10);
    const tempDate = new Date(year, month, date);
    if (
      tempDate.getDate() != date ||
      tempDate.getMonth() != month ||
      tempDate.getFullYear() != year
    ) {
      return errText;
    }
  }
  return okiText;
};

class DataInputScreen extends React.Component<MyProps, MyState> {
  dateArr = [''];
  convertTextToDob = (text: string) => {
    this.dateArr = text.split('/');
    this.state.inputText = text;
    const errorText = checkDate(text);
    if (errorText == okiText) {
      this.setState({
        resultText: `Ngày ${this.dateArr[0]} tháng ${this.dateArr[1]} năm ${this.dateArr[2]}`,
        isValidDate: true,
      });
    } else {
      this.setState({resultText: errorText});
    }
  };

  state = {
    resultText: 'Nhập ngày sinh',
    inputText: '',
    isValidDate: false,
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="dd/mm/yyyy"
          onChangeText={text => this.convertTextToDob(text)}
        />
        <Text>{this.state.resultText}</Text>
        {this.state.isValidDate && (
          <Button
            title="Xem ý nghĩa"
            onPress={() =>
              navigation.navigate('Definition', {
                dateString: this.state.inputText,
                dateArr: this.dateArr,
              })
            }
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  input: {
    fontSize: 42,
    height: 50,
  },
});

export default DataInputScreen;
