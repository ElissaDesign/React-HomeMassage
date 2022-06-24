import React, { useState } from 'react'
import axios from "axios";

function SendMail(props) {
    const values = props
    // const [ sent, setSent ] = useState(false)
	const [ text, setText ] = useState()
	const [ name, setName ] = useState()
	const [ email, setEmail ] = useState()
	const handleSend = async (e) => {
		// setSent(true)
        setText(values.values)
        setName(values.values.fullName)
        console.log(values.values.fullName)
		try {
			await axios.post("http://localhost:4000/send_mail", {
				text: {
                    name: text.fullName,
                    email: text.email,
                    service: text.serviceName,
                    time: text.time,
                    gender: text.gender,
                    other: text.addition,
                    number: text.phoneNumber,

                }
			})
		} catch (error) {
			console.error(error)
		}
	}
    console.log(text)
  return (
    <div>SendMail

        <button onClick={handleSend}>Send Message</button>
    </div>
  )
}

export default SendMail