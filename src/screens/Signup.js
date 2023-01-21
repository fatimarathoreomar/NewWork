import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,LayoutAnimation } from 'react-native';
import {Input, NativeBaseProvider, Button, Icon, Box, Image, useStyledSystemPropsResolver, Center} from 'native-base';
import { FontAwesome5 ,MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const Signup = () => {
    const navigation = useNavigation();
    return (

        <View >


          <View style={styles.Middle} >
             <Image   style={styles.img} alt='some value' source={require('../assets/images/logo.png')} />
             <Text style={styles.cname}>WorkNow</Text>
         </View>   
          {/* <View style={styles.Middle} >
          <Text style={styles.LoginTexttop}>Signup</Text>
          </View> */}
          
          
          {/* username */}
          <View style={styles.buttonStyle}>
            <View style={styles.emailInput}>
                <Input
                    InputLeftElement={
                        <Icon
                             as={<FontAwesome5 name="user-secret"/>}
                             size="sm"
                             m={2}
                             _light={{
                             color:'black',
                            }}
                             _dark={{
                             color:"gray.300"
                            }}
                        />
                
                    }
                     variant = "outline"
                     placeholder = "UserName"
                     _light={{
                     placeholderTextColor: "blueGray.400"
                    }}
                     _dark={{
                     placeholderTextColor: "blueGray.50"
                     }}
               />
             </View>
         </View>

        {/* email */}
         <View style={styles.buttonStyleX}>
            <View style={styles.emailInput}>
                <Input
                    InputLeftElement={
                        <Icon
                            as= {<MaterialCommunityIcons name="email" />}
                            size="sm"
                             m={2}
                             _light={{
                             color:'black',
                            }}
                             _dark={{
                             color:"gray.300"
                            }}
                        />
                
                    }
                     variant = "outline"
                     placeholder = "email"
                     _light={{
                     placeholderTextColor: "blueGray.400"
                    }}
                     _dark={{
                     placeholderTextColor: "blueGray.50"
                     }}
               />
             </View>
         </View>

         {/* password */}
         <View style={styles.buttonStyleX}>
             <View style={styles.emailInput}>
                 <Input
                     InputLeftElement={
                         <Icon
                             as={<FontAwesome5 name="key"/>}
                             size="sm"
                             m={2}
                             _light={{
                                 color:"black"
                            }}
                            _dark={{
                                color:"gray.300"
                            }}
                         />
                     }
                     variant = "outline"
                     secureTextEntry={true}
                     placeholder="password"
                     _light={{
                         placeholderTextColor:"blueGray.400"
                     }}
                     _dark={{
                                color:"blueGray.50"
                            }}

                 />

             </View>
         </View>


         {/* Repeat password */}
         <View style={styles.buttonStyleX}>
             <View style={styles.emailInput}>
                 <Input
                     InputLeftElement={
                         <Icon
                             as={<FontAwesome5 name="key"/>}
                             size="sm"
                             m={2}
                             _light={{
                                 color:"black"
                            }}
                            _dark={{
                                color:"gray.300"
                            }}
                         />
                     }
                     variant = "outline"
                     secureTextEntry={true}
                     placeholder="Repeat password"
                     _light={{
                         placeholderTextColor:"blueGray.400"
                     }}
                     _dark={{
                                color:"blueGray.50"
                            }}

                 />

             </View>
         </View>


         {/* button */}
         <View style={styles.Middle}>
             <Button style={styles.RegisterButton}>
                Register 
             </Button>

         </View>

         <View style={styles.text2}>
               <Text>Already have an account?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
               <Text style={styles.LoginText}> Login</Text>
               </TouchableOpacity> 
          </View>




        </View>
    )
}

export default ()=> {
  return (
      <NativeBaseProvider>
          <Signup/>
      </NativeBaseProvider>
  )

}

const styles= StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  LoginTexttop:{
      
      marginTop:100,
      fontSize:30,
      fontWeight:'bold',

  },
  Middle:{
      alignItems:'center',
      justifyContent:'center',

  },
  text2:{
      flexDirection:'row',
      justifyContent:'center',
      paddingTop:5,

  },
  LoginText:{
      color: '#1779ba',
      fontWeight:'bold',
  },
  emailInput:{
      marginTop:10,
      marginRight:5,

  },
  buttonStyle:{
      marginTop:30,
      marginLeft:15,
      marginRight:15,
      
  },
 
  buttonStyleX:{
      marginTop:12,
      marginLeft:15,
      marginRight:15,
  },
  RegisterButton: {
      backgroundColor: '#1779ba',
      marginTop:20,
      marginBottom:20,
      width: 250,
      borderRadius: Math.round(45 / 2),
      height: 45,
  },
  buttonDesign:{
      backgroundColor:'#026efd',
  },
 
    alreadyAccountText: {
      // fontFamily: 'UbuntuLightItalic',
      fontSize: 12,
      color: 'white',
    },
    loginHereText: {
      color: '#FF9800',
      // fontFamily: 'UbuntuLightItalic',
      fontSize: 12,
    },
  boxStyle:{
      flexDirection:'row',
      marginTop:30,
      marginLeft:15,
      marginRight:15,
      justifyContent:'space-around'


  },
  img:{
    marginTop:100,
    borderRadius: Math.round(100 / 2),
},
cname: {
    color: '#1779ba',
    fontSize: 55,
    fontWeight:'bold',
    // fontFamily: 'UbuntuLight',
    textAlign: 'center',
  },


  
})
