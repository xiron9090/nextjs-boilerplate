import { Box, Divider, MenuItem, MenuList, Popover, Typography } from "@mui/material";
import { FC } from "react";

interface UserMenuProps {
    // open:boolean;
}
 
const UserMenu: FC<UserMenuProps> = () => {
    return (  
        <Popover
        // anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'bottom'
        }}
        // onClose={onClose}
        open={true}
      >
        <Box
          sx={{
            py: 1.5,
            px: 2
          }}
        >
          <Typography variant="overline">
            Account
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
          >
            Anika Visser
          </Typography>
        </Box>
        <Divider />
        <MenuList
          disablePadding
          dense
          sx={{
            p: '8px',
            '& > *': {
              borderRadius: 1
            }
          }}
        >
          <MenuItem >
            Sign out
          </MenuItem>
        </MenuList>
      </Popover>
    );
}
 
export default UserMenu;