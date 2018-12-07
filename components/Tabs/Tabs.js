class Tabs {
  constructor(element) {
    this.element = element;
    this.tabLinks = this.element.querySelectorAll(".tabs-link");
    this.tabLinks.forEach((tabLink) => new TabLink(tabLink));
    // console.log(this.tabLinks);
    this.tabItems = this.element.querySelectorAll(".tabs-item");
    // console.log(this.tabItems);    
    this.tabSelection = this.element
      .querySelector(".tabs-link-selected");
    console.log("this.tabSelection", this.tabSelection);
    // console.log(this.tabSelection);
    console.log("this.element", this.element);
  }
  updateSelection(selection) {
    // called by link which was selected, takes in that link's element
    // deselect previous selection, link AND item
    // console.log(document.querySelector(`.tabs-link[data-tab="${this.tabSelection}"]`));//.deselect();
    // console.log(selection);
    // console.log(this.tabSelection);
    document.querySelector(`.tabs-item[data-tab="${this.tabSelection}"]`).deselect();
    // update this.tabSelection with new selection (calls update of item selection)
    this.tabSelection = selection.dataset.tab;
  }
}
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    this.element = element;
    console.log(this);
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => {this.select()});
  };

  select() {
    // // **** OLD WAY:
    // // Get all of the elements with the tabs-link class
    // const links = document.querySelectorAll(".tabs-link");
    // // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach((link) => link.classList.remove("tabs-link-selected"));

    // // Add a class named "tabs-link-selected" to this link
    // this.element.classList.add("tabs-link-selected");
    
    // // Call the select method on the item associated with this link
    // this.tabItem.select();

    // // **** NEW WAY:
    // update the selection in tabs (deselects previous selection)
    tabs.updateSelection(this);
    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add("tabs-link-selected");
    // Call the select method on the item associated with this link
    this.tabItem.select();
  }

  deselect() {
    console.log(this);
    this.element.classList.remove("tabs-link-selected");
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element =  element;
  }

  select() {
    // // **** OLD WAY:
    // // Select all ".tabs-item" elements from the DOM
    // const items = document.querySelectorAll(".tabs-item");

    // // Remove the class "tabs-item-selected" from each element
    // items.forEach(item => item.classList.remove("tabs-item-selected"));
    // // Add a class named "tabs-item-selected" to this element
    // this.element.classList.add("tabs-item-selected");

    // // **** NEW WAY:
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add("tabs-item-selected");
  }

  deselect() {
    this.element.classList.remove("tabs-item-selected");
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

// // OLD WAY:
// links = document.querySelectorAll(".tabs-link").forEach((tabLink) => new TabLink(tabLink));

const tabs = new Tabs(document.querySelector(".tabs"));