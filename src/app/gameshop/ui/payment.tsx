"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

type Payment = {
  total: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const schema = yup
  .object({
    firstName: yup
      .string()
      .required("Enter Name")
      .matches(/^[A-Za-zğüşöçıİĞÜŞÖÇ\s]+$/, "Only Letters"),
    lastName: yup
      .string()
      .required("Enter Last Name")
      .matches(/^[A-Za-zğüşöçıİĞÜŞÖÇ\s]+$/, "Only Letters"),
    cardNumber: yup
      .string()
      .required("Enter Credit Cart")
      .transform((value) => value.replace(/-/g, ""))
      .matches(/^\d+$/)
      .min(16)
      .max(16),
    month: yup
      .number()
      .typeError("Enter Valid Month")
      .min(1, "Month Must Be Between 1-12")
      .max(12, "Month Must Be Between 1-12")
      .required("Enter Valid Month"),
    year: yup
      .number()
      .typeError("Enter Valid Year")
      .min(2025)
      .max(2050)
      .required(),
    CVV: yup.number().typeError("Enter Valid CVV").min(100).max(999).required(),
  })
  .required();

export default function Payment({ total, setOpen }: Payment) {
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    setOpen((prev) => !prev);
    alert("Payment Success");
  };

  const formatCardNumber = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, "");

    const groups = onlyNumbers.match(/.{1,4}/g);
    return groups ? groups.join("-") : "";
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto";
    };
  }, [setOpen]);

  return (
    <div className="top-0 left-0 bottom-0 right-0 fixed w-full h-full bg-black/80   ">
      <div className="flex h-full w-full z-40 overflow-auto  items-center justify-center">
        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-background-primary w-[600px] max-md:w-full max-md:hf-full  justify-between  h-[500px] border-2 border-border rounded-md p-4 flex flex-col"
        >
          <div className="flex justify-between">
            <p className="font-bold">Payment</p>
            <div className="flex items-center gap-4">
              <p className="text-text-primary font-bold">Secure</p>
              <button onClick={() => setOpen((prev) => !prev)}>
                <span className="material-symbols-outlined cursor-pointer bg-background-secondary rounded-full p-2">
                  close
                </span>
              </button>
            </div>
          </div>

          <label>
            <p>Credit Cart</p>
            <input
              placeholder="Card Number*"
              className="flex border w-full border-border outline-none p-2"
              maxLength={19}
              {...register("cardNumber")}
              onChange={(e) => {
                const formatted = formatCardNumber(e.target.value);
                setValue("cardNumber", formatted);
              }}
            />
            <p className="text-text-primary">{errors.cardNumber?.message}</p>
          </label>

          <div className="flex max-md:flex-col gap-2">
            <label>
              <p>Month</p>

              <input
                className="border  w-full    border-border outline-none p-2"
                placeholder="MM*"
                {...register("month")}
              />
              <p className="text-text-primary">{errors.month?.message}</p>
            </label>
            <label className="flex  flex-col">
              <p>Year</p>
              <input
                className="border  w-full   border-border outline-none p-2"
                placeholder="YY*"
                {...register("year")}
              />
              <p className="text-text-primary">{errors.year?.message}</p>
            </label>
            <label className="flex  flex-col">
              <p>CVV</p>
              <input
                className="border w-full   border-border outline-none p-2"
                placeholder="CVV/CVC*"
                {...register("CVV")}
              />
              <p className="text-text-primary">{errors.CVV?.message}</p>
            </label>
          </div>
          <div className="mx-auto lg:gap-4 max-lg:w-full max-lg:flex-col flex">
            <label className="flex flex-col">
              <p>First Name</p>
              <input
                className="border    border-border outline-none p-2"
                placeholder="First Name*"
                {...register("firstName")}
              />
              <p className="text-text-primary">{errors.firstName?.message}</p>
            </label>
            <label className="flex flex-col">
              <p>Last Name</p>
              <input
                className="border   border-border outline-none p-2"
                placeholder="Last Name*"
                {...register("lastName")}
              />
              <p className="text-text-primary">{errors.lastName?.message}</p>
            </label>
          </div>
          <div>
            <p className="text-right">Order Total: ${total}</p>
          </div>
          <button className=" p-2 hover:bg-white  hover:text-black font-bold text-xl cursor-pointer transition-all duration-100 bg-text-primary">
            Pay
          </button>
        </form>
      </div>
    </div>
  );
}
