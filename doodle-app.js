
(function () {
  // Initialize the Teambox app
  Teambox.Apps.DoodleApp = Teambox.BaseApp.extend({});
 
  // Router to handle paths (in this case, /#!/doodle) with regular links
  Teambox.Apps.DoodleApp.Controller = Teambox.Controllers.BaseController.extend({
    routes: { '!/doodle': 'index' },
    index: function () {
      // Helper Teambox function to highlight the sidebar
      Teambox.Views.Sidebar.highlightSidebar('doodle_link');
 
      // Helper Teambox function to render content to the main area
      Teambox.helpers.views.renderContent(
        "<iframe src='http://breadfish.co.uk/' style='width:100%;height:100%'></iframe>",
        "Doodle"
      );
    }
  });
 
  // Init app. Will be executed once on pageload when apps are instantiated.
  Teambox.Apps.DoodleApp = Teambox.Apps.DoodleApp.extend({
    initialize: function () {
      // Instantiate the controller
      this.controller = new Teambox.Apps.DoodleApp.Controller();
 
      // Add an element to the Apps section in the sidebar
      Teambox.views.sidebar.apps_list.addApp("doodle", "Doodle", "#!/doodle", "star");
    }
  });
 
}());