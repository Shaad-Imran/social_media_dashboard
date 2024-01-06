import {
  facebookIcon,
  twitterIcon,
  instagramIcon,
  youtubeIcon,
} from "./assets";

// Data for social media cards
export const socialMediaData = [
  {
    platform: "facebook",
    followersCount: 3820,
    change: 12,
    icon: facebookIcon,
    isPositive: true,
  },
  {
    platform: "twitter",
    followersCount: 1434,
    change: 99,
    icon: twitterIcon,
    isPositive: true,
  },
  {
    platform: "instagram",
    followersCount: "11k",
    change: 158,
    icon: instagramIcon,
    isPositive: true,
  },
  {
    platform: "youtube",
    followersCount: 6269,
    change: -152,
    icon: youtubeIcon,
    isPositive: false,
  },
];

// Data for overview cards
export const overviewData = [
  {
    title: "Page Views",
    icon: facebookIcon,
    count: 87,
    change: 3,
    isPositive: true,
  },
  {
    title: "Likes",
    icon: facebookIcon,
    count: 52,
    change: 2,
    isPositive: false,
  },
  {
    title: "Likes",
    icon: instagramIcon,
    count: 5462,
    change: 2257,
    isPositive: true,
  },
  {
    title: "Profile Views",
    icon: instagramIcon,
    count: 52000,
    change: 1375,
    isPositive: true,
  },
  {
    title: "Retweets",
    icon: twitterIcon,
    count: 117,
    change: 303,
    isPositive: true,
  },
  {
    title: "Likes",
    icon: twitterIcon,
    count: 507,
    change: 553,
    isPositive: true,
  },
  {
    title: "Likes",
    icon: youtubeIcon,
    count: 107,
    change: 19,
    isPositive: false,
  },
  {
    title: "Total Views",
    icon: youtubeIcon,
    count: 1407,
    change: 12,
    isPositive: false,
  },
];
