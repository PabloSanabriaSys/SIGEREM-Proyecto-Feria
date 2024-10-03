import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, como enviar los datos a tu servidor
    console.log("Datos enviados:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-white">
      <Input
        className=''
        type="text"
        name="name"
        placeholder="Tu Nombre"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="email"
        name="email"
        placeholder="Tu Correo Electrónico"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Textarea
        name="message"
        placeholder="Tu Mensaje"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <Button type="submit" className="w-full">
        Enviar Mensaje
      </Button>
    </form>
  );
}
