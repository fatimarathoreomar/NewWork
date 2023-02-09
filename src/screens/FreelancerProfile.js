import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import RoundedOutlinedContainer from '../components/roundedcontainer';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import SkillList from '../components/SkillList';
import Icon from 'react-native-vector-icons/MaterialIcons';
import StarIcon from 'react-native-vector-icons/Ionicons';
//import axios from 'axios';
import { NativeBaseProvider, Image, useStyledSystemPropsResolver, Center} from 'native-base';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Avatar, Button, Input, ImagePicker, Drawer } from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const FreelancerProfile = () => {

  const [rating, setRating] = useState(4);
  const [bio,setbio] = useState('');
  const [skill,setnewskill] = useState('');
  const [skills,setskills] = useState([]);
  const [udata,setUdata] = useState({
      username:'',
      first_name:'',
      last_name:'',
      email: '',

     })
  const [fdata,setFdata] = useState({
      User_id:'',
      My_image:'',
      bio:'',
      skills: [],
      Projects:[],
      rating:'',
      hourlyRate:'',


     })   
  const navigation = useNavigation();
  
  const AddinLocal = () =>{
    //add a skill
    setskills([...skills,skill]);
    setnewskill('');

  }
  const UploadImage = () =>{

  }
  const SaveChanges= () =>{
    console.log('inhere');
    console.log(bio);
    console.log(skill);
  }

  const ViewSideMenu= () =>{

  }
  const Getfrombackend = () => {
       fetch('http://192.168.1.98:3000/freelancerprofile',{
           method : 'GET',
           headers : {
               'Content-Type':'application/json'
           },
          // body: JSON.stringify(fdata)

       }).then(response => response.json())
       .then(data => {
         console.log(data);
         this.setState({ userData: data });
       })
       .catch(error => console.error(error));
  }

  return(
    <KeyboardAwareScrollView>
    <ScrollView>
    <View>
      
      <View style={styles.container}>
      
      <View style={styles.header}>
      <View style={styles.navbar}>
      <TouchableOpacity
      onPress={ViewSideMenu}>
      <FontAwesome name="navicon" size={28} color="black" />
       </TouchableOpacity>
      </View>


      
    <TouchableOpacity
             style={styles.Buttonsave}
             onPress={SaveChanges}>
            <Text style={styles.ButtonText}>Save</Text>
          
          
    </TouchableOpacity>
    </View>
     
     <View style={styles.container2}>
     
      <Image   style={styles.avatar} alt='some value' source={require('../assets/images/freelancer.webp')} />
      <TouchableOpacity><Icon name="edit" size={25} style={styles.editIcon} color="gray" /></TouchableOpacity>
      </View>
      
   
    
      <Text style={styles.name}>John Doe</Text>
      <View style={styles.header}>
        <Icon name="email" color="#6F6F6F" size={20} />
        <Text style={styles.email}>johndoe@email.com</Text>
      </View>
      <View style={styles.header}>
      {[1, 2, 3, 4, 5].map((star) => (
        <StarIcon
          key={star}
          name={star <= rating ? 'star' : 'ios-star'}
          size={20}
          style={styles.starpadding}
          color="#ffbb33"
        />
      ))}
    </View>
      
    </View>

    
    <View style={styles.bio}>
       <Text style={styles.namebio}>Bio</Text>
       <TextInput 
            style={styles.textInput}
            onChangeText={(text) => setbio(text.trim())}
            returnKeyType="next"
            //onPressIn={() => setErrormsg(null)}
            //variant = "outline"
            placeholder = " Input Bio"
            multiline={true}
            numberOfLines={6}
  
                    
       />
    </View>


    <View style={styles.bio}>
       <View style={styles.header}>
       <Text style={styles.namebio}>Skills</Text>
       <TouchableOpacity
        //style={styles.Button}
        
        onPress={AddinLocal}
        
        >
       <MaterialIcons name="add" size={24} color="black" />

        </TouchableOpacity>
        </View>
       <TextInput 
            style={styles.textInputskills}
            value={skill}
            onChangeText={(text) => setnewskill(text.trim())}
            returnKeyType="next"
            //onPressIn={() => setErrormsg(null)}
            //variant = "outline"
            placeholder = "  Input Skills to add"
            
  
                    
       />
    {/* skills */}
    
    </View>
    <SkillList items={skills}/>
    </View>
     
    </ScrollView>
    </KeyboardAwareScrollView>
  )
}
export default ()=> {
    return (
        <NativeBaseProvider>
            <FreelancerProfile/>
        </NativeBaseProvider>
    )}

    const styles= StyleSheet.create({
    
      email: {
        fontSize: 18,
         color: '#6F6F6F',
         marginLeft: 10,
        },
      editButton: {
         marginTop: 20,
         backgroundColor: '#00BFFF',
       },

       listContainer: {
        flex: 1,
        padding: 16,
      },
      itemContainer: {
        backgroundColor: '#f7f7f7',
        padding: 16,
        borderRadius: 4,
        marginBottom: 16,
      },
      itemText: {
        fontSize: 16,
      },
       containerimg:{
        flexDirection: 'row',
       },
       container: {
         flex: 1,
         alignItems: 'center',
         paddingTop: 50,
       },
       container2: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
      },
       bio: {
         paddingLeft:30,
         paddingRight:15,
         paddingTop:30,
         paddingbottom:10,
       },
       avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 40,
        marginBottom: 20,
       },
       name: {
           fontSize: 22,
           fontWeight: 'bold',
           //marginBottom: 5,
       },
       namebio: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
        paddingLeft:15,
    },
  title: {
    fontSize: 18,
    color: '#6F6F6F',
    marginBottom: 5,
  },
  navbar:{
    top:0,
    right:150,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    //marginBottom: 20,
  },
  header2: {
    flexDirection: 'row',
    alignItems: 'center',
    //marginLeft:60,
    //marginBottom: 20,
  },
  Button: {
    backgroundColor: '#1779ba',
    marginTop:20,
    //marginBottom:20,
    width: 250,
    borderRadius: Math.round(45 / 2),
    height: 45,
},
ButtonText:{
    paddingTop:5,
    color: '#ffffff',
    fontWeight:'bold',
    textAlign: "center",
    fontSize:20,
},
textInput: {

  borderWidth: 1,
  borderColor: 'gray',
  //width: 250,
  borderRadius: Math.round(45 / 2),
  height: 140,
  width:350,
},
textInputskills: {

  borderWidth: 1,
  borderColor: 'gray',
  //width: 250,
  borderRadius: Math.round(30 / 2),
  height: 50,
  width:350,
},
Buttonsave: {
  backgroundColor: '#1779ba',
  borderRadius: Math.round(30 / 2),
  height: 35,
  width:60,
  //position: 'absolute',
  left: 150,
  top: 0,
 
},
editIcon: {
  
  position: 'absolute',
  bottom: 0,
  left: -6,
},
starpadding:{
 paddingTop:5,
},

    })
