const getEl = (el) => document.querySelector(el);

const dom = {
  wrapper: getEl(".wrapper"),

  btnSortToSmall: getEl(".btn-sort-to-small"),
  btnSortToBig: getEl(".btn-sort-to-Big"),
  btnSortToSettings: getEl(".btn-settings"),
  btnAdd: getEl(".btn-add"),

  parentItems: getEl(".parent-items"),
  form: getEl(".date-form"),
  dateSelect: getEl("#date-select"),
  heading: getEl(".heading"),

  outputUI: getEl("#output"),
  nameInput: getEl("#name-input"),

  errorDialog: getEl(".error-dialog"),
  errorDialogText: getEl(".error-dialog-text"),
  btnCloseDialog: getEl(".close-dialog"),
};

export default dom;
