import { ActivityIcon } from "../components/navs/icons/activity-icon";
import { AnalyticsIcon } from "../components/navs/icons/analytics-icon";
import { DashboardIcon } from "../components/navs/icons/dashboard-icon";
import { EditProfileIcon } from "../components/navs/icons/edot-profile-icon";
import { InboxIcon } from "../components/navs/icons/inbox-ixon";
import { SettingsIcon } from "../components/navs/icons/settings-icon";

export const navLinks = [
  {
    name: 'Dashboard',
    path: '/',
    icon: DashboardIcon,
  },
  {
    name: 'Analytics',
    icon: AnalyticsIcon,
    path: '/',
  },
  {
    name: 'Inbox',
    path: '/',
    icon: InboxIcon,
  },
  {
    name: 'Activity',
    path: '/',
    icon: ActivityIcon,
  },
  {
    name: 'Edit Profile',
    path: '/',
    icon: EditProfileIcon,
  },
  {
    name: 'Settings',
    path: '/',
    icon: SettingsIcon,
  },
];
