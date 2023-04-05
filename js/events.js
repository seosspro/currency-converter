import {variables} from "./variables.js";
import {fetchCodes, handleTabClick} from "./index.js";
import {handleInput, handleSubmit, switchCurrencies} from "./convert.js";
import {addCurrency, handleActionClick, handleAddSelectChange, handleSingleSelectChange} from "./single.js";

const {amountInput, form, switchButton, tabs, currentCurrency, currentCurrencyList, singleSelect, addButton,addCurrencySelect} = variables

fetchCodes()
amountInput.addEventListener('keyup', handleInput)
form.addEventListener('submit', handleSubmit)
switchButton.addEventListener('click', switchCurrencies)
tabs.forEach(tab => tab.addEventListener('click', handleTabClick))
currentCurrency.addEventListener('click', handleActionClick)
currentCurrencyList.addEventListener('click', handleActionClick)
singleSelect.addEventListener('change', handleSingleSelectChange)
addButton.addEventListener('click', addCurrency)
addCurrencySelect.addEventListener('change',handleAddSelectChange)