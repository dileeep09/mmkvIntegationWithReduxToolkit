import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setName} from './Redux/Actions';

const App = () => {
  const [userName, setUserName] = useState('');
  const name = useSelector(state => state?.name);
  const dispatch = useDispatch();
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <TextInput
        style={{
          width: '80%',
          borderWidth: 1,
          borderColor: 'black',
          alignSelf: 'center',
        }}
        onChangeText={setUserName}
      />
      <Text style={{color: 'black',alignSelf:'center'}}>{name}</Text>
      <Button
        title="Save"
        onPress={() => {
          dispatch(setName(userName));
        }}
        
      />
    </View>
  );
};

export default App;
