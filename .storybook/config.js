import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/DragDropElement.stories');
}

configure(loadStories, module);
