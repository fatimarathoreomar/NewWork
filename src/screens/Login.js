import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,LayoutAnimation } from 'react-native';
import {Input, NativeBaseProvider, Button, Icon, Box, Image, useStyledSystemPropsResolver, Center} from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';
//type LoginScreenProps = {};
// const [username, setUsername] = useState<string>('');
// const [email, setEmail] = useState<string>('');
// const [password, setPassword] = useState<string>('');
// const [validEmail, setEmailValid] = useState<boolean>(true);
// const [validPassword, setPasswordValid] = useState<boolean>(true);
// const [validUsername, setUsernameValid] = useState<boolean>(true);
 // Enable LayoutAnimation on Android
// UIManager.setLayoutAnimationEnabledExperimental &&
// UIManager.setLayoutAnimationEnabledExperimental(true);

const Login = () => {
    const navigation = useNavigation();
    
    return (
        //background: linear-gradient(90deg, #FDBB2D 0%, #3A1C71 100%);
        //background: linear-gradient(90deg, #0700b8 0%, #00ff88 100%);
         <View >
         {/* //background: linear-gradient(90deg, #FDBB2D 0%, #3A1C71 100%);
          //background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%); */}
          {/* <LinearGradient
        //colors={[ '#3A1C71','#FDBB2D']}
        //colors={[ '#00ff88','#0700b8']}
        colors={[ '#FDBB2D','#3adb76']}
        style={styles.linearGradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
       > */}
         <View style={styles.Middle} >
             <Image   style={styles.img} alt='some value' source={require('../assets/images/logo.png')} />
             <Text style={styles.cname}>WorkNow</Text>
         </View>
        
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
                     placeholder = "Email or Username"
                     _light={{
                     placeholderTextColor: "blueGray.400"
                    }}
                     _dark={{
                     placeholderTextColor: "blueGray.50"
                     }}
               />
             </View>
         </View>

         
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
          
        <View style={styles.Middle}>
             <Button style={styles.LoginButton}>
                LOGIN
             </Button>

         </View> 

         
        
         <View style={styles.text2}>
          <Text>New to WorkNow?</Text>
          <TouchableOpacity onPress={()=> navigation.navigate("Signup")}>
              <Text style={styles.signupText}> Sign up</Text>
          </TouchableOpacity>
        </View> 
      
     {/* </LinearGradient>  */}
    </View> 
    )
}

export default ()=> {
    return (
        <NativeBaseProvider>
            <Login/>
        </NativeBaseProvider>
    )

}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
    LoginText:{
        
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
    signupText:{
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
    LoginButton: {
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
    lineStyle:{
        flexDirection:'row',
        marginTop:30,
        marginLeft:15,
        marginRight:15,
        alignItems:'center',

    },
    loginHereContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
    

    
})
