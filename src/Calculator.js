import React, { useState } from 'react'

const fixedFee = 0.3
const nonUSpercentageFee = 5.4
const usPercentageFee = 2.9

function send(amount, percentageFee) {
  return amount - (amount / 100 * percentageFee) - fixedFee
}

function receive(amount, percentageFee) { 
  return ((amount + fixedFee) / (1 - (percentageFee / 100))).toFixed(2)
}

function Calculator(props) {
  const [isSending, setIsSending] = useState(true)
  const [amount, setAmount] = useState(0)
  const [percentageFee] = useState(nonUSpercentageFee)
  const sending = send(amount, percentageFee)
  const receiving = receive(amount, percentageFee)

  return (
    <div>
      <p>{`Fee: ${percentageFee}% + ${fixedFee}$`}</p>
      <button onClick={() => setIsSending(false)}>
        Quiero recibir
      </button>
      <button onClick={() => setIsSending(true)}>
        Quiero enviar
      </button>
      <input type="number" value={amount} onChange={e => setAmount(+e.target.value)}/>
      {
        amount > 0 ? (
          <p>{
            isSending ?
            `Enviando ${amount}, recibirás: ${sending}$` :
            `Para recibir ${amount}, se debe enviar: ${receiving}`
          }</p>
        ) : (
          <p>Ingrese un monto positivo.</p>
        )
      }
    </div>
  )
}

export default Calculator