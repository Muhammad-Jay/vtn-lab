import { cva } from "class-variance-authority";

export const splitVariants = cva(

    "relative grid w-full h-full",

    {

        variants: {

            variant: {

                default:

                    "gap-6! p-6!",

                comfortable:

                    "gap-8! p-8!",

                compact:

                    "gap-3! p-3!",

                flush:

                    "gap-0 p-0!",

            },

        },

        defaultVariants: {

            variant: "default",

        },

    }

);