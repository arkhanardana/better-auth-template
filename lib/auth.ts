import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./prisma";
import { twoFactor } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  appName: "My App",
  plugins: [
    twoFactor({
      otpOptions: {
        async sendOTP({ user, otp }, request) {
          console.log(otp);
        },
      },
    }),
  ],
});
