import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { color } from "../utils/colors";
import { fontSizes, spacing } from "../utils/size";

export const FocusHistory = ({ history }) => {

    if(!history || !history.length) return <View><Text style = {styles.title} > Nothing You Focued Before </Text></View>
    
    const Item = ({title}) => (
        <View style={styles.item}>
          <Text style={styles.item}> - {title}</Text>
        </View>
      );

    return (
        <View style = {styles.container}>
            <Text style = {styles.title}>Things we Focued On: </Text>
            <FlatList 
                data={history}
                renderItem={({item}) => <Item title={item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: spacing.md,
    },
    item: {
        fontSize: fontSizes.md,
        color: color.darkBlue,
        marginLeft: spacing.md
    },
    title: {
        margin: spacing.md,
        color: color.darkBlue,
        fontWeight: 'bold',
        fontSize: fontSizes.md,
    }
})