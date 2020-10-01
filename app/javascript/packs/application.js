// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const imagePath = (name) => images(name, true)
const images = require.context('../images', true)







// METRONIC JS AND CSS FILE
import './src/metronic/sass/style.scss';

window.KTUtil = require('./src/metronic/js/components/util.js');
window.KTApp  = require('./src/metronic/js/components/app.js');
window.KTCard = require('./src/metronic/js/components/card.js');
window.KTCookie = require('./src/metronic/js/components/cookie.js');
window.KTDialog = require('./src/metronic/js/components/dialog.js');
window.KTHeader = require('./src/metronic/js/components/header.js');
window.KTImageInput = require('./src/metronic/js/components/image-input.js');
window.KTMenu   = require('./src/metronic/js/components/menu.js');
window.KTOffcanvas  = require('./src/metronic/js/components/offcanvas.js');
window.KTScrolltop  = require('./src/metronic/js/components/scrolltop.js');
window.KTToggle = require('./src/metronic/js/components/toggle.js');
window.KTWizard = require('./src/metronic/js/components/wizard.js');

window.KTLayoutAsideMenu = require('./src/metronic/js/layout/base/aside-menu.js');
window.KTLayoutAsideToggle = require('./src/metronic/js/layout/base/aside-toggle.js');
window.KTLayoutAside = require('./src/metronic/js/layout/base/aside.js');
window.KTLayoutBrand = require('./src/metronic/js/layout/base/brand.js');
window.KTLayoutContent = require('./src/metronic/js/layout/base/content.js');
window.KTLayoutFooter = require('./src/metronic/js/layout/base/footer.js');
window.KTLayoutHeaderMenu = require('./src/metronic/js/layout/base/header-menu.js');
window.KTLayoutHeaderTopbar = require('./src/metronic/js/layout/base/header-topbar.js');
window.KTLayoutHeader = require('./src/metronic/js/layout/base/header.js');
window.KTLayoutStickyCard = require('./src/metronic/js/layout/base/sticky-card.js');
window.KTLayoutStretchedCard = require('./src/metronic/js/layout/base/stretched-card.js');
window.KTLayoutSubheader = require('./src/metronic/js/layout/base/subheader.js');
window.KTLayoutChat = require('./src/metronic/js/layout/extended/chat.js');
window.KTLayoutDemoPanel = require('./src/metronic/js/layout/extended/demo-panel.js');
window.KTLayoutExamples = require('./src/metronic/js/layout/extended/examples.js');
window.KTLayoutQuickActions = require('./src/metronic/js/layout/extended/quick-actions.js');
window.KTLayoutQuickCartPanel = require('./src/metronic/js/layout/extended/quick-cart.js');
window.KTLayoutQuickNotifications = require('./src/metronic/js/layout/extended/quick-notifications.js');
window.KTLayoutQuickPanel = require('./src/metronic/js/layout/extended/quick-panel.js');
window.KTLayoutQuickSearch = require('./src/metronic/js/layout/extended/quick-search.js');
window.KTLayoutQuickUser = require('./src/metronic/js/layout/extended/quick-user.js');
window.KTLayoutScrolltop = require('./src/metronic/js/layout/extended/scrolltop.js');
window.KTLayoutSearch = require('./src/metronic/js/layout/extended/search.js');

require('./src/metronic/js/layout/initialize.js');



// import './src/metronic/js/pages/features/base/dropdown.js';
// import './src/metronic/js/pages/features/calendar/background-events.js';
// import './src/metronic/js/pages/features/calendar/basic.js';
// import './src/metronic/js/pages/features/calendar/external-events.js';
// import './src/metronic/js/pages/features/calendar/google.js';
// import './src/metronic/js/pages/features/calendar/list-view.js';
// import './src/metronic/js/pages/features/cards/draggable.js';
// import './src/metronic/js/pages/features/cards/tools.js';
// import './src/metronic/js/pages/features/charts/apexcharts.js';
// import './src/metronic/js/pages/features/charts/flotcharts.js';
// import './src/metronic/js/pages/features/charts/google-charts.js';
// import './src/metronic/js/pages/features/custom/spinners.js';

// import './src/metronic/js/pages/widgets.js';




// CUSTOM JS AND CSS FILE
import './src/custom/sass/style.scss';
// import './src/custom/js/components/test.js';


// VENDORS JS AND CSS FILE
import './src/vendor/plugins/flatpickr.js';
import './src/vendor/plugins/sweetalert2.js';











