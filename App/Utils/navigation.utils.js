/**
 * Utils functions related to navigation
 */

import tabBarIconsConfig from '../Config/tabBarIcons.config';

export const GetTabIcon = (routeName) => {
    return tabBarIconsConfig[routeName];
}