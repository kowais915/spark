import Link from "next/link"

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const FormView = () => {
  return (
    <div className="mx-auto max-w-sm border-none">
      <CardHeader>
        <CardTitle className="text-2xl text-red-600">
            Sign in
        </CardTitle>
        <CardDescription>
        Enter your email and password to sign in!
        </CardDescription>

        <div className="flex items-center justify-center mx-auto w-[8rem]">
            <Separator className="my-4" />
            <p className="text-slate-400"> or</p>
            <Separator className="my-4" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="mail@sammple.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
             
            </div>
            <Input id="password" type="password" required />
          </div>

          <div>
            <div>Checkbox</div>
            <Link href="#" className="underline ml-1 text-red-600">
          Forgot your password?
          </Link>
          </div>
          <Button type="submit" className="w-full bg-red-600 text-white">
            Sign in
          </Button>
         
        </div>
        <div className="mt-4 text-center text-sm">
          Not registred? 
          <Link href="#" className="underline ml-1 text-red-600">
          Create an account.
          </Link>
        </div>
      </CardContent>
    </div>
  )
}

export default FormView;