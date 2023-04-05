import {state} from "./state.js";
import {variables} from "./variables.js";
import {convertTime, formatToCurrency, getFullTitle} from "./utils.js";
import {renderResult} from "./markups.js";

export const handleChange = ({target: {value, name}}) => {
    state.pair = {
        ...state.pair, [name]: value
    }
}

export const handleInput = ({target: {value, name}}) => {
    state[name] = Number(value)
}

const {success, formResults, rateConversion, resultTo, resultFrom, rateLast, toSelect, fromSelect} = variables

const insertResults = ({
                           base_code: baseCode,
                           target_code: targetCode,
                           conversion_rate: rate,
                           conversion_result: result,
                           time_last_update_utc: time,
                       }) => {
    const from = {
        code: baseCode, amount: state.amount, full: getFullTitle(state.codes, baseCode),
    };

    const to = {
        code: targetCode, amount: result, full: getFullTitle(state.codes, targetCode),
    };

    resultFrom.innerHTML = renderResult(from);
    resultTo.innerHTML = renderResult(to);

    const baseValue = formatToCurrency(baseCode, 1);
    const targetValue = formatToCurrency(targetCode, rate);

    rateConversion.innerText = `${baseValue} = ${targetValue}`;
    rateLast.innerText = `Last updated ${convertTime(time)}`;

    formResults.classList.add("show");
};

export const handleSubmit = async (e) => {
    e?.preventDefault()

    let {url, amount, pair: {from, to}, loading} = state
    loading = true

    if (!amount & !from && !to) return;

    try {
        const response = await fetch(`${url}/pair/${from}/${to}/${amount}`)
        const data = await response.json()
        if (data.result === success) insertResults(data)

        loading = false
    } catch (err) {
        console.log(err)
    }
}

export const switchCurrencies = () => {
    const {pair: {to, from}} = state

    if (!to || !from) return
    state.pair = {
        to: from, from: to,
    }

    toSelect.value = from
    fromSelect.value = to
}
