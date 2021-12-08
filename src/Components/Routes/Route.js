import Dashboard from "views/Dashboard.js";
import UserProfile from "views/requestforaprooval";
import emergencyrequest from "views/emergencyrequest.js";
import rostermanagement from "views/rostermanagement.js";
import assigndrivers from "views/assigndrivers";


const dashboardRoutes = [
  
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "	fas fa-desktop",
    component: Dashboard,
    layout: "/admin",
  },



  {
    path: "/user",
    name: "Aprooval",
    icon: "	far fa-edit",
    component: UserProfile,
    layout: "/admin",
  },

  {
    path: "/assigndrivers",
    name: "Assign Drivers",
    icon: "		fas fa-walking",
    component: assigndrivers,
    layout: "/admin",
  },

  {
    path: "/emergencyrequest",
    name: "Emergency Request",
    icon: "	fas fa-envelope-open-text",
    component: emergencyrequest,
    layout: "/admin",
  },

  {
    path: "/rostermanagement",
    name: "Roster Management",
    icon: "	far fa-paper-plane",
    component: rostermanagement,
    layout: "/admin",
  },

];

export default dashboardRoutes;