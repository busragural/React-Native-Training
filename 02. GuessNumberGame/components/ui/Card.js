import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

function Card({children}) {
  return <View style= {styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get('window').width;
const styles  = StyleSheet.create({
    card: {
        marginTop: deviceWidth < 380 ? 12 : 24,
        marginHorizontal: 14,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 8,
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: "center",
        alignItems: "center",
      },
});