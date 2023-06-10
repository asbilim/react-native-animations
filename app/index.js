import { ScrollView } from "react-native-gesture-handler";
import { View,Animated,Text,FlatList,ImageBackground,Dimensions,Image,SafeAreaView } from "react-native";
import bg from "../assets/bg.jpg"
import {COLORS} from "../constants/colors"
import { BlurView } from "expo-blur";
import {faker} from "@faker-js/faker"
import { StatusBar } from "expo-status-bar";
import { useRef } from "react";


const DATA = [...Array(30).keys()].map(() =>{
    
    const randomNumber = Math.floor(Math.random()*2)
    randomImage = Math.floor(Math.random()*31)
    const array = ['women',"men"]
    
    return (
        {
            key: faker.animal.bird(),
            name:faker.person.firstName(),
            jobTitle:faker.person.jobTitle(),
            email:faker.internet.email(),
            id:faker.phone,
            image: `https://randomuser.me/api/portraits/${array[randomNumber]}/${randomImage}.jpg`,
        
        }
    )
} );


export default function Main(){

    const {width, height} = Dimensions.get('screen')
    const scrollY = useRef(new Animated.Value(0)).current
    const ITEM_SIZE = height > 810 ? 110 : 130
    console.log(height)
    console.log(ITEM_SIZE)

    return (
        
        <SafeAreaView style={{flex:1}}>
            <StatusBar hidden />
            <BlurView
                intensity={100}
                style={{
                    width:"100%",
                    position:"absolute",
                    top:0,
                    height:height
                }}
            >
                <ImageBackground 
                    source={bg}
                    style={{resizeMode:"contain",flex:1}}
                    blurRadius={20}
                >
                        <Animated.FlatList  
                            data={DATA}
                            keyExtractor={item=>item.phone}
                            contentContainerStyle={{
                                padding:20,
                                paddingTop:StatusBar.currentHeight||42
                            }}
                            onScroll={Animated.event(
                                [
                                    {
                                        nativeEvent:{contentOffset:{y:scrollY}}
                                    }
                                ],
                                {
                                    useNativeDriver:true,
                                }
                            )}
                            renderItem={({item,index})=>{

                                const input_range = [
                                    -1,0,ITEM_SIZE*index,ITEM_SIZE*(index+2)
                                ]

                                const scale = scrollY.interpolate({
                                    inputRange:input_range,
                                    outputRange:[1,1,1,0]

                                })

                                const opacity = scrollY.interpolate({
                                    inputRange:input_range,
                                    outputRange:[1,1,1,0]

                                })

                                return (
                                <Animated.View
                                    style={{
                                        backgroundColor:"white",
                                        marginVertical:15,
                                        justifyContent:"space-around",
                                        padding:10,
                                        gap:10,
                                        alignItems:"center",
                                        flex:1,
                                        flexDirection:"row",
                                        marginHorizontal:25,
                                        borderRadius:10,
                                        shadowColor:COLORS.black,
                                        shadowOffset:{
                                            width:0,
                                            height:10
                                        },
                                        shadowRadius:20,
                                        transform:[{scale}],
                                        opacity
                                    }}
                                    key={index}
                                >
                                    <Image source={{uri:item.image}} style={{width:50,height:50,borderRadius:25,resizeMode:"contain",backgroundColor:COLORS.orange}} />
                                    <View 
                                        style={{flex:1,justifyContent:"flex-end",alignItems:"center",gap:4}}
                                    >
                                        <Text style={{fontSize:18,fontWeight:600,color:COLORS.black}}>{item.name}</Text>
                                        <Text style={{fontSize:14,fontWeight:400,color:COLORS.black}}>{item.email}</Text>
                                        <Text style={{fontSize:14,fontWeight:400,color:COLORS.primary}}>{item.jobTitle}</Text>
                                    </View>
                                </Animated.View>
                                )
                            }
                            }
                        />
                    
                </ImageBackground>

            </BlurView>
            
        </SafeAreaView>

     
    )

}