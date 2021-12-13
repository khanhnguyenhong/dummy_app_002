import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  route: any;
};

const DefinitionScreen: React.FC<Props> = props => {
  return (
    <View>
      <Text>Definition</Text>
      <Text>{props.route.params.definition}</Text>
    </View>
  );
};

export default DefinitionScreen;
