import { Button, Input, Textarea } from "@nextui-org/react";
import { nombreReglas, correoReglas, mensajeReglas } from "@js/arrays/rules";
import { useEmailSender } from "@js/hooks/useEmailSender";
import { Toaster } from "react-hot-toast";


const Contacto = () => {
  const { register, handleSubmit, errors, sumbitEmail } = useEmailSender();
  return (
    <section className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-background to-default-400 rounded-md flex flex-col gap-2 p-4 shadow-md shadow-foreground-500/50">
      <h2>Contacto</h2>
      <article>
        <p className="text-[clamp(0.75rem,_0.417vw_+_0.667rem,_1rem)]">
          ¿Tienes alguna pregunta o simplemente quieres charlar sobre desarrollo
          web? ¡Estoy aquí para ayudarte! No dudes en enviarme un mensaje y te
          responderé lo antes posible. 😊
        </p>
      </article>
      <form
        onSubmit={handleSubmit(sumbitEmail)}
        className="grid gap-2 place-items-center"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="text"
            variant="underlined"
            label="Nombre completo"
            {...register("nombrecompleto", nombreReglas)}
            isInvalid={errors.nombrecompleto ? true : false}
            errorMessage={errors.nombrecompleto?.message}
            classNames={{ errorMessage: "text-danger-500" }}
          />
          <Input
            type="email"
            variant="underlined"
            label="Correo"
            {...register("correo", correoReglas)}
            isInvalid={errors.correo ? true:false}
            errorMessage={errors.correo?.message}
            classNames={{ errorMessage: "text-danger-500" }}
          />
        </div>
        <Textarea
          variant="underlined"
          label="Mensaje"
          {...register("mensaje", mensajeReglas)}
          isInvalid={errors.mensaje ? true:false}
          errorMessage={errors.mensaje?.message}
          classNames={{ errorMessage: "text-danger-500" }}
        />
        <Button
          type="submit"
          size="md"
          variant="ghost"
          color="primary"
          className="w-full sm:w-fit"
        >
          Enviar
        </Button>
      </form>
      <Toaster />
     
    </section>
  );
};

export default Contacto;
