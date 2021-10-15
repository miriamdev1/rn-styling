import React from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Text, View, StyleSheet } from 'react-native';

export const ConcertListItem = ({navigation, item}) => {

    return (

      <TouchableHighlight onPress={()=> navigation.navigate("Details", {item})}>

			<View style={styles.item}>

				<View style={styles.tab}>

					<Text style={styles.tabText} >

						{item.date.toLocaleDateString("en-us", {day: "2-digit", month:"short"})}

					</Text>

				</View>

				<View>

					<Text style={styles.itemText} >

						{item.name}

					</Text>

				</View>

			</View>

		</TouchableHighlight>

    )

}

const styles = StyleSheet.create({
	item: {
		padding: 1,
		height: 44,
		boderBottomColor: 'lightstellblue',
		borderBottomWidth: StyleSheet.hairlineWidth,

	},
	tab: {
		width: 68,
		backgroundColor: 'black',
		padding: 12,
		position: 'absolute',
		left: 0,

	},
	tabCenter: {
		width: 272,
		padding: 12,
		position: 'absolute',
		right: 0
	},
	tabText: {
		color: 'white',
		fontSize: 14,
		whiteSpace: 'nowrap'
	},
	itemText: {
		paddingLeft: 80,
	}
})
