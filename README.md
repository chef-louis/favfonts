# Chingu Solo Project - Tier 1 - Favorite Fonts

## Overview ##

**Author**
Github: @chef-louis
Discord: louis.code#9119

This is my clone of the Favorite Fonts app to serve as my Tier 1 Solo Project. The app replicates any text that is typed into the "Sample Text" input field and replicates that across 10 font cards with variously pre-defined fonts. Using various buttons in the major navigation bar, the user is able to modify the font size, toggle between dark/light mode, change the font card layout to grid or list and finally reset the interface back to the default settings.

Some elements that are not yet implemented:
- Minor nav within Header (ie. Logo, Catalog, Featured, Articles, About) does not take you anywhere
- Search field accepts input but does not do anything with that information
- The "Add button" within font cards does nothing

The project leverages HTML, Javascript and CSS to compose the various elements above together and the project is deployed at the following URL for viewing: https://chef-louis.github.io/favfonts/

## Project Details ## 

**Requirements**

*Structure*
- [X] Header with minor navigation *(Logo and Catalog/Featured/Articles/About link list)*
- [X] Nav with Major navigation / page-manipulation *(search, custom text, font-size, dark/light mode, grid/list mode, and reset)*
- [X] Main section to contain the font cards
- [X] Font cards which display the Font Name, the sample text, and an add button
- [X] Footer section with your developer information

*Style*
- [X] Sample text in each card should be displayed in the corresponding font
- [X] Buttons/links should be evident *(make sure the cursor changes, etc.)*
- [X] Implement a way to handle overflow from sample text in font cards, as the font size is adjustable

*Functionality*
- [X] Text typed into the custom text (type something) box should immediately change the sample text displayed in each font card
- [X] The sample text should return to the default sample if the input box (type something) no longer has any input *(ex. input == "")*
- [X] Font size chooser should have at least four sizes and should immediately change the sample text font size in each font card
- [X] Implement the clickable 'reset' icon on the far right of the major navigation; it should make the page appear as if the user reloaded the page *(do not actually reload the page)*

*Other*
- [X] Your repo needs to have a robust README.md
- [X] Make sure that there are no errors in the developer console before submitting

**Extras (Not Required)**

- [ ] Include a back-to-top button that allows users to scroll to the top once the top of the page is out of view
- [ ] Make your design fully responsive *(small/large/portrait/landscape, etc.)*
- [X] Implement the light/dark mode toggle buttons
- [X] Implement the change display icon so you can flip between a grid and list layout for the font cards