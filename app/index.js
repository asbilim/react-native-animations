import { MotiView,MotiText,AnimatePresence} from "moti";
import { Dimensions } from "react-native";
import { useState } from "react";

export default function Main(){
    
    const [isLoading,setIsLoading] = useState(isLoading=>true)

    const sleep = async (time)=>{
        return new Promise((resolve,reject)=>{
            setTimeout(resolve,1000*time)
        })
    }

    const {width,height} = Dimensions.get('screen')

    const Skeleton = ()=>{
        return (
            <MotiView
                style={{flex:1,height:height,flexDirection:'row',flexWrap:'wrap',justifyContent:"space-around",alignItems:"center",padding:20,gap:20}}
                from={{width:0}}
                animate={{width:"100%"}}
                exit={{translateX:4000,opacity:0}}
                transition={{
                    duration:200
                }}
            >
                <MotiView style={{width:100,height:100,backgroundColor:"gray",borderRadius:25}} from={{opacity:0.4}} animate={{opacity:1}} transition={{duration:900,loop:true,type:"timing",repeatReverse:true}}></MotiView>
                <MotiView style={{width:100,height:100,backgroundColor:"gray",borderRadius:25}} from={{opacity:0.4}} animate={{opacity:1}} transition={{duration:900,loop:true,type:"timing",repeatReverse:true}}></MotiView>
                <MotiView style={{width:100,height:100,backgroundColor:"gray",borderRadius:25}} from={{opacity:0.4}} animate={{opacity:1}} transition={{duration:900,loop:true,type:"timing",repeatReverse:true}}></MotiView>
                <MotiView style={{width:100,height:100,backgroundColor:"gray",borderRadius:25}} from={{opacity:0.4}} animate={{opacity:1}} transition={{duration:900,loop:true,type:"timing",repeatReverse:true}}></MotiView>
                <MotiView style={{width:100,height:100,backgroundColor:"gray",borderRadius:25}} from={{opacity:0.4}} animate={{opacity:1}} transition={{duration:900,loop:true,type:"timing",repeatReverse:true}}></MotiView>
                <MotiView style={{width:100,height:100,backgroundColor:"gray",borderRadius:25}} from={{opacity:0.4}} animate={{opacity:1}} transition={{duration:900,loop:true,type:"timing",repeatReverse:true}}></MotiView>
                <MotiView style={{width:100,height:100,backgroundColor:"gray",borderRadius:25}} from={{opacity:0.4}} animate={{opacity:1}} transition={{duration:900,loop:true,type:"timing",repeatReverse:true}}></MotiView>
                <MotiView style={{width:100,height:100,backgroundColor:"gray",borderRadius:25}} from={{opacity:0.4}} animate={{opacity:1}} transition={{duration:900,loop:true,type:"timing",repeatReverse:true}}></MotiView>
                <MotiView style={{width:100,height:100,backgroundColor:"gray",borderRadius:25}} from={{opacity:0.4}} animate={{opacity:1}} transition={{duration:900,loop:true,type:"timing",repeatReverse:true}}></MotiView>
                <MotiView style={{width:100,height:100,backgroundColor:"gray",borderRadius:25}} from={{opacity:0.4}} animate={{opacity:1}} transition={{duration:900,loop:true,type:"timing",repeatReverse:true}}></MotiView>

            </MotiView>
        )
    }

    return (
        <AnimatePresence

        >
            {
                isLoading?(
                    <Skeleton />
                ):(

                <MotiView
                    style={{
                        flex:1,
                        alignItems:"center",
                        justifyContent:"center"
                    }}
                    from={{opacity:0,scale:0.5}}
                    animate={{opacity:1,scale:1}}
                    transition={{
                        type:"timing",
                        duration:2000
                    }}
                >
                    <MotiText
                        style={{fontSize:44,fontWeight:600,textAlign:"center"}}
                        from={{translateX:-4100}}
                        animate={{translateX:0}}
                        exit={{translateX:400}}
                        transition={{
                            duration:200,

                        }}
                    >hello world we welcome You</MotiText>
                </MotiView>
                )
            }
        </AnimatePresence>
    )

}