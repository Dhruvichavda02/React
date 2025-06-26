

const InputBox =({
     label,
    amount,
    onAmmountChange,
    currency,
    onCurrencyChange,
    currencyOptions = [],
}) =>
{
    return(
            <div className="input-box">
                <label htmlFor="">{label}</label>
                <div>
                    <input type="number" name="" id=""
                        value={amount}
                        onChange={(e)=> onAmmountChange &&
                            onAmmountChange(e.target.value)}
                    />

                    <select name="" id=""
                        value={currency}
                        onChange={(e)=>onCurrencyChange(e.target.value)}
                    >
                        {currencyOptions.map((currency)=>
                            <option value={currency} key={currency}>
                                {currency}
                            </option>
                        )}
                    </select>
                </div>
            </div>
    )

}

export default InputBox;