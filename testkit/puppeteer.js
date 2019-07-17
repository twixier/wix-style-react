import 'regenerator-runtime/runtime';
import {
  puppeteerTestkitFactoryCreator,
  puppeteerUniTestkitFactoryCreator,
} from 'wix-ui-test-utils/puppeteer';

import inputDriverFactory from '../src/Input/Input.puppeteer.driver';

export const inputTestkitFactory = puppeteerTestkitFactoryCreator(
  inputDriverFactory,
);

import formFieldDriverFactory from '../src/FormField/FormField.puppeteer.driver';

export const formFieldTestkitFactory = puppeteerTestkitFactoryCreator(
  formFieldDriverFactory,
);

import tableDriverFactory from '../src/Table/Table.puppeteer.driver';

export const tableTestkitFactory = puppeteerTestkitFactoryCreator(
  tableDriverFactory,
);

import headingDriverFactory from '../src/Heading/Heading.puppeteer.driver';

export const headingTestkitFactory = puppeteerTestkitFactoryCreator(
  headingDriverFactory,
);

import textDriverFactory from '../src/Text/Text.puppeteer.driver';

export const textTestkitFactory = puppeteerTestkitFactoryCreator(
  textDriverFactory,
);

// wix-ui-core (unidriver)

import { textButtonDriverFactory } from '../src/TextButton/TextButton.uni.driver';

export const textButtonTestkitFactory = puppeteerUniTestkitFactoryCreator(
  textButtonDriverFactory,
);

import { avatarUniDriverFactory } from '../src/Avatar/Avatar.uni.driver';

export const avatarTestkitFactory = puppeteerUniTestkitFactoryCreator(
  avatarUniDriverFactory,
);

import { iconButtonDriverFactory } from '../src/IconButton/IconButton.uni.driver';

export const iconButtonTestkitFactory = puppeteerUniTestkitFactoryCreator(
  iconButtonDriverFactory,
);

import { closeButtonDriverFactory } from '../src/CloseButton/CloseButton.uni.driver';

export const closeButtonTestkitFactory = puppeteerUniTestkitFactoryCreator(
  closeButtonDriverFactory,
);

import { proportionDriverFactory } from '../src/Proportion/Proportion.uni.driver';

export const proportionTestkitFactory = puppeteerUniTestkitFactoryCreator(
  proportionDriverFactory,
);

import { linearProgressBarDriverFactory } from '../src/LinearProgressBar/LinearProgressBar.uni.driver';

export const linearProgressBarTestkitFactory = puppeteerUniTestkitFactoryCreator(
  linearProgressBarDriverFactory,
);

import { circularProgressBarDriverFactory } from '../src/CircularProgressBar/CircularProgressBar.uni.driver';

export const circularProgressBarTestkitFactory = puppeteerUniTestkitFactoryCreator(
  circularProgressBarDriverFactory,
);

import { dropdownBaseDriverFactory } from '../src/DropdownBase/DropdownBase.uni.driver';

export const dropdownBaseTestkitFactory = puppeteerUniTestkitFactoryCreator(
  dropdownBaseDriverFactory,
);

import { calendarPanelFooterDriverFactory } from '../src/CalendarPanelFooter/CalendarPanelFooter.uni.driver';

export const calendarPanelFooterTestkitFactory = puppeteerUniTestkitFactoryCreator(
  calendarPanelFooterDriverFactory,
);

import { BoxDriver } from '../src/Box/Box.uni.driver';

export const boxTestkitFactory = puppeteerUniTestkitFactoryCreator(BoxDriver);

import { buttonDriverFactory } from '../src/Button/Button.uni.driver';

export const buttonTestkitFactory = puppeteerUniTestkitFactoryCreator(
  buttonDriverFactory,
);

import { thumbnailDriverFactory } from '../src/Thumbnail/Thumbnail.uni.driver';

export const thumbnailTestkitFactory = puppeteerUniTestkitFactoryCreator(
  thumbnailDriverFactory,
);

import { segmentedToggleDriverFactory } from '../src/SegmentedToggle/SegmentedToggle.uni.driver';

export const segmentedToggleTestkitFactory = puppeteerUniTestkitFactoryCreator(
  segmentedToggleDriverFactory,
);

import richTextInputAreaDriverFactory from '../src/RichTextInputArea/RichTextInputArea.uni.driver';

export const richTextInputAreaTestkitFactory = puppeteerUniTestkitFactoryCreator(
  richTextInputAreaDriverFactory,
);

import { floatingNotificationDriverFactory } from '../src/FloatingNotification/FloatingNotification.uni.driver';

export const floatingNotificationTestkitFactory = puppeteerUniTestkitFactoryCreator(
  floatingNotificationDriverFactory,
);

import { numberInputDriverFactory } from '../src/NumberInput/NumberInput.uni.driver';

export const numberInputTestkitFactory = puppeteerUniTestkitFactoryCreator(
  numberInputDriverFactory,
);

import { noBorderInputDriverFactory } from '../src/NoBorderInput/NoBorderInput.puppeteer.driver';

export const noBorderInputTestkitFactory = puppeteerTestkitFactoryCreator(
  noBorderInputDriverFactory,
);

import { colorInputDriverFactory } from '../src/ColorInput/ColorInput.uni.driver';

export const colorInputTestkitFactory = puppeteerUniTestkitFactoryCreator(
  colorInputDriverFactory,
);

import { dateInputDriverFactory } from '../src/DateInput/DateInput.uni.driver';

export const dateInputTestkitFactory = puppeteerUniTestkitFactoryCreator(
  dateInputDriverFactory,
);

import { editableTitleUniDriverFactory } from '../src/EditableTitle/EditableTitle.uni.driver';

export const editableTitleTestkitFactory = puppeteerUniTestkitFactoryCreator(
  editableTitleUniDriverFactory,
);

import accordionDriverFactory from '../src/Accordion/Accordion.uni.driver';

export const accordionTestkitFactory = puppeteerUniTestkitFactoryCreator(
  accordionDriverFactory,
);

import { socialPreviewDriverFactory } from '../src/SocialPreview/SocialPreview.uni.driver';

export const socialPreviewTestkitFactory = puppeteerUniTestkitFactoryCreator(
  socialPreviewDriverFactory,
);

import { googlePreviewDriverFactory } from '../src/GooglePreview/GooglePreview.uni.driver';

export const googlePreviewTestkitFactory = puppeteerUniTestkitFactoryCreator(
  googlePreviewDriverFactory,
);

import tooltipDriverFactory from '../src/Tooltip/Tooltip.protractor.driver';
import { tooltipDriverFactory as tooltipNextDriverFactory } from '../src/Tooltip/TooltipNext/Tooltip.uni.driver';

export const tooltipTestkitFactory = puppeteerTestkitFactoryCreator(
  tooltipDriverFactory,
);

export const TooltipTestkit = puppeteerUniTestkitFactoryCreator(
  tooltipNextDriverFactory,
);

import { notificationUniDriverFactory } from '../src/Notification/Notification.uni.driver';

export const notificationTestkitFactory = puppeteerUniTestkitFactoryCreator(
  notificationUniDriverFactory,
);

import { checkboxUniDriverFactory } from '../src/Checkbox/Checkbox.uni.driver';

export const checkboxTestkitFactory = puppeteerUniTestkitFactoryCreator(
  checkboxUniDriverFactory,
);

import { loaderUniDriverFactory } from '../src/Loader/Loader.uni.driver';

export const loaderTestkitFactory = puppeteerUniTestkitFactoryCreator(
  loaderUniDriverFactory,
);

import { errorIndicatorDriverFactory } from '../src/ErrorIndicator/ErrorIndicator.uni.driver';

export const errorIndicatorTestkitFactory = puppeteerUniTestkitFactoryCreator(
  errorIndicatorDriverFactory,
);

import { sidebarDriverFactory } from '../src/Sidebar/Sidebar.uni.driver';

export const sidebarTestkitFactory = puppeteerUniTestkitFactoryCreator(
  sidebarDriverFactory,
);

import { ListItemActionDriverFactory } from '../src/ListItemAction/ListItemAction.uni.driver';

export const ListItemActionTestkitFactory = puppeteerUniTestkitFactoryCreator(
  ListItemActionDriverFactory,
);

import { cardSubheaderDriverFactory } from '../src/Card/Subheader/Subheader.uni.driver';

export const subheaderTestkitFactory = puppeteerUniTestkitFactoryCreator(
  cardSubheaderDriverFactory,
);

import { swatchesDriverFactory } from '../src/Swatches/Swatches.uni.driver';

export const swatchesTestkitFactory = puppeteerUniTestkitFactoryCreator(
  swatchesDriverFactory,
);

import { pageHeaderUniDriverFactory } from '../src/PageHeader/PageHeader.uni.driver';

export const pageHeaderTestkitFactory = puppeteerUniTestkitFactoryCreator(
  pageHeaderUniDriverFactory,
);

import { stepperDriverFactory } from '../src/Stepper/Stepper.uni.driver';

export const stepperTestkitFactory = puppeteerUniTestkitFactoryCreator(
  stepperDriverFactory,
);

import { carouselUniDriverFactory } from '../src/Carousel/Carousel.uni.driver';

export const carouselTestkitFactory = puppeteerUniTestkitFactoryCreator(
  carouselUniDriverFactory,
);

import { MessageBoxFunctionalLayoutUniDriverFactory } from '../src/MessageBox/FunctionalLayout/MessageBoxFunctionalLayout.uni.driver';

export const messageBoxFunctionalLayoutTestkitFactory = puppeteerUniTestkitFactoryCreator(
  MessageBoxFunctionalLayoutUniDriverFactory,
);

import { messageBoxMarketerialLayoutUniDriverFactory } from '../src/MessageBox/MarketerialLayout/MessageBoxMarketerialLayout.uni.driver';

export const messageBoxMarketerialLayoutTestkitFactory = puppeteerUniTestkitFactoryCreator(
  messageBoxMarketerialLayoutUniDriverFactory,
);

import { inputAreaUniDriverFactory } from '../src/InputArea/InputArea.uni.driver';

export const inputAreaTestkitFactory = puppeteerUniTestkitFactoryCreator(
  inputAreaUniDriverFactory,
);

import { searchUniDriverFactory } from '../src/Search/Search.uni.driver';

export const searchTestkitFactory = puppeteerUniTestkitFactoryCreator(
  searchUniDriverFactory,
);

import { sideMenuUniDriverFactory } from '../src/SideMenu/core/SideMenu.uni.driver';

export const sideMenuTestkitFactory = puppeteerUniTestkitFactoryCreator(
  sideMenuUniDriverFactory,
);

import { contactItemBuilderUniDriverFactory } from '../src/ContactItemBuilder/ContactItemBuilder.uni.driver';

export const contactItemBuilderTestkitFactory = puppeteerUniTestkitFactoryCreator(
  contactItemBuilderUniDriverFactory,
);

import { drillViewUniDriverFactory } from '../src/SideMenu/DrillView/DrillView.uni.driver';

export const drillViewTestkitFactory = puppeteerUniTestkitFactoryCreator(
  drillViewUniDriverFactory,
);

import { autoCompleteUniDriverFactory } from '../src/AutoComplete/AutoComplete.uni.driver';

export const autoCompleteTestkitFactory = puppeteerUniTestkitFactoryCreator(
  autoCompleteUniDriverFactory,
);

import { editableSelectorUniDriverFactory } from '../src/EditableSelector/EditableSelector.uni.driver';

export const editableSelectorTestkitFactory = puppeteerUniTestkitFactoryCreator(
  editableSelectorUniDriverFactory,
);

import { multiselectUniDriverFactory } from '../src/MultiSelect/MultiSelect.uni.driver';

export const multiSelectTestkitFactory = puppeteerUniTestkitFactoryCreator(
  multiselectUniDriverFactory,
);

import { multiSelectCheckboxUniDriverFactory } from '../src/MultiSelectCheckbox/MultiSelectCheckbox.uni.driver';

export const multiSelectCheckboxTestkitFactory = puppeteerUniTestkitFactoryCreator(
  multiSelectCheckboxUniDriverFactory,
);

import { tagUniDriverFactory } from '../src/Tag/Tag.uni.driver';

export const tagTestkitFactory = puppeteerUniTestkitFactoryCreator(
  tagUniDriverFactory,
);

import { modalUniDriverFactory } from '../src/Modal/Modal.uni.driver';

export const modalTestkitFactory = puppeteerUniTestkitFactoryCreator(
  modalUniDriverFactory,
);

import { headerUniDriverFactory } from '../src/Card/Header/Header.uni.driver';

export const cardHeaderTestkitFactory = puppeteerUniTestkitFactoryCreator(
  headerUniDriverFactory,
);

import { calendarUniDriverFactory } from '../src/Calendar/Calendar.uni.driver';

export const calendarTestkitFactory = puppeteerUniTestkitFactoryCreator(
  calendarUniDriverFactory,
);

import { inputWithOptionsUniDriverFactory } from '../src/InputWithOptions/InputWithOptions.uni.driver';

export const inputWithOptionsTestkitFactory = puppeteerUniTestkitFactoryCreator(
  inputWithOptionsUniDriverFactory,
);

import { breadcrumbsUniDriverFactory } from '../src/Breadcrumbs/Breadcrumbs.uni.driver';

export const breadcrumbsTestkitFactory = puppeteerUniTestkitFactoryCreator(
  breadcrumbsUniDriverFactory,
);

import { badgeUniDriverFactory } from '../src/Badge/Badge.uni.driver';

export const badgeTestkitFactory = puppeteerUniTestkitFactoryCreator(
  badgeUniDriverFactory,
);

import { dataTableUniDriverFactory } from '../src/DataTable/DataTable.uni.driver';

export const dataTableTestkitFactory = puppeteerUniTestkitFactoryCreator(
  dataTableUniDriverFactory,
);

import { dropdownLayoutDriverFactory } from '../src/DropdownLayout/DropdownLayout.uni.driver';

export const dropdownLayoutTestkitFactory = puppeteerUniTestkitFactoryCreator(
  dropdownLayoutDriverFactory,
);

import { emptyStateUniDriverFactory } from '../src/EmptyState/EmptyState.uni.driver';

export const emptyStateTestkitFactory = puppeteerUniTestkitFactoryCreator(
  emptyStateUniDriverFactory,
);

import { tabsUniDriverFactory } from '../src/Tabs/Tabs.uni.driver';

export const tabsTestkitFactory = puppeteerUniTestkitFactoryCreator(
  tabsUniDriverFactory,
);

import { calendarPanelUniDriverFactory } from '../src/CalendarPanel/CalendarPanel.uni.driver';

export const calendarPanelTestkitFactory = puppeteerUniTestkitFactoryCreator(
  calendarPanelUniDriverFactory,
);

import { dropdownUniDriverFactory } from '../src/Dropdown/Dropdown.uni.driver';

export const dropdownTestkitFactory = puppeteerUniTestkitFactoryCreator(
  dropdownUniDriverFactory,
);

import { editableRowUniDriverFactory } from '../src/EditableSelector/EditableRow/EditableRow.uni.driver';

export const editableRowTestkitFactory = puppeteerUniTestkitFactoryCreator(
  editableRowUniDriverFactory,
);

import { statsWidgetUniDriverFactory } from '../src/StatsWidget/StatsWidget.uni.driver';

export const statsWidgetTestkitFactory = puppeteerUniTestkitFactoryCreator(
  statsWidgetUniDriverFactory,
);

import { timeInputUniDriverFactory } from '../src/TimeInput/TimeInput.uni.driver';

export const timeInputTestkitFactory = puppeteerUniTestkitFactoryCreator(
  timeInputUniDriverFactory,
);

import cardGalleryItemDriverFactory from '../src/CardGalleryItem/CardGalleryItem.uni.driver';

export const cardGalleryItemTestkitFactory = puppeteerUniTestkitFactoryCreator(
  cardGalleryItemDriverFactory,
);

import { addItemUniDriverFactory } from '../src/AddItem/AddItem.uni.driver';

export const addItemTestkitFactory = puppeteerUniTestkitFactoryCreator(
  addItemUniDriverFactory,
);

import { imageViewerUniDriverFactory } from '../src/ImageViewer/ImageViewer.uni.driver';

export const imageViewerTestkitFactory = puppeteerUniTestkitFactoryCreator(
  imageViewerUniDriverFactory,
);

import { sectionHelperUniDriverFactory } from '../src/SectionHelper/SectionHelper.uni.driver';

export const sectionHelperTestkitFactory = puppeteerUniTestkitFactoryCreator(
  sectionHelperUniDriverFactory,
);

import { genericModalLayoutUniDriverFactory } from '../src/GenericModalLayout/GenericModalLayout.uni.driver';

export const genericModalLayoutTestkitFactory = puppeteerUniTestkitFactoryCreator(
  genericModalLayoutUniDriverFactory,
);

import { sliderUniDriverFactory } from '../src/Slider/Slider.uni.driver';

export const sliderTestkitFactory = puppeteerUniTestkitFactoryCreator(
  sliderUniDriverFactory,
);

import { sidebarSectionTitleDriverFactory } from '../src/SidebarSectionTitle/SidebarSectionTitle.uni.driver';

export const sidebarSectionTitleTestkitFactory = puppeteerUniTestkitFactoryCreator(
  sidebarSectionTitleDriverFactory,
);

import { sidebarSectionItemDriverFactory } from '../src/SidebarSectionItem/SidebarSectionItem.uni.driver';

export const sidebarSectionItemTestkitFactory = puppeteerUniTestkitFactoryCreator(
  sidebarSectionItemDriverFactory,
);

import { sidebarSectionDividerDriverFactory } from '../src/SidebarSectionDivider/SidebarSectionDivider.uni.driver';

export const sidebarSectionDividerTestkitFactory = puppeteerUniTestkitFactoryCreator(
  sidebarSectionDividerDriverFactory,
);
