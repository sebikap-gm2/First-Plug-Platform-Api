import { isISODate } from "../utils";
import { z } from "zod";

export const memberValidation = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  dateOfBirth: z
    .string()
    .refine(isISODate, { message: "Not a valid ISO string date " }),
  phone: z.string().min(1),
  email: z.string().min(1).email(),
  DNI: z.string().min(1),
  jobPosition: z.string().min(1),
  city: z.string().min(1),
  zipCode: z.string().min(1),
  address: z.string().min(1),
  appartment: z.string().nullable(),
  joiningDate: z
    .string()
    .refine(isISODate, { message: "Not a valid ISO string date " }),
  timeSlotForDelivery: z.string(),
  additionalInfo: z.string().nullable(),
  teams: z.array(z.string()),
});

export const memberCollectionValidation = z.array(memberValidation);
