import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { SidebarNav } from './components';

interface Props {
  onClose: () => void;
  open: boolean;
  variant: 'permanent' | 'persistent' | 'temporary' | undefined;
  pages: {
    landings: Array<PageItem>;
    company: Array<PageItem>;
    account: Array<PageItem>;
    secondary: Array<PageItem>;
    blog: Array<PageItem>;
    portfolio: Array<PageItem>;
  };
}

const Sidebar = ({ pages, open, variant, onClose }: Props): JSX.Element => (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth: 280,
        },
      }}
    >
      <Box
        sx={{
          height: '100%',
          padding: 1,
        }}
      >
        <SidebarNav pages={pages} />
      </Box>
    </Drawer>
  );

export default Sidebar;
