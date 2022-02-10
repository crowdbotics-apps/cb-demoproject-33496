import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a48/fcef/a58fce94f422d1ba35874b79f71c8054"
        }}
        style={styles.ImageBackground_248_1}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a48/fcef/a58fce94f422d1ba35874b79f71c8054"
        }}
        style={styles.ImageBackground_248_2}
      />
      <View style={styles.View_248_3}>
        <Text style={styles.Text_248_3}>Welcome!</Text>
      </View>
      <View style={styles.View_248_4}>
        <Text style={styles.Text_248_4}>Full name</Text>
      </View>
      <View style={styles.View_248_5}>
        <Text style={styles.Text_248_5}>Jessie Cooper</Text>
      </View>
      <View style={styles.View_248_6}>
        <Text style={styles.Text_248_6}>Do you have children?</Text>
      </View>
      <View style={styles.View_248_7}>
        <Text style={styles.Text_248_7}>Yes</Text>
      </View>
      <View style={styles.View_248_8}>
        <Text style={styles.Text_248_8}>No</Text>
      </View>
      <View style={styles.View_248_9}>
        <Text style={styles.Text_248_9}>Phone number</Text>
      </View>
      <View style={styles.View_248_10}>
        <Text style={styles.Text_248_10}>(208) 555-0112</Text>
      </View>
      <View style={styles.View_248_11}>
        <Text style={styles.Text_248_11}>Address</Text>
      </View>
      <View style={styles.View_248_12}>
        <Text style={styles.Text_248_12}>
          2118 Thornridge Cir. Syracuse, Connecticut 35624
        </Text>
      </View>
      <View style={styles.View_248_13}>
        <Text style={styles.Text_248_13}>Email</Text>
      </View>
      <View style={styles.View_248_14}>
        <Text style={styles.Text_248_14}>janecooper88@gmailcom</Text>
      </View>
      <View style={styles.View_248_15}>
        <Text style={styles.Text_248_15}>Password</Text>
      </View>
      <View style={styles.View_248_16}>
        <Text style={styles.Text_248_16}>*******************</Text>
      </View>
      <View style={styles.View_248_17} />
      <View style={styles.View_248_18} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1364/8964/e6a96f1c44236f649395c37809e72cdf"
        }}
        style={styles.ImageBackground_248_21}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1364/8964/e6a96f1c44236f649395c37809e72cdf"
        }}
        style={styles.ImageBackground_248_22}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1364/8964/e6a96f1c44236f649395c37809e72cdf"
        }}
        style={styles.ImageBackground_248_23}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1364/8964/e6a96f1c44236f649395c37809e72cdf"
        }}
        style={styles.ImageBackground_248_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1364/8964/e6a96f1c44236f649395c37809e72cdf"
        }}
        style={styles.ImageBackground_248_25}
      />
      <View style={styles.View_248_26} />
      <View style={styles.View_248_27}>
        <Text style={styles.Text_248_27}>Edit</Text>
      </View>
      <View style={styles.View_248_30}>
        <Text style={styles.Text_248_30}>Check-in</Text>
      </View>
      <View style={styles.View_248_114}>
        <Text style={styles.Text_248_114}>Recordings</Text>
      </View>
      <View style={styles.View_248_118}>
        <Text style={styles.Text_248_118}>Calls</Text>
      </View>
      <View style={styles.View_248_31}>
        <Text style={styles.Text_248_31}>Emergency</Text>
      </View>
      <View style={styles.View_248_35}>
        <Text style={styles.Text_248_35}>
          To frequently check in your safety and send to you help if needed
          without any other action required from you.
        </Text>
      </View>
      <View style={styles.View_248_115}>
        <Text style={styles.Text_248_115}>
          You can add 3 trigger words to start recording audio and 3 trigger
          words to stop recording, for audio records that will be kept in your
          account but not in your phone
        </Text>
      </View>
      <View style={styles.View_248_119}>
        <Text style={styles.Text_248_119}>
          Set the default trigger words for calling the police and ambulance.
        </Text>
      </View>
      <View style={styles.View_248_36}>
        <Text style={styles.Text_248_36}>
          You can add 3 emergency trigger words. When you trigger an alarm in
          the mobile app, based on the triggered word, different calls or SMS
          will go to the Emergency Contacts.
        </Text>
      </View>
      <View style={styles.View_248_38} />
      <View style={styles.View_248_40} />
      <View style={styles.View_248_128} />
      <View style={styles.View_248_123} />
      <View style={styles.View_248_129} />
      <View style={styles.View_248_134} />
      <View style={styles.View_248_125} />
      <View style={styles.View_248_130} />
      <View style={styles.View_248_135} />
      <View style={styles.View_248_49}>
        <Text style={styles.Text_248_49}>Add word</Text>
      </View>
      <View style={styles.View_248_51}>
        <Text style={styles.Text_248_51}>Add word</Text>
      </View>
      <View style={styles.View_248_131}>
        <Text style={styles.Text_248_131}>Add word</Text>
      </View>
      <View style={styles.View_248_124}>
        <Text style={styles.Text_248_124}>Add word</Text>
      </View>
      <View style={styles.View_248_132}>
        <Text style={styles.Text_248_132}>Add word</Text>
      </View>
      <View style={styles.View_248_136}>
        <Text style={styles.Text_248_136}>Add word</Text>
      </View>
      <View style={styles.View_248_126}>
        <Text style={styles.Text_248_126}>Add word</Text>
      </View>
      <View style={styles.View_248_133}>
        <Text style={styles.Text_248_133}>Add word</Text>
      </View>
      <View style={styles.View_248_137}>
        <Text style={styles.Text_248_137}>Add word</Text>
      </View>
      <View style={styles.View_248_59}>
        <View style={styles.View_248_60}>
          <Text style={styles.Text_248_60}>My profile</Text>
        </View>
        <View style={styles.View_248_61}>
          <Text style={styles.Text_248_61}>My files</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b03/f8be/fc14a76881938207ace578f276097b9e"
          }}
          style={styles.ImageBackground_248_62}
        />
        <View style={styles.View_248_67}>
          <Text style={styles.Text_248_67}>Journal</Text>
        </View>
        <View style={styles.View_248_68}>
          <Text style={styles.Text_248_68}>Learn</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75f2/c256/9cdf851d259775cf0b2974666ad0a392"
          }}
          style={styles.ImageBackground_248_69}
        />
        <View style={styles.View_248_73} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fdc8/5639/90efada53887c6fa836fbfe5ea068f47"
          }}
          style={styles.ImageBackground_248_74}
        />
        <View style={styles.View_248_78} />
        <View style={styles.View_248_79} />
        <View style={styles.View_248_80} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5975/5aeb/925274f52f9ed471213ee4038edbd781"
          }}
          style={styles.ImageBackground_248_81}
        />
      </View>
      <View style={styles.View_248_86}>
        <Text style={styles.Text_248_86}>Log out</Text>
      </View>
      <View style={styles.View_248_87}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c000/d60f/2ed55efa99122964a74ed2e44e3b28aa"
          }}
          style={styles.ImageBackground_248_88}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/87c2/3a83/bdaca760382b6dd1654465198b9a2501"
          }}
          style={styles.ImageBackground_248_90}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6ed2/d149/2d48630b1063633bd11dd97ddd88dba9"
          }}
          style={styles.ImageBackground_248_98}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dde9/0458/314d08f597215d5974d7d7194e23c46d"
          }}
          style={styles.ImageBackground_248_99}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e26e/1eae/de83284822d8f8ca4d5e54f8d2b2efe8"
          }}
          style={styles.ImageBackground_248_100}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ea/27ee/65dc2c23b3f6a9d8f31c67a319327d28"
        }}
        style={styles.ImageBackground_248_103}
      />
      <View style={styles.View_254_6} />
      <View style={styles.View_254_7}>
        <Text style={styles.Text_254_7}>Download</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("312%") },
  ImageBackground_248_1: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("453%"),
    minHeight: hp("453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_248_2: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("453%"),
    minHeight: hp("453%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%"),
    top: hp("0%")
  },
  View_248_3: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_248_3: {
    color: "rgba(7, 163, 186, 1)",
    fontSize: 16.739622116088867,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_4: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("59%"),
    justifyContent: "center"
  },
  Text_248_4: {
    color: "rgba(145, 38, 142, 1)",
    fontSize: 9.703072547912598,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_5: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("63%"),
    justifyContent: "center"
  },
  Text_248_5: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 9.703072547912598,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_6: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("68%"),
    justifyContent: "center"
  },
  Text_248_6: {
    color: "rgba(145, 38, 142, 1)",
    fontSize: 9.703072547912598,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_7: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("68%"),
    justifyContent: "center"
  },
  Text_248_7: {
    color: "rgba(145, 38, 142, 1)",
    fontSize: 9.703072547912598,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_8: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("68%"),
    justifyContent: "center"
  },
  Text_248_8: {
    color: "rgba(145, 38, 142, 1)",
    fontSize: 9.703072547912598,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_9: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("73%"),
    justifyContent: "center"
  },
  Text_248_9: {
    color: "rgba(145, 38, 142, 1)",
    fontSize: 9.703072547912598,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_10: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("77%"),
    justifyContent: "center"
  },
  Text_248_10: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 9.703072547912598,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_11: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("81%"),
    justifyContent: "center"
  },
  Text_248_11: {
    color: "rgba(145, 38, 142, 1)",
    fontSize: 9.703072547912598,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_12: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("85%"),
    justifyContent: "center"
  },
  Text_248_12: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 9.703072547912598,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_13: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("89%"),
    justifyContent: "center"
  },
  Text_248_13: {
    color: "rgba(145, 38, 142, 1)",
    fontSize: 9.703072547912598,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_14: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("93%"),
    justifyContent: "center"
  },
  Text_248_14: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 9.703072547912598,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_15: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("97%"),
    justifyContent: "center"
  },
  Text_248_15: {
    color: "rgba(145, 38, 142, 1)",
    fontSize: 9.703072547912598,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_16: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("101%"),
    justifyContent: "center"
  },
  Text_248_16: {
    color: "rgba(120, 120, 120, 1)",
    fontSize: 9.703072547912598,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_17: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("68%"),
    backgroundColor: "rgba(145, 38, 142, 1)",
    borderColor: "rgba(145, 38, 142, 1)",
    borderWidth: 0.9752560257911682
  },
  View_248_18: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("68%"),
    borderColor: "rgba(145, 38, 142, 1)",
    borderWidth: 0.9752560257911682
  },
  ImageBackground_248_21: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("65%")
  },
  ImageBackground_248_22: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("79%")
  },
  ImageBackground_248_23: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("87%")
  },
  ImageBackground_248_24: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("96%")
  },
  ImageBackground_248_25: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("104%")
  },
  View_248_26: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("112%"),
    backgroundColor: "rgba(7, 163, 186, 1)"
  },
  View_248_27: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("113%"),
    justifyContent: "center"
  },
  Text_248_27: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.799999237060547,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_30: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("173%"),
    justifyContent: "center"
  },
  Text_248_30: {
    color: "rgba(145, 38, 142, 1)",
    fontSize: 16.739622116088867,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_114: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("205%"),
    justifyContent: "center"
  },
  Text_248_114: {
    color: "rgba(145, 38, 142, 1)",
    fontSize: 16.739622116088867,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_118: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("254%"),
    justifyContent: "center"
  },
  Text_248_118: {
    color: "rgba(145, 38, 142, 1)",
    fontSize: 16.739622116088867,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_31: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("124%"),
    justifyContent: "center"
  },
  Text_248_31: {
    color: "rgba(145, 38, 142, 1)",
    fontSize: 16.739622116088867,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_35: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("180%"),
    justifyContent: "center"
  },
  Text_248_35: {
    color: "rgba(146, 39, 143, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_115: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("212%"),
    justifyContent: "center"
  },
  Text_248_115: {
    color: "rgba(146, 39, 143, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_119: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("262%"),
    justifyContent: "center"
  },
  Text_248_119: {
    color: "rgba(146, 39, 143, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_36: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("131%"),
    justifyContent: "center"
  },
  Text_248_36: {
    color: "rgba(146, 39, 143, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_38: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("193%"),
    backgroundColor: "rgba(189, 117, 201, 1)"
  },
  View_248_40: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("144%"),
    backgroundColor: "rgba(189, 117, 201, 1)"
  },
  View_248_128: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("225%"),
    backgroundColor: "rgba(189, 117, 201, 1)"
  },
  View_248_123: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("152%"),
    backgroundColor: "rgba(189, 117, 201, 1)"
  },
  View_248_129: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("234%"),
    backgroundColor: "rgba(189, 117, 201, 1)"
  },
  View_248_134: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("275%"),
    backgroundColor: "rgba(189, 117, 201, 1)"
  },
  View_248_125: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("160%"),
    backgroundColor: "rgba(189, 117, 201, 1)"
  },
  View_248_130: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("242%"),
    backgroundColor: "rgba(189, 117, 201, 1)"
  },
  View_248_135: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("283%"),
    backgroundColor: "rgba(189, 117, 201, 1)"
  },
  View_248_49: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("195%"),
    justifyContent: "center"
  },
  Text_248_49: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_248_51: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("144%"),
    justifyContent: "center"
  },
  Text_248_51: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_248_131: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("225%"),
    justifyContent: "center"
  },
  Text_248_131: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_248_124: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("152%"),
    justifyContent: "center"
  },
  Text_248_124: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_248_132: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("234%"),
    justifyContent: "center"
  },
  Text_248_132: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_248_136: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("275%"),
    justifyContent: "center"
  },
  Text_248_136: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_248_126: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("160%"),
    justifyContent: "center"
  },
  Text_248_126: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_248_133: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("242%"),
    justifyContent: "center"
  },
  Text_248_133: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_248_137: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("283%"),
    justifyContent: "center"
  },
  Text_248_137: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_248_59: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("11%")
  },
  View_248_60: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_248_60: {
    color: "rgba(7, 163, 186, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_61: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("15%"),
    justifyContent: "center"
  },
  Text_248_61: {
    color: "rgba(7, 163, 186, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_248_62: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_248_67: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("29%"),
    justifyContent: "center"
  },
  Text_248_67: {
    color: "rgba(7, 163, 186, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_68: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("43%"),
    justifyContent: "center"
  },
  Text_248_68: {
    color: "rgba(7, 163, 186, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_248_69: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_248_73: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(7, 163, 186, 1)",
    borderColor: "rgba(7, 163, 186, 1)",
    borderWidth: 1.819173812866211
  },
  ImageBackground_248_74: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_248_78: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    borderColor: "rgba(7, 163, 186, 1)",
    borderWidth: 1.819173812866211
  },
  View_248_79: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    borderColor: "rgba(7, 163, 186, 1)",
    borderWidth: 1.819173812866211
  },
  View_248_80: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%"),
    borderColor: "rgba(7, 163, 186, 1)",
    borderWidth: 1.819173812866211
  },
  ImageBackground_248_81: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_248_86: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("131%"),
    justifyContent: "center"
  },
  Text_248_86: {
    color: "rgba(7, 163, 186, 1)",
    fontSize: 9.703072547912598,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_248_87: {
    width: wp("6%"),
    height: hp("13%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_248_88: {
    width: wp("3%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_248_90: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_248_98: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_248_99: {
    width: wp("3%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_248_100: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_248_103: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("17%"),
    resizeMode: "cover"
  },
  View_254_6: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("63%"),
    backgroundColor: "rgba(7, 163, 186, 1)"
  },
  View_254_7: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("65%"),
    justifyContent: "center"
  },
  Text_254_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
