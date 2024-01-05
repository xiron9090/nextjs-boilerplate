import { Avatar as MTAvatar, AvatarProps as MTAvatarProps } from "@mui/material";
type AvatarProps = {}&MTAvatarProps;
export const Avatar = ( props:AvatarProps) => {
  return <MTAvatar  {...props}/>;
};
