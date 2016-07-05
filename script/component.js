app.controller('compontentController', ['$scope', '$sce', compontentController]);

function compontentController($scope, $sce) {
  $scope.buttonData = buttonData;
  $scope.getProperties = getProperties;
  $scope.trustAsHtml = function(html) {
     return $sce.trustAsHtml(html);
   };
}

var buttonData = {
  'Button Types': {
    'Save Button': {
      'code': '<input type="submit" class="save-button" value="Save">',
      'Usage': 'Any time a button will record data to the system',
      'Example': 'Save, Finish, Login',
      'Class': '<code>save-button</code>',
      'Elements': 'a, input, button'
    },
    'Link Button': {
      'code': '<a title="Link Button" class="link-button" href="#" target="_self">\n\tNext\n</a>',
      'Usage': 'Any time a button is required to take a User to another context or as primary button in button group with no save action',
      'Examples': 'Manage Document, Design Course',
      'Class': '<code>link-button</code>',
      'Elements': 'a, input, button'
    },
    'Delete Button': {
      'code': '<button class="delete-button">Delete</button>',
      'Usage': 'A button that will execute a distructive action',
      'Example': 'Disable, Delete',
      'Class': '<code>delete-button</code>',
      'Elements': 'a, input, button'
    },
    'Action Button': {
      'code': '<input type="button"  class="action-button" value="Search">',
      'Usage': 'A button that executes a function that will not permanently change the system or as secondary button(s) in button group',
      'Example': 'Search, Reset, Compare',
      'Class': '<code>action-button</code>',
      'Elements': 'a, input, button'
    }
  },
  'Button Groups': {
    'Saving Button Group': {
      'code': '<button class="save-button">Save</button>\n<button class="delete-button">Delete</button>\n<a href="#" target="_self">Cancel</a>',
      'Usage': 'A group of buttons with a primary action that saves\nCancel is always a link'
    },
    'Non-saving Button Group': {
      'code': '<button class="link-button">Next</button>\n<button class="action-button">Back</button>',
      'Usage': 'A group of buttons with a primary action that does not save'
    }
  },
  'Variants': {
    'Small Buttons': {
      'code': 'Inline Text: <button class="save-button small">Save</button>',
      'Usage': 'When a button is Used inline with text, or when a button is needed in a small context.'
    },
    'Disabled Buttons': {
      'code': '<button disabled="disabled" class="save-button">Saving</button>',
      'Usage': 'When validation rules have not been met, or when a button is clicked to prevent multiple submissions'
    },
    'Button Icons': {
      'code': '<a title="Link Button" class="link-button" href="#" target="_self">\n\t<span class="fa fa-pencil"></span>\n\tEdit Document\n</a>\n<a title="Action Button" class="action-button" href="#" target="_self">\n\t<span class="fa fa-undo"></span>\n\tReset\n</a>',
      'Usage': 'Any monotone font icons may be used with any button type. Coloring of the icon will automatically be taken care of',
    },
  }
}

function getProperties (object) {
  var properties = [];
  for (var prop in object) {
      // skip loop if the property is from prototype
      if(!object.hasOwnProperty(prop)) continue;
      if(prop == 'code' || prop == 'showCode') continue;
      properties.push(prop);
  }
  return properties;
}
