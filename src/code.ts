// This plugin will open a modal to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser enviroment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.

const textNodes = figma.currentPage.children
  .filter(item => {
    return item.type === 'TEXT';
  })
  .map(item => {
    if (item.type === 'TEXT') {
      return {
        id: item.id,
        characters: item.characters,
      };
    }
  });

figma.ui.postMessage({
  type: 'TEXT_NODES',
  value: textNodes,
});

figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type === 'FOCUS_TEXT') {
    figma.viewport.scrollAndZoomIntoView([figma.getNodeById(msg.value.id)]);
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  if (msg.type === 'END_PLUGIN') {
    figma.closePlugin();
  }

};
