"use client";

import React, { ReactNode } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Link from "next/link";

const drawerWidth = 240;

const questions = [
  { label: "Ques-1", path: "/day-4/Ques-1" },
  { label: "Ques-2", path: "/day-4/Ques-2" },
  { label: "Ques-3", path: "/day-4/Ques-3" },
  { label: "Ques-4", path: "/day-4/Ques-4" },
  { label: "Ques-5", path: "/day-4/Ques-5" },
  { label: "Ques-6", path: "/day-4/Ques-6" },
  { label: "Ques-7", path: "/day-4/Ques-7" },
  { label: "Ques-8", path: "/day-4/Ques-8" },
  { label: "Ques-9", path: "/day-4/Ques-9" },
  { label: "Ques-10", path: "/day-4/Ques-10" },
  { label: "Ques-11", path: "/day-4/Ques-11" },
  { label: "Ques-12", path: "/day-4/Ques-12" },
  { label: "Ques-13", path: "/day-4/Ques-13" },
  { label: "Ques-14", path: "/day-4/Ques-14" },
];

interface Day4LayoutProps {
  children: ReactNode;
}

export default function Day4Layout({ children }: Day4LayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Assignment 4 Navigation
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          {questions.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton component={Link} href={item.path}>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          ml: `${drawerWidth}px`,
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
