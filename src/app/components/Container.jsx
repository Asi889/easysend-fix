"use client";

import { useState } from "react";

const Container = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
    const [socialSecurityNumber, setSocialSecurityNumber] = useState("");
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [fundName, setFundName] = useState("");
    const [acountNumber, setAcountNumber] = useState("");
    const [fundeNumber, setFundeNumber] = useState("");
    const [firstSelectedOption, setFirstSelectedOption] = useState("");
    const [secondeSelectedOption, setSecondeSelectedOption] = useState("");
    const [thirdSelectedOption, setThirdSelectedOption] = useState("");
    const [fourthSelectedOption, setFourthSelectedOption] = useState("");
    const [fithSelectedOption, setFithSelectedOption] = useState("eligible");
    const [withdralAmount, setWithdralAmount] = useState("");
    const [error, setError] = useState("")
    const [formSusecces, setFormSusecces] = useState(false)

    const handlefisrtSelectedOption = (e) => {
        setFirstSelectedOption(e.target.value)
    }
    const handSecondeSelectedOption = (e) => {
        setSecondeSelectedOption(e.target.value)
    }
    const handThirdSelectedOption = (e) => {
        setThirdSelectedOption(e.target.value)
    }
    const handleForthSelectedOption = (e) => {
        setFourthSelectedOption(e.target.value)
    }
    const handleFithSelectedOption = (e) => {
        setFithSelectedOption(e.target.value)
    }

    const handleClearForm = () => {
        setFirstName("")
        setLastName("")
        setFullName("")
        setSocialSecurityNumber("")
        setMobile("")
        setEmail("")
        setFundeNumber("")
        setFundName("")
        setAcountNumber("")
        setFirstSelectedOption("")
        setSecondeSelectedOption("")
        setThirdSelectedOption("")
        setFourthSelectedOption("")
        setFithSelectedOption("")
        setWithdralAmount("")
        setError("")


    }

    const handleSendForm = () => {
        const form = {
            firstName,
            lastName,
            socialSecurityNumber,
            mobile,
            email,
            firstSelectedOption,
            fundName,
            acountNumber,
            fundeNumber,
            secondeSelectedOption,
            thirdSelectedOption,
            fourthSelectedOption,
            withdralAmount,
            fithSelectedOption,

        }

        if (validate()) {
            console.log("form has been sent");
            console.log(form);
            handleClearForm()
            setFormSusecces(true)
            setTimeout(() => {
                setFormSusecces(false)
            }, 2000)

        } else {
            console.log("form has not been sent");
        }


    }
    const validate = () => {
        console.log("validate");
        if (/^[a-zA-Z\s]+$/.test(firstName) && /^[a-zA-Z\s]+$/.test(lastName)) {
            setError("")

        } else {
            setError("first name must be a string")
            return false

        }

        if (/^\d{3}-?\d{2}-?\d{4}$/.test(socialSecurityNumber)) {
            setError("")
        } else {
            setError("social security number must be 9 digits")
            return false
        }

        if (!/^[a-zA-Z0-9\s]+$/.test(fundName)) {
            setError("fund name must be a string or numbers")
            return false
        }
        if (/^\d+$/.test(acountNumber) && /^\d+$/.test(fundeNumber)) {
            setError("")
        } else {
            setError("must be numbers numbers")
            return false

        }

        if (withdralAmount > 99000) {

            setError("withdrawal amount must be less than 99000")
            return false
        }

        return true

    }



    const handleFullNameChange = (event) => {
        const { value } = event.target;
        setFullName(value);
        const [newFirstName, newLastName] = value.split(' ');
        setFirstName(newFirstName);
        setLastName(newLastName);
    };

    const handleFirstNameChange = (event) => {
        const { value } = event.target;
        setFirstName(value);
        setFullName(`${value} ${lastName}`);
    };

    const handleLastNameChange = (event) => {
        const { value } = event.target;
        setLastName(value);
        setFullName(`${firstName} ${value}`);
    };


    return (
        <div className="w-full h-full lg:h-screen px-20 flex justify-center bg-white py-4">

            <div className="w-full max-w-xl mx-auto">
                <div className="flex flex-col h-full w-full max-w-md mx-auto">
                    <div className="grid md:flex gap-x-2">
                        <div>
                            <input
                                value={firstName}
                                name={"firstName"}
                                onChange={handleFirstNameChange}
                                className="first-name m-2   border-b-[1px] border-gray-400"
                                type="text"
                                placeholder="First Name"
                            />
                        </div>
                        <div>
                            <input onChange={handleLastNameChange} value={lastName} name="lastName" className="last-name m-2  border-b-[1px] border-gray-400" type="text" placeholder="last-name" />
                        </div>
                    </div>
                    <div>
                        <input type="text" placeholder="Full Name" value={fullName} name="fullName" onChange={handleFullNameChange} className="m-2  w-full  border-b-[1px] border-gray-400" />
                    </div>
                    <div>
                        <input value={socialSecurityNumber} onChange={(e) => setSocialSecurityNumber(e.target.value)} className="social-security-number m-2  w-full  border-b-[1px] border-gray-400" type="number" placeholder="social security number" />
                    </div>
                    <div>
                        <input value={mobile} onChange={(e) => setMobile(e.target.value)} className="mobile m-2   border-b-[1px] border-gray-400 w-full" type="number" placeholder="Mobile Phone Number" />
                    </div>
                    <div>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className="email m-2   border-b-[1px] border-gray-400 w-full" type="email" placeholder="Email" />
                    </div>
                    <div>
                        <h2 className="font-semibold">Type of form to send:</h2>
                        <input type="radio" value="withdrawalRequestVal" name="withdrawalRequest" checked={firstSelectedOption === "withdrawalRequestVal"} onChange={(e) => handlefisrtSelectedOption(e)} />
                        <span className="pl-2">fund withdrawal request </span>
                        <div>
                            <input type="radio" value="transferCancelRequestVal" name="transferCancelRequest" checked={firstSelectedOption === "transferCancelRequestVal"} onChange={(e) => handlefisrtSelectedOption(e)} />
                            <span className="pl-2">fund transfer cancel rewust </span>
                        </div>
                        <div>
                            <input type="radio" value="lifeInsuranceOnboardingFormVal" namw="lifeInsuranceOnboardingForm" checked={firstSelectedOption === "lifeInsuranceOnboardingFormVal"} onChange={(e) => handlefisrtSelectedOption(e)} />
                            <span className="pl-2">life insurance onboarding form </span>
                        </div>
                    </div>
                    <div className="pt-6 grid gap-y-4">
                        <div>

                            <input type="text" className="border-b-[1px] border-gray-400 w-full" placeholder="Fund Name" value={fundName} onChange={(e) => setFundName(e.target.value)} />
                        </div>
                        <div>
                            <input type="number" className="border-b-[1px] border-gray-400 w-full" placeholder="Account Number" value={acountNumber} onChange={(e) => setAcountNumber(e.target.value)} />

                        </div>
                        <div>
                            <input type="number" className="border-b-[1px] border-gray-400 w-full" placeholder="Fund Number" value={fundeNumber} onChange={(e) => setFundeNumber(e.target.value)} />

                        </div>

                    </div>
                    <div className="pt-4 bold flex">
                        <div className="w-full">

                            <h2 className="font-semibold">Employment Type</h2>
                            <div className="">
                                <input type="radio" value="employeeVal" name="employee" checked={secondeSelectedOption === "employeeVal"} onChange={(e) => handSecondeSelectedOption(e)} />
                                <span className="pl-2">Employee</span>
                            </div>
                            <div>
                                <input type="radio" value="indipendant" namw="indipendant" checked={secondeSelectedOption === "indipendant"} onChange={(e) => handSecondeSelectedOption(e)} />
                                <span className="pl-2">indipendant</span>
                            </div>
                        </div>
                        <div className="w-full ">
                            {formSusecces ? (
                                <div className="bg-green-300 text-center rounded-lg">
                                    <h2>form has been sent</h2>
                                </div>
                            ) : ""}
                        </div>

                    </div>
                    <div className="pt-4">
                        <h2 className="font-semibold">Withdral Type</h2>
                        <div className="">
                            <input type="radio" value="fullWithdrawal" name="fullWithdrawal" checked={thirdSelectedOption === "fullWithdrawal"} onChange={(e) => handThirdSelectedOption(e)} />
                            <span className="pl-2">full withdrawal</span>
                        </div>

                        <div className="">
                            <input type="radio" value="monthly" name="monthly" checked={thirdSelectedOption === "monthly"} onChange={(e) => handThirdSelectedOption(e)} />
                            <span className="pl-2">automated monthly withdrawl</span>
                            {thirdSelectedOption === "monthly" ? (
                                <div className="grid">
                                    <div className="">
                                        <input type="radio" value="partialWithdrawal" name="partialWithdrawal" checked={fourthSelectedOption === "partialWithdrawal"} onChange={(e) => handleForthSelectedOption(e)} />
                                        <span className="pl-2">partial withdrawal </span>
                                        {fourthSelectedOption === "partialWithdrawal" ? <input value={withdralAmount} onChange={(e) => setWithdralAmount(e.target.value)} type="number" placeholder="withdrwal amount" /> : ""}
                                    </div>
                                    <div>
                                        <input value="paymentWithdrawl" onChange={(e) => handleForthSelectedOption(e)} type="checkbox" placeholder="payment withdrawl" name="paymentWithdrawl" checked={fourthSelectedOption === "paymentWithdrawl"} />
                                        <span className="pl-2">payment withdrawl</span>
                                    </div>
                                    {fourthSelectedOption === "paymentWithdrawl" ? (
                                        <div className="pl-4 pt-3">
                                            <div className="flex">
                                                <input type="checkbox" value="eligible" name="eligible" onChange={(e) => handleFithSelectedOption(e)} checked={fithSelectedOption === "eligible"} />
                                                <span className="pl-2">eligible for tax refund</span>

                                            </div>
                                            <div className="flex">
                                                <input type="checkbox" value="noteligible" name="noteligible" onChange={(e) => handleFithSelectedOption(e)} checked={fithSelectedOption === "noteligible"} />
                                                <span className="pl-2">not eligible for tax refund</span>
                                            </div>
                                        </div>

                                    ) : ""}
                                </div>
                            )
                                : ""}
                        </div>

                    </div>
                    <div className="grid w-full gap-y-4">
                        {error ? <div className="text-red-500 border-2 border-red-500">{error}</div> : ""}
                        <button onClick={handleClearForm} className="py-2 px-6 bg-blue-800 mt-5 max-w-[200px] mx-auto rounded-xl text-white">Clear Form</button>
                        <button onClick={handleSendForm} className="p-3 bg-orange-400 mt-5 rounded-xl  text-white">Send Form</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Container;