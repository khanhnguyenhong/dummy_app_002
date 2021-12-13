import React from 'react';
import {TextInput, Text, View, Button} from 'react-native';

type MyProps = {
  navigation: any;
};
type MyState = {
  resultText: string;
  inputText: string;
};

class DataInputScreen extends React.Component<MyProps, MyState> {
  convertTextToDob = (text: string) => {
    let arr = text.split('/');
    this.setState({resultText: `day ${arr[0]} month ${arr[1]} year ${arr[2]}`});
  };

  state = {
    resultText: 'Please input your birthday',
    inputText: '',
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <TextInput
          style={{height: 40}}
          placeholder="dd/mm/yyyy"
          onChangeText={text => this.convertTextToDob(text)}
        />
        <Text>{this.state.resultText}</Text>
        <Button
          title="See Explanation"
          onPress={() =>
            navigation.navigate('Definition', {
              definition: this.state.resultText,
            })
          }
        />
      </View>
    );
  }
}

export default DataInputScreen;
