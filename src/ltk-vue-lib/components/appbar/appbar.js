import MaterialMenu from "./material-menu/material-menu.vue";
// import UserInfoService from "./UserInfoService.js";

export default {
  components: {
    MaterialMenu
  },
  data() {
    return {
      user: {},
      organization: {},
      availableApplications: [],
      dashboardApp: {},
      avatarId: "",
      menuOptions: [{
        icon: "exit_to_app",
        name: "Log Out",
        action: () => {
          const url = `${
              window.ltk_environment.sso_url
            }/logout?redirect_uri=${window.ltk_environment.redirect_url}`;
          // strange thing: this will not redirect if the link is an `https` link.
          // redirecting to `//${url}` will work because it keeps the current protocol
          window.location.href = url.replace("https:", "");
        }
      }]
    };
  },
  created() {
    // UserInfoService.getUserDetails()
    //   .then(json => {
    //     this.user = json.user;
    //     this.organization = json.available_organizations.find(
    //       org => (org.id = json.organization.id)
    //     );
    //     let applications = json.available_applications;
    //     for (let app of applications) {
    //       app.name !== "Administration" &&
    //         app.name !== "Dashboard" &&
    //         app.link_order !== undefined &&
    //         this.availableApplications.push(app);
    //       app.name === "Dashboard" && (this.dashboardApp = app);
    //       app.name === "Administration" &&
    //         this.menuOptions.push({
    //           icon: "settings",
    //           name: "Settings",
    //           action: () => (window.location.href = "/administration")
    //         });
    //     }
    //     this.availableApplications.sort(
    //       (a, b) =>
    //         a.link_order < b.link_order
    //           ? -1
    //           : a.link_order > b.link_order ? 1 : 0
    //     );
    //   })
    //   .catch(error => {
    //     this.user = { name: "Error Loading User" };
    //     this.organization = { name: "" };
    //     this.menuOptions = [];
    //   });
  }
};
