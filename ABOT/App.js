import React from "react";
import { StyleSheet, ScrollView, View, RefreshControl, SafeAreaView } from "react-native";
import { Root } from "native-base";
import * as Font from 'expo-font';
import ReviewPto from "./src/pages/ReviewPto";
import SchedulePage from "./src/pages/SchedulePage";
import RequestOff from "./src/pages/RequestOff";
import Avail from "./src/pages/Avail";
import ManageEmployees from "./src/pages/ManageEmployees";
import EmployeeList from "./src/component/EmployeeList";
import Signup from "./src/pages/Signup"

function wait(timeout) {
	return new Promise(resolve => {
	  setTimeout(resolve, timeout);
	});
  }
  
export default function App() {
	const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, [refreshing]);
	return (
<Root>

		{/* <View style={styles.container}> */}
		<SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
			<ManageEmployees/>
			</ScrollView>
			</SafeAreaView>
		{/* </View> */}
</Root>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 10,
		backgroundColor: "#fff",
		alignItems: "stretch",
		justifyContent: "space-evenly"
	},
	scroll: {
		marginHorizontal: 5
	}
});
