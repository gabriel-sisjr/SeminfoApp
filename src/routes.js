import React from 'react'
import { createAppContainer } from 'react-navigation'
//import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from "react-navigation-stack";

// Paginas
import Home from './pages/Home'
import Repos from './pages/Repos'
import RepoById from './pages/Repos/RepoById';

export default Routes = createAppContainer(
    createStackNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                header: null
            }
        },
        Repos: {
            screen: Repos,
            navigationOptions: {
                title: "Repositórios",
            }
        },
        RepoById: {
            screen: RepoById,
            navigationOptions: {
                title: 'Repositório por Id'
            }
        }
    })
)
