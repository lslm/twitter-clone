import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <AppBar sx={{ position: 'fixed', zIndex: 10 }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Twitter
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
