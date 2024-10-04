import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea";

export default function CardWithForm() {
  return (
    <Card className="w-[350px] p-4 rounded-lg border-2 border-transparent bg-background 
      hover:border-white hover:shadow-[0_0_15px_5px_rgba(255,255,255,0.6)] transition-all duration-300">
      <CardHeader>
        <CardTitle className='text-xl text-center'>CONTÁCTANOS</CardTitle>
        <CardDescription>Ponte en contacto con nosotros si tienes algun problema.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Nombre</Label>
              <Input  type="text" id="name" placeholder="Nombre"  />
              
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="app">Apellido</Label>
              <Input  type="text" id="app" placeholder="Apellido" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="correo">Correo</Label>
              <Input  type="email" id="correo" placeholder="Correo" required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mensaje">Mensaje</Label>
              <Textarea placeholder="Tu mensaje" required/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button className='bg-primary' variant="outline" > Enviar</Button>
      </CardFooter>
    </Card>
  )
}
