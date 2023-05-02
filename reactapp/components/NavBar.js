import { Icon} from "react-native-elements"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MainPage from "./MainPage"
import Region from "./Region"
import Departments from "./Departments"

const Tab = createBottomTabNavigator()

function NavBar() {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name= "Home"
            component={MainPage}
            options={{
                tabBarIcon:({color, size}) => (
                    <Icon name="heart" type="font-awesome" color={color} size={size} />
                ),
            }}/>

            <Tab.Screen
            name= "Regions"
            component={Region}
            options={{
                tabBarIcon:({color, size}) => (
                    <Icon name="map" type="font-awesome" color={color} size={size} />
                ),
            }}/>

            <Tab.Screen
            name= "Departments"
            component={Departments}
            options={{
                tabBarIcon:({color, size}) => (
                    <Icon name="map" type="font-awesome" color={color} size={size} />
                ),
            }}/>
            
        </Tab.Navigator>
    )
}
export default NavBar