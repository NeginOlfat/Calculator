import React from "react";
import {View,Text, StyleSheet} from "react-native";
import Button from "./Components/Button"
import calculate,{initialState} from "./Components/calculate";
class App extends React.Component{
  constructor(props){
    super(props);
    this.state=initialState
  }

  handleTap = (type, value) =>{
    this.setState(state => calculate(type, value, state));
  }

  render(){
    return(
      <View style={styles.container}>
        <View>
          <Text style={styles.previousValue}>
            {(this.state.previousValue === null)? '' : parseFloat(this.state.previousValue)}
          </Text>
          <Text style={styles.operator}>
            {this.state.operator}
          </Text>
          <Text style={styles.currentValue}>{parseFloat(this.state.currentValue)}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <Button text='C' theme='secondary' onPress={() => this.handleTap('clear')}/>
          <Button text='-/+'  theme='secondary' onPress={() => this.handleTap('neg-pos')}/>
          <Button text='%' theme='secondary' onPress={() => this.handleTap('perantage')}/>
          <Button text='/' theme='third' onPress={() => this.handleTap('operator','/')}/>
        </View>

        <View style={{flexDirection:'row'}}>
          <Button text='7' onPress={() => this.handleTap('number','7')}/>
          <Button text='8' onPress={() => this.handleTap('number','8')}/>
          <Button text='9' onPress={() => this.handleTap('number','9')}/>
          <Button text='x' theme='third' onPress={() => this.handleTap('operator','x')}/>
        </View>

        <View style={{flexDirection:'row'}}>
          <Button text='4' onPress={() => this.handleTap('number','4')}/>
          <Button text='5' onPress={() => this.handleTap('number','5')}/>
          <Button text='6' onPress={() => this.handleTap('number','6')}/>
          <Button text='-' theme='third' onPress={() => this.handleTap('operator','-')}/>
        </View>

        <View style={{flexDirection:'row'}}>
          <Button text='1' onPress={() => this.handleTap('number','1')}/>
          <Button text='2' onPress={() => this.handleTap('number','2')}/>
          <Button text='3' onPress={() => this.handleTap('number','3')}/>
          <Button text='+' theme='third' onPress={() => this.handleTap('operator','+')}/>
        </View>

        <View style={{flexDirection:'row'}}>
          <Button text='0' size='double' onPress={() => this.handleTap('number','0')}/>
          <Button text='.' onPress={() => this.handleTap('number','.')}/>
          <Button text='=' theme='third' onPress={() => this.handleTap('equal')}/>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end"
  },
  currentValue: {
    color: "#fff",
    fontSize: 40,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 20
  },
  previousValue:{
    color: "#D1D1D1",
    fontSize: 38,
    textAlign: "right",
    marginRight: 25,
    marginBottom: 20
  },
  operator:{
    color: "#D1D1D1",
    fontSize: 38,
    textAlign: "left",
    marginLeft: 10,
    marginBottom: 20
  }
});

export default App;